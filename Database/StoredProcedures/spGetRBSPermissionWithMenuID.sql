GO
 
IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[spGetRBSPermissionWithMenuID]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[spGetRBSPermissionWithMenuID]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*****************************
Purpose: Check RBS Permission for Selected User

Parameters: CategoryId
*****************************/

CREATE PROCEDURE [dbo].[spGetRBSPermissionWithMenuID]
  @MenuId BIGINT,
  @UserID VARCHAR(500)
AS
BEGIN
	SET NOCOUNT ON
	
	BEGIN TRY

    DECLARE @ErrorMessage NVARCHAR(2000) = '',
		  @ErrorSeverity NVARCHAR(50) = '',
		  @ErrorState NVARCHAR(50) = '',
      @RoleId VARCHAR(500),
      @IsRead BIT,
      @IsAdd BIT,
      @IsEdit BIT,
      @IsDelete BIT;

    SELECT @RoleId = RoleId
    FROM AspNetUserRoles
    WHERE UserId = @UserID

    IF EXISTS (SELECT 1
               FROM RBSUserPermissions RUP WITH(NOLOCK)
               WHERE UserId = @UserID
                 AND RUP.MenuId = @MenuId
                 AND RUP.IsRead = 1)
    BEGIN

      SELECT TOP 1 @IsRead = RRP.IsRead, @IsAdd = RRP.IsAdd, @IsEdit = RRP.IsEdit, @IsDelete = RRP.IsDelete 
      FROM RBSUserPermissions RRP WITH(NOLOCK)
        JOIN EmployeeMenus EM WITH(NOLOCK)
          ON EM.MenuId = RRP.MenuId
            AND EM.IsNotActive = 0 AND EM.IsDeleted = 0
      WHERE RRP.UserId = @UserID
        AND RRP.MenuId = @MenuId

    END
    ELSE
    BEGIN

      SELECT TOP 1 @IsRead = RRP.IsRead, @IsAdd = RRP.IsAdd, @IsEdit = RRP.IsEdit, @IsDelete = RRP.IsDelete
      FROM RBSRolePermissions RRP WITH(NOLOCK)
        JOIN EmployeeMenus EM WITH(NOLOCK)
          ON EM.MenuId = RRP.MenuId
            AND EM.IsNotActive = 0 AND EM.IsDeleted = 0
      WHERE RRP.RoleId = @RoleId
        AND RRP.MenuId = @MenuId

    END

    SELECT ISNULL(@IsRead, 0) AS IsRead, ISNULL(@IsAdd, 0) AS IsAdd, ISNULL(@IsEdit, 0) AS IsEdit, ISNULL(@IsDelete, 0) AS IsDelete

  END TRY
	BEGIN CATCH

		EXEC [Fn_ErrorFetch] @@SPID    
        
    INSERT INTO tbl_StoredProcedure_Error(MenuID, App_User, SQL_User, Server_Name, [Procedure_Name],    
            Error_Code, Line_Number, [Error_Message], [Error_State], Logged_Date, [INPUT_PARAMS])     
    SELECT 1, 1000, USER_NAME(), @@SERVERNAME, ERROR_PROCEDURE(), ERROR_NUMBER(),    
          ERROR_LINE(), ERROR_MESSAGE(), ERROR_STATE(), GETUTCDATE(), (SELECT PIN FROM TBL_ERRORFETCH);          
       
    SELECT @ErrorMessage = 'Stored Procedure Returns Error', @ErrorSeverity = ERROR_SEVERITY(), @ErrorState = ERROR_STATE()


		RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState);   
	END CATCH ;   
END

