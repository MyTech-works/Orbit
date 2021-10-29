namespace SK_CRM.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class kkk : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.[SK.QuotationDetails]", "QuotationPath", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.[SK.QuotationDetails]", "QuotationPath");
        }
    }
}
