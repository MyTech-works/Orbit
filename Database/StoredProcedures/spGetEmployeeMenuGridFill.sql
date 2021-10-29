GO
 
IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[spGetEmployeeMenuGridFill]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[spGetEmployeeMenuGridFill]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[spGetEmployeeMenuGridFill]
AS
BEGIN
	SET NOCOUNT ON
	
	BEGIN TRY
    
    DECLARE @ErrorMessage NVARCHAR(2000) = '',
		  @ErrorSeverity NVARCHAR(50) = '',
		  @ErrorState NVARCHAR(50) = ''


    SELECT MenuId, MenuName, CASE WHEN MainMenuId IS NULL THEN '' 
                              ELSE ISNULL((SELECT TOP 1 EMM.MenuName FROM dbo.EmployeeMenus EMM WHERE EMM.MenuId = EM.MainMenuId), '') END AS MainMenu, 
      URLPath, OrderBy, IsNotActive, NotActiveDate, CreatedDate,
      ModifiedDate, IsDeleted, FontIcon
    FROM dbo.EmployeeMenus EM
    WHERE EM.IsDeleted = 0

  END TRY
	BEGIN CATCH
    
    SELECT 'Something went wrong'
		
    EXEC [Fn_ErrorFetch] @@SPID    
        
    INSERT INTO tbl_StoredProcedure_Error(MenuID, App_User, SQL_User, Server_Name, [Procedure_Name],    
            Error_Code, Line_Number, [Error_Message], [Error_State], Logged_Date, [INPUT_PARAMS])     
    SELECT 1, 1000, USER_NAME(), @@SERVERNAME, ERROR_PROCEDURE(), ERROR_NUMBER(),    
          ERROR_LINE(), ERROR_MESSAGE(), ERROR_STATE(), GETUTCDATE(), (SELECT PIN FROM TBL_ERRORFETCH);          
       
    SELECT @ErrorMessage = 'Stored Procedure Returns Error', @ErrorSeverity = ERROR_SEVERITY(), @ErrorState = ERROR_STATE()
   
	END CATCH ;   
END

