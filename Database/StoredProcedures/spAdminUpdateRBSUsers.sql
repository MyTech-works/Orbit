
IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[spAdminUpdateRBSUsers]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[spAdminUpdateRBSUsers]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*****************************
Purpose: UPdate RBS User details

Parameters: No imput params
*****************************/

CREATE PROCEDURE [dbo].[spAdminUpdateRBSUsers]
  @RBSUsers VARCHAR(MAX),
  @UserID VARCHAR(500)
AS
BEGIN
	SET NOCOUNT ON
	
	BEGIN TRY

    BEGIN TRAN RBSUserInsert

    DECLARE @ErrorMessage NVARCHAR(2000) = '',
		  @ErrorSeverity NVARCHAR(50) = '',
		  @ErrorState NVARCHAR(50) = '',
      @ColumnSpitter VARCHAR(10) = '|',
		  @RowSpitter VARCHAR(10) = '#',
      @Query NVARCHAR(MAX);

    IF OBJECT_ID('tempdb..##RBSUsers') IS NOT NULL
			DROP TABLE ##RBSUsers

    CREATE TABLE ##RBSUsers
		(
			MenuId BIGINT,
			IsRead BIT,
			IsAdd BIT,
      IsEdit BIT,
      IsDelete BIT,
      UserId VARCHAR(1000)
		)

    SET @Query = ((SELECT ';INSERT INTO ##RBSUsers SELECT N''' + REPLACE(CAST(items AS NVARCHAR(MAX)), 
							            @ColumnSpitter, ''',N''') + '''' FROM dbo.Fn_CommonSpliter(@RBSUsers, @RowSpitter)
							          FOR XML PATH(''), ROOT('MyString'), TYPE).value('/MyString[1]','NVARCHAR(MAX)'))	
    EXEC (@Query) 

    UPDATE RP
    SET IsRead = RR.IsRead,
      IsAdd = RR.IsAdd,
      IsEdit = RR.IsEdit,
      IsDelete = RR.IsDelete,
      ModifiedBy  = @UserID,
      ModifiedDate = GETDATE()
    FROM RBSUserPermissions RP
      JOIN ##RBSUsers RR
        ON RR.UserId = RP.UserId AND RR.MenuId = RP.MenuId

    INSERT INTO RBSUserPermissions (MenuId, UserId, IsRead, IsAdd, IsEdit, IsDelete, 
      CreatedBy, CreatedDate, ModifiedBy, ModifiedDate, IsDeleted)
    SELECT RR.MenuId, RR.UserId, RR.IsRead, RR.IsAdd, RR.IsEdit, RR.IsDelete, 
      @UserID, GETDATE(), @UserID, GETDATE(), 0
    FROM ##RBSUsers RR WITH(NOLOCK)
    WHERE NOT EXISTS(SELECT 1 FROM RBSUserPermissions RP WITH(NOLOCK) WHERE RR.UserId = RP.UserId AND RR.MenuId = RP.MenuId)

    UPDATE RRP
    SET IsRead = CASE WHEN EXISTS(SELECT 1 
                  FROM RBSUserPermissions RRR WITH(NOLOCK) 
                    JOIN EmployeeMenus EMR WITH(NOLOCK)
                      ON EMR.MenuId = RRR.MenuId
                        AND EMR.IsNotActive = 0 AND EMR.IsDeleted = 0
                  WHERE EMR.MainMenuId IS NOT NULL
                    AND EMR.MainMenuId = EM.MenuId
                    AND RRR.UserId = EBS.UserId
                    AND RRR.IsRead = 1) THEN 1 ELSE 0 END ,
      IsAdd = CASE WHEN EXISTS(SELECT 1 
                  FROM RBSUserPermissions RRR WITH(NOLOCK) 
                    JOIN EmployeeMenus EMR WITH(NOLOCK)
                      ON EMR.MenuId = RRR.MenuId
                        AND EMR.IsNotActive = 0 AND EMR.IsDeleted = 0
                  WHERE EMR.MainMenuId IS NOT NULL
                    AND EMR.MainMenuId = EM.MenuId
                    AND RRR.UserId = EBS.UserId
                    AND RRR.IsAdd = 1) THEN 1 ELSE 0 END,
      IsEdit = CASE WHEN EXISTS(SELECT 1 
                  FROM RBSUserPermissions RRR WITH(NOLOCK) 
                    JOIN EmployeeMenus EMR WITH(NOLOCK)
                      ON EMR.MenuId = RRR.MenuId
                        AND EMR.IsNotActive = 0 AND EMR.IsDeleted = 0
                  WHERE EMR.MainMenuId IS NOT NULL
                    AND EMR.MainMenuId = EM.MenuId
                    AND RRR.UserId = EBS.UserId
                    AND RRR.IsEdit = 1) THEN 1 ELSE 0 END,
      IsDelete = CASE WHEN EXISTS(SELECT 1 
                  FROM RBSUserPermissions RRR WITH(NOLOCK) 
                    JOIN EmployeeMenus EMR WITH(NOLOCK)
                      ON EMR.MenuId = RRR.MenuId
                        AND EMR.IsNotActive = 0 AND EMR.IsDeleted = 0
                  WHERE EMR.MainMenuId IS NOT NULL  
                    AND EMR.MainMenuId = EM.MenuId
                    AND RRR.UserId = EBS.UserId
                    AND RRR.IsDelete = 1) THEN 1 ELSE 0 END
    FROM RBSUserPermissions RRP 
      JOIN EmployeeMenus EM WITH(NOLOCK)
        ON EM.MenuId = RRP.MenuId
          AND EM.IsNotActive = 0 AND EM.IsDeleted = 0
      JOIN ##RBSUsers EBS 
        ON EBS.UserId = RRP.UserId
          AND EBS.MenuId = RRP.MenuId
    WHERE EM.MainMenuId IS NULL
      AND EXISTS(SELECT 1 FROM EmployeeMenus EME WITH(NOLOCK) WHERE EME.MainMenuId = EM.MenuId AND EME.IsNotActive = 0 AND EME.IsDeleted = 0)

    SELECT 'Updated successfully'
    COMMIT TRAN RBSUserInsert
  END TRY
	BEGIN CATCH
    IF @@TRANCOUNT > 0 ROLLBACK TRAN RBSUserInsert;
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