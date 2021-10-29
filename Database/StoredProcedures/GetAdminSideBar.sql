
GO
 
IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetAdminSideBar]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[GetAdminSideBar]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*****************************
Purpose: Get Admin panel side menu details

Parameters: @UserID
*****************************/

CREATE PROCEDURE [dbo].[GetAdminSideBar]
  @UserID VARCHAR(500)
AS
BEGIN
	SET NOCOUNT ON
	
	BEGIN TRY

    DECLARE @ErrorMessage NVARCHAR(2000) = '',
		  @ErrorSeverity NVARCHAR(50) = '',
		  @ErrorState NVARCHAR(50) = '',
      @RoleId VARCHAR(500);

    SELECT @RoleId = RoleId
    FROM AspNetUserRoles
    WHERE UserId = @UserID

    IF EXISTS (SELECT 1
               FROM RBSUserPermissions RUP WITH(NOLOCK)
               WHERE UserId = @UserID
                 AND RUP.IsRead = 1)
    BEGIN

      SELECT EM.MenuId, EM.MenuName, EM.MainMenuId, EM.URLPath, EM.OrderBy, EM.FontIcon,
         CASE WHEN EM.MainMenuId IS NULL THEN 1 ELSE 0 END AS IsMainMenu,
         ISNULL(RRP.IsRead, 0) AS IsRead, ISNULL(RRP.IsAdd, 0) AS IsAdd, ISNULL(RRP.IsEdit, 0) AS IsEdit, ISNULL(RRP.IsDelete, 0) AS IsDelete,
         ISNULL((SELECT COUNT(*) 
                  FROM employeemenus EMM 
                  WHERE EMM.MainMenuId = EM.MenuId 
                    AND EMM.IsDeleted = 0
                    AND EMM.IsNotActive = 0), 0) AS NoofSubMenus
      FROM RBSUserPermissions RRP WITH(NOLOCK)
        JOIN EmployeeMenus EM WITH(NOLOCK)
          ON EM.MenuId = RRP.MenuId
            AND EM.IsNotActive = 0 AND EM.IsDeleted = 0
      WHERE RRP.UserId = @UserID
        AND RRP.IsRead = 1
      ORDER BY EM.OrderBy

    END
    ELSE
    BEGIN

      SELECT EM.MenuId, EM.MenuName, EM.MainMenuId, EM.URLPath, EM.OrderBy, EM.FontIcon,
         CASE WHEN EM.MainMenuId IS NULL THEN 1 ELSE 0 END AS IsMainMenu,
         ISNULL(RRP.IsRead, 0) AS IsRead, ISNULL(RRP.IsAdd, 0) AS IsAdd, ISNULL(RRP.IsEdit, 0) AS IsEdit, ISNULL(RRP.IsDelete, 0) AS IsDelete,
         ISNULL((SELECT COUNT(*) 
                  FROM employeemenus EMM 
                  WHERE EMM.MainMenuId = EM.MenuId 
                    AND EMM.IsDeleted = 0
                    AND EMM.IsNotActive = 0), 0) AS NoofSubMenus
      FROM RBSRolePermissions RRP WITH(NOLOCK)
        JOIN EmployeeMenus EM WITH(NOLOCK)
          ON EM.MenuId = RRP.MenuId
            AND EM.IsNotActive = 0 AND EM.IsDeleted = 0
      WHERE RRP.RoleId = @RoleId
        AND RRP.IsRead = 1
      ORDER BY EM.OrderBy

    END
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
GO