
IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetAdminUserGrid]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[GetAdminUserGrid]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*****************************
Purpose: Get product details by id

Parameters: No imput params
*****************************/

CREATE PROCEDURE [dbo].[GetAdminUserGrid]
AS
BEGIN
	SET NOCOUNT ON
	
	BEGIN TRY

    DECLARE @ErrorMessage NVARCHAR(2000) = '',
		  @ErrorSeverity NVARCHAR(50) = '',
		  @ErrorState NVARCHAR(50) = '';

    SELECT ANR.Id AS UserId, UPPER(UserName) AS UserName,
      ANR.Email AS Email, UPPER(AA.Name) AS Role
    FROM AspNetUsers ANR WITH(NOLOCK)
      JOIN AspNetUserRoles AR
        ON AR.UserId = ANR.Id
      JOIN AspNetRoles AA
        ON AA.Id = AR.RoleId
    WHERE UPPER(AA.Name) IN ('SUPERADMIN', 'ADMIN')
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

