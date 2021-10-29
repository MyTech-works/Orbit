--TRUNCATE TABLE [dbo].[EmployeeMenus]
--GO
--/* EmployeeMenus Start*/
--SET IDENTITY_INSERT [dbo].[EmployeeMenus] ON 

--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (1, N'Company Details', NULL, NULL, 1, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'home', NULL, NULL, NULL, NULL)
--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (2, N'Company List', 1, N'/company', 1, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'circle', NULL, NULL, NULL, NULL)
--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (3, N'Add Company', 1, N'/company/create', 2, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'circle', NULL, NULL, NULL, NULL)
--GO

--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (4, N'Products', NULL, NULL, 2, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'database', NULL, NULL, NULL, NULL)
--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (5, N'Product List', 4, N'/product', 1, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'circle', NULL, NULL, NULL, NULL)
--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (6, N'Add Product', 4, N'/product/create', 2, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'circle', NULL, NULL, NULL, NULL)
--GO


--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (7, N'Quotations', NULL, NULL, 3, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'file-text', NULL, NULL, NULL, NULL)
--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (8, N'Quotation List', 7, N'/quotations', 1, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'circle', NULL, NULL, NULL, NULL)
--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (9, N'Add Quotation', 7, N'/quotations/create', 2, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'circle', NULL, NULL, NULL, NULL)
--GO

--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (10, N'Roles', NULL, NULL, 4, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'users', NULL, NULL, NULL, NULL)
--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (11, N'Role List', 10, N'/roles', 1, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'circle', NULL, NULL, NULL, NULL)
--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (12, N'Add Role', 10, N'/roles/create', 2, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'circle', NULL, NULL, NULL, NULL)
--GO

--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (13, N'Users', NULL, NULL, 5, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'user-plus', NULL, NULL, NULL, NULL)
--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (14, N'User List', 13, N'/account', 1, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'circle', NULL, NULL, NULL, NULL)
--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (15, N'Add User', 13, N'/account/create', 2, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'circle', NULL, NULL, NULL, NULL)
--GO

--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (16, N'RBS Settings', NULL, NULL, 6, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'settings', NULL, NULL, NULL, NULL)
--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (17, N'RBS Role', 16, N'/rbssettings', 1, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'circle', NULL, NULL, NULL, NULL)
--GO
--INSERT [dbo].[EmployeeMenus] ([MenuId], [MenuName], [MainMenuId], [URLPath], [OrderBy], [IsNotActive], [NotActiveDate], 
--[CreatedDate], [ModifiedDate], [IsDeleted], [FontIcon], [DeletedDate], [CreatedBy], [ModifiedBy], [DeletedBy]) 
--VALUES (18, N'RBS User', 16, N'/rbssettings/rbsuser', 2, 0, NULL, GETDATE(), GETDATE(), 0, 
--N'circle', NULL, NULL, NULL, NULL)
--GO
--SET IDENTITY_INSERT [dbo].[EmployeeMenus] OFF
--GO

/* EmployeeMenus End*/
/* RBSRolePermissions Start*/
BEGIN
  DECLARE @RoleId VARCHAR(500)
  SELECT TOP 1 @RoleId = Id
  FROM AspNetRoles
  WHERE Name = 'superadmin'

  TRUNCATE TABLE [dbo].[RBSRolePermissions] 

  INSERT INTO [dbo].[RBSRolePermissions] ([RoleId], [MenuId], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [DeletedDate], [IsDeleted], 
    [DeletedBy], [IsRead], [IsAdd], [IsEdit], [IsDelete])
  SELECT @RoleId, [MenuId], 1000, GETDATE(), 1000, GETDATE(), NULL, 
    0, NULL, 1, 1, 1, 1
  FROM [dbo].[EmployeeMenus]
  WHERE IsDeleted = 0
    AND IsNotActive = 0

  SELECT TOP 1 @RoleId = Id
  FROM AspNetRoles
  WHERE Name = 'admin'

  INSERT INTO [dbo].[RBSRolePermissions] ([RoleId], [MenuId], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [DeletedDate], [IsDeleted], 
    [DeletedBy], [IsRead], [IsAdd], [IsEdit], [IsDelete])
  SELECT @RoleId, [MenuId], 1000, GETDATE(), 1000, GETDATE(), NULL, 
    0, NULL, 1, 1, 1, 1
  FROM [dbo].[EmployeeMenus]
  WHERE [MenuId] IN (4, 5, 6, 7, 8, 9)
    AND IsDeleted = 0
    AND IsNotActive = 0

  SELECT TOP 1 @RoleId = Id
  FROM AspNetRoles
  WHERE Name = 'employee'
  
  INSERT INTO [dbo].[RBSRolePermissions] ([RoleId], [MenuId], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [DeletedDate], [IsDeleted], 
    [DeletedBy], [IsRead], [IsAdd], [IsEdit], [IsDelete])
  SELECT @RoleId, [MenuId], 1000, GETDATE(), 1000, GETDATE(), NULL, 
    0, NULL, 1, 1, 1, 1
  FROM [dbo].[EmployeeMenus]
  WHERE [MenuId] IN (7, 8, 9)
    AND IsDeleted = 0
    AND IsNotActive = 0
END
GO
/* RBSRolePermissions End*/
