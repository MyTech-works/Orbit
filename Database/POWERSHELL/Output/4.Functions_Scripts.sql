----------------------------------------------------------------------------------------------------------------------------------------------------------------
--      Fn_CommonSpliter.sql
----------------------------------------------------------------------------------------------------------------------------------------------------------------

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE FUNCTION [dbo].[Fn_CommonSpliter](@String NVARCHAR(MAX), @Delimiter VARCHAR(10))        
RETURNS @temptable TABLE (ID BIGINT,items NVARCHAR(MAX) )        
as        
BEGIN        
    DECLARE @idx INT,
            @ID   BIGINT = 1,
            @slice NVARCHAR(MAX)
            
    SELECT @idx = 1, @Delimiter = LTRIM(RTRIM(@Delimiter)), @String = RTRIM(@String) 
          
    IF LEN(@String) < 1 or ISNULL(@String, '') = ''
      RETURN    
      
    IF ISNULL(@Delimiter, '') = ''
    BEGIN
      INSERT INTO @temptable(ID, Items) VALUES(@ID,@String)  
      RETURN      
    END     
       
    WHILE @idx!= 0        
    BEGIN        
        SET @idx = patindex('%' + @Delimiter + '%', @String)    
            
        IF @idx!=0        
            SET @slice = left(@String, @idx - 1)        
        ELSE        
            SET @slice = @String        
           
        IF(LEN(@slice) > 0)   
            INSERT INTO @temptable(ID, Items) VALUES(@ID, @slice)
                    
        IF LEN(@String) >= LEN(@Delimiter)
          SET @String = RIGHT(@String,LEN(@String) - (@idx + LEN(@Delimiter) - 1)) 
        SET @ID+= 1       
        IF LEN(@String) = 0 BREAK        
    END    
RETURN        
END
GO

