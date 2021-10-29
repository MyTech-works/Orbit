GO
 
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_StoredProcedure_Error]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_StoredProcedure_Error](
	[ID] [bigint] IDENTITY(1000,1) NOT NULL,
	[MenuID] [int] NULL,
	[App_User] [bigint] NULL,
	[SQL_User] [varchar](1000) NULL,
	[Server_Name] [varchar](max) NULL,
	[Procedure_Name] [nvarchar](130) NULL,
	[Error_Code] [bigint] NULL,
	[Error_State] [bigint] NULL,
	[Line_Number] [bigint] NULL,
	[Error_Message] [nvarchar](max) NULL,
	[Logged_Date] [datetime] NULL,
	[NotActive] [bit] NULL,
	[Closed_Date] [datetime] NULL,
	[INPUT_PARAMS] [varchar](max) NULL,
 CONSTRAINT [PK_tbl_StoredProcedure_Error] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
