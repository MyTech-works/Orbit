GO
 
IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetQuotationPrefixCode]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[GetQuotationPrefixCode]
GO
/****** Object:  StoredProcedure [dbo].[GetPrefixCode]    Script Date: 3/8/2021 9:34:38 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*****************************
Purpose: Generate Prefix code and Update Stock qty

Parameters:
@Type- Prefix type (eg: Store)
@EventType- Type of type event (eg: Prefix or Update qty)
*****************************/

CREATE PROCEDURE [dbo].[GetQuotationPrefixCode]
	@Type VARCHAR(50),
  @EventType VARCHAR(50)
AS
BEGIN
	SET NOCOUNT ON
	
	BEGIN TRY

    DECLARE @ErrorMessage NVARCHAR(2000) = '',
		  @ErrorSeverity NVARCHAR(50) = '',
		  @ErrorState NVARCHAR(50) = '',
      @CodemasterId INT,
      @TopPrefixId INT,
      @Result VARCHAR(50);

    SET @CodemasterId = ISNULL((SELECT TOP 1 TypevalueRefId 
                                FROM [SK.CodeMaster] WITH(NOLOCK)
                                WHERE Type = 'CodePrefix' 
                                  AND UPPER(Typevalues) = UPPER(@Type) AND IsActive = 1), 1);

    SET @TopPrefixId = ISNULL((SELECT TOP 1 PrefixRefId 
                               FROM [SK.CodePrefix] WITH(NOLOCK)
                               WHERE PrefixTypeId = @CodemasterId AND IsActive = 1), 1);
    IF @EventType = 'Prefix'
    BEGIN
      SELECT TOP 1 @Result = SeriesPrefix + CAST(LastUsedNo + 1 AS VARCHAR)
      FROM [SK.CodePrefix] WITH(NOLOCK)
      WHERE PrefixTypeId = @CodemasterId AND IsActive = 1;
      
    END
    ELSE
    BEGIN
      UPDATE CP
      SET LastUsedNo = LastUsedNo + 1
      FROM [SK.CodePrefix] CP
      WHERE PrefixRefId = @TopPrefixId;
     
      SET @Result = 'Updated successfully';
    END

    SELECT @Result;
  
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

