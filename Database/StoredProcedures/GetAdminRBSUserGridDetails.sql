
GO
 
IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetAdminRBSUserGridDetails]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[GetAdminRBSUserGridDetails]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*****************************
Purpose: Get product details by id

Parameters: No imput params
*****************************/

CREATE PROCEDURE [dbo].[GetAdminRBSUserGridDetails]
  @UserId VARCHAR(500),
  @searchvalue VARCHAR(500) = ''
AS
BEGIN
	SET NOCOUNT ON
	
	BEGIN TRY

    DECLARE @ErrorMessage NVARCHAR(2000) = '',
		  @ErrorSeverity NVARCHAR(50) = '',
		  @ErrorState NVARCHAR(50) = '';

    SELECT EM.MenuId AS MenuId, EM.MenuName AS MenuName, 
      CASE WHEN EM.MainMenuId IS NULL THEN 1 ELSE 0 END AS IsMainMenu,
      ISNULL(RBS.IsRead, 0) AS IsRead, ISNULL(RBS.IsAdd, 0) AS IsAdd, ISNULL(RBS.IsEdit, 0) AS IsEdit, ISNULL(RBS.IsDelete, 0) AS IsDelete,
      ROW_NUMBER() OVER (ORDER BY CASE WHEN EM.MainMenuId IS NULL THEN EM.MenuId ELSE EM.MainMenuId END, 
      CASE WHEN EM.MainMenuId IS NULL THEN 0 ELSE EM.OrderBy END) AS RowNumber,
      ISNULL((SELECT COUNT(*) 
              FROM employeemenus EMM 
              WHERE EMM.MainMenuId = EM.MenuId 
                AND EMM.IsDeleted = 0
                AND EMM.IsNotActive = 0), 0) AS NoofSubMenus,
      ISNULL(EM.MainMenuId, 0) AS MainMenuId
    FROM employeemenus EM WITH(NOLOCK)
      LEFT JOIN RBSUserPermissions RBS WITH(NOLOCK)
        ON RBS.MenuId = EM.MenuId AND RBS.IsDeleted = 0
          AND RBS.UserId = @UserId
    WHERE EM.IsDeleted = 0
      AND EM.IsNotActive = 0
	  AND (@searchvalue = '' OR (EM.MenuId LIKE '%' + @searchvalue + '%' OR EM.MenuName LIKE '%' + @searchvalue + '%'))
    ORDER BY CASE WHEN EM.MainMenuId IS NULL THEN EM.MenuId ELSE EM.MainMenuId END, 
      CASE WHEN EM.MainMenuId IS NULL THEN 0 ELSE EM.OrderBy END

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

