
IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[spAdminUpdateRBSRoles]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[spAdminUpdateRBSRoles]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*****************************
Purpose: UPdate RBS Roles details

Parameters: No imput params
*****************************/

CREATE PROCEDURE [dbo].[spAdminUpdateRBSRoles]
  @RBSRoles VARCHAR(MAX),
  @UserID VARCHAR(500)
AS
BEGIN
	SET NOCOUNT ON
	
	BEGIN TRY
    BEGIN TRAN RBSRoleInsert
    DECLARE @ErrorMessage NVARCHAR(2000) = '',
		  @ErrorSeverity NVARCHAR(50) = '',
		  @ErrorState NVARCHAR(50) = '',
      @ColumnSpitter VARCHAR(10) = '|',
		  @RowSpitter VARCHAR(10) = '#',
      @Query NVARCHAR(MAX);

    IF OBJECT_ID('tempdb..##RBSRoles') IS NOT NULL
			DROP TABLE ##RBSRoles

    CREATE TABLE ##RBSRoles
		(
			MenuId BIGINT,
			IsRead BIT,
			IsAdd BIT,
      IsEdit BIT,
      IsDelete BIT,
      RoleId VARCHAR(1000)
		)

    SET @Query = ((SELECT ';INSERT INTO ##RBSRoles SELECT N''' + REPLACE(CAST(items AS NVARCHAR(MAX)), 
							            @ColumnSpitter, ''',N''') + '''' FROM dbo.Fn_CommonSpliter(@RBSRoles, @RowSpitter)
							          FOR XML PATH(''), ROOT('MyString'), TYPE).value('/MyString[1]','NVARCHAR(MAX)'))	
    EXEC (@Query) 

    UPDATE RP
    SET IsRead = RR.IsRead,
      IsAdd = RR.IsAdd,
      IsEdit = RR.IsEdit,
      IsDelete = RR.IsDelete,
      ModifiedBy = @UserID,
      ModifiedDate = GETDATE()
    FROM RBSRolePermissions RP
      JOIN ##RBSRoles RR
        ON RR.RoleId = RP.RoleId AND RR.MenuId = RP.MenuId

    INSERT INTO RBSRolePermissions (MenuId, RoleId, IsRead, IsAdd, IsEdit, IsDelete, 
      CreatedBy, CreatedDate, ModifiedBy, ModifiedDate, IsDeleted)
    SELECT RR.MenuId, RR.RoleId, RR.IsRead, RR.IsAdd, RR.IsEdit, RR.IsDelete, 
      @UserID, GETDATE(), @UserID, GETDATE(), 0
    FROM ##RBSRoles RR
    WHERE NOT EXISTS(SELECT 1 FROM RBSRolePermissions RP WHERE RR.RoleId = RP.RoleId AND RR.MenuId = RP.MenuId)

    UPDATE RRP
    SET IsRead = CASE WHEN EXISTS(SELECT 1 
                  FROM RBSRolePermissions RRR 
                    JOIN EmployeeMenus EMR WITH(NOLOCK)
                      ON EMR.MenuId = RRR.MenuId
                        AND EMR.IsNotActive = 0 AND EMR.IsDeleted = 0
                  WHERE EMR.MainMenuId IS NOT NULL
                    AND EMR.MainMenuId = EM.MenuId
                    AND RRR.RoleId = EBS.RoleId
                    AND RRR.IsRead = 1) THEN 1 ELSE 0 END ,
      IsAdd = CASE WHEN EXISTS(SELECT 1 
                  FROM RBSRolePermissions RRR 
                    JOIN EmployeeMenus EMR WITH(NOLOCK)
                      ON EMR.MenuId = RRR.MenuId
                        AND EMR.IsNotActive = 0 AND EMR.IsDeleted = 0
                  WHERE EMR.MainMenuId IS NOT NULL
                    AND EMR.MainMenuId = EM.MenuId
                    AND RRR.RoleId = EBS.RoleId
                    AND RRR.IsAdd = 1) THEN 1 ELSE 0 END,
      IsEdit = CASE WHEN EXISTS(SELECT 1 
                  FROM RBSRolePermissions RRR 
                    JOIN EmployeeMenus EMR WITH(NOLOCK)
                      ON EMR.MenuId = RRR.MenuId
                        AND EMR.IsNotActive = 0 AND EMR.IsDeleted = 0
                  WHERE EMR.MainMenuId IS NOT NULL
                    AND EMR.MainMenuId = EM.MenuId
                    AND RRR.RoleId = EBS.RoleId
                    AND RRR.IsEdit = 1) THEN 1 ELSE 0 END,
      IsDelete = CASE WHEN EXISTS(SELECT 1 
                  FROM RBSRolePermissions RRR 
                    JOIN EmployeeMenus EMR WITH(NOLOCK)
                      ON EMR.MenuId = RRR.MenuId
                        AND EMR.IsNotActive = 0 AND EMR.IsDeleted = 0
                  WHERE EMR.MainMenuId IS NOT NULL  
                    AND EMR.MainMenuId = EM.MenuId
                    AND RRR.RoleId = EBS.RoleId
                    AND RRR.IsDelete = 1) THEN 1 ELSE 0 END
    FROM RBSRolePermissions RRP
      JOIN EmployeeMenus EM WITH(NOLOCK)
        ON EM.MenuId = RRP.MenuId
          AND EM.IsNotActive = 0 AND EM.IsDeleted = 0
      JOIN ##RBSRoles EBS 
        ON EBS.RoleId = RRP.RoleId
          AND EBS.MenuId = RRP.MenuId
    WHERE EM.MainMenuId IS NULL
      AND EXISTS(SELECT 1 FROM EmployeeMenus EME WHERE EME.MainMenuId = EM.MenuId AND EME.IsNotActive = 0 AND EME.IsDeleted = 0)

    SELECT 'Updated successfully'
    COMMIT TRAN RBSRoleInsert
  END TRY
	BEGIN CATCH
    ROLLBACK TRAN RBSRoleInsert
		EXEC [Fn_ErrorFetch] @@SPID    
        
     INSERT INTO tbl_StoredProcedure_Error(MenuID, App_User, SQL_User, Server_Name, [Procedure_Name],    
             Error_Code, Line_Number, [Error_Message], [Error_State], Logged_Date, [INPUT_PARAMS])     
     SELECT 1, @UserID, USER_NAME(), @@SERVERNAME, ERROR_PROCEDURE(), ERROR_NUMBER(),    
           ERROR_LINE(), ERROR_MESSAGE(), ERROR_STATE(), GETUTCDATE(), (SELECT PIN FROM TBL_ERRORFETCH);          
       
      SELECT @ErrorMessage = 'Stored Procedure Returns Error', @ErrorSeverity = ERROR_SEVERITY(), @ErrorState = ERROR_STATE()
        
  RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState);  
	END CATCH ;   
END
GO