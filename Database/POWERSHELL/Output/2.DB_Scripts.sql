----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      Fn_ErrorFetch.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------
GO
 
IF  EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Fn_ErrorFetch]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[Fn_ErrorFetch]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[Fn_ErrorFetch](@SPID Varchar(MAX))
  
AS
BEGIN
  DELETE FROM TBL_ERRORFETCH

  INSERT INTO TBL_ERRORFETCH (EVENTTYPE,PARAMS,PIN)
  EXEC('DBCC INPUTBUFFER('+@SPID+') WITH NO_INFOMSGS')

END
GO
GO

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      GetAdminRBSGridDetails.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------

GO
 
IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetAdminRBSGridDetails]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[GetAdminRBSGridDetails]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*****************************
Purpose: Get product details by id

Parameters: No imput params
*****************************/

CREATE PROCEDURE [dbo].[GetAdminRBSGridDetails]
  @RoleId VARCHAR(500),
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
      LEFT JOIN RBSRolePermissions RBS WITH(NOLOCK)
        ON RBS.MenuId = EM.MenuId AND RBS.IsDeleted = 0
          AND RBS.RoleId = @RoleId
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

GO

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      GetAdminRBSRoles.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------

IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetAdminRBSRoles]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[GetAdminRBSRoles]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*****************************
Purpose: Get product details by id

Parameters: No imput params
*****************************/

CREATE PROCEDURE [dbo].[GetAdminRBSRoles]
AS
BEGIN
	SET NOCOUNT ON
	
	BEGIN TRY

    DECLARE @ErrorMessage NVARCHAR(2000) = '',
		  @ErrorSeverity NVARCHAR(50) = '',
		  @ErrorState NVARCHAR(50) = '';

    SELECT Id, UPPER(Name) AS Name,
      ROW_NUMBER() OVER (ORDER BY Name) AS RowNumber
    FROM AspNetRoles ANR WITH(NOLOCK)

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

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      GetAdminRBSUserGridDetails.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------

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

GO

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      GetAdminRBSUsers.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------

IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetAdminRBSUsers]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[GetAdminRBSUsers]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*****************************
Purpose: Get product details by id

Parameters: No imput params
*****************************/

CREATE PROCEDURE [dbo].[GetAdminRBSUsers]
AS
BEGIN
	SET NOCOUNT ON
	
	BEGIN TRY

    DECLARE @ErrorMessage NVARCHAR(2000) = '',
		  @ErrorSeverity NVARCHAR(50) = '',
		  @ErrorState NVARCHAR(50) = '';

    SELECT Id, UPPER(UserName) AS Name,
      ROW_NUMBER() OVER (ORDER BY UserName) AS RowNumber
    FROM AspNetUsers ANR WITH(NOLOCK)

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

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      GetAdminSideBar.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------

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
GO

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      GetAdminUserGrid.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------

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

GO

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      GetPrefixCode.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------
GO
 
IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetPrefixCode]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[GetPrefixCode]
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

CREATE PROCEDURE [dbo].[GetPrefixCode]
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
      SELECT TOP 1 @Result = SeriesPrefix + (CASE WHEN LEN(LastUsedNo + 1) < 3 THEN REPLICATE('0', 3 - LEN(LastUsedNo + 1)) + CAST(LastUsedNo + 1 AS VARCHAR) 
        ELSE CAST(LastUsedNo + 1 AS VARCHAR) END)
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

GO

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      GetQuotationPrefixCode.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------
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

GO

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      spAdminUpdateRBSRoles.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------

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
GO

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      spAdminUpdateRBSUsers.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------

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
GO

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      spCheckRBSPermissionWithUserID.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------
GO
 
IF EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[spCheckRBSPermissionWithUserID]') AND type IN (N'P', N'PC'))
	DROP PROCEDURE [dbo].[spCheckRBSPermissionWithUserID]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*****************************
Purpose: Check RBS Permission for Selected User

Parameters: CategoryId
*****************************/

CREATE PROCEDURE [dbo].[spCheckRBSPermissionWithUserID]
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
      @Result VARCHAR(200) = 'Denied';

    SELECT @RoleId = RoleId
    FROM AspNetUserRoles
    WHERE UserId = @UserID

    IF EXISTS (SELECT 1
               FROM RBSUserPermissions RUP WITH(NOLOCK)
               WHERE UserId = @UserID
                 AND RUP.IsRead = 1)
    BEGIN

      IF EXISTS(SELECT 1
                FROM RBSUserPermissions RRP WITH(NOLOCK)
                  JOIN EmployeeMenus EM WITH(NOLOCK)
                    ON EM.MenuId = RRP.MenuId
                      AND EM.IsNotActive = 0 AND EM.IsDeleted = 0
                WHERE RRP.UserId = @UserID
                  AND RRP.MenuId = @MenuId
                  AND RRP.IsRead = 1)
      BEGIN
        SELECT @Result = 'Granted'
      END

    END
    ELSE
    BEGIN

      IF EXISTS(SELECT 1
                FROM RBSRolePermissions RRP WITH(NOLOCK)
                  JOIN EmployeeMenus EM WITH(NOLOCK)
                    ON EM.MenuId = RRP.MenuId
                      AND EM.IsNotActive = 0 AND EM.IsDeleted = 0
                WHERE RRP.RoleId = @RoleId
                  AND RRP.MenuId = @MenuId
                  AND RRP.IsRead = 1)
      BEGIN
        SELECT @Result = 'Granted'
      END

    END

    SELECT @Result

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

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      spGetEmployeeMenuGridFill.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------
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

GO

----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      spGetRBSPermissionWithMenuID.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------
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

GO

