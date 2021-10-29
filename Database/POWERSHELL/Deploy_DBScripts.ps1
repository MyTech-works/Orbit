# Throwing any errors then run this script: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
# Rnun Command: .\Deploy_DBScript.ps1
param(
    #[string]$path = $(throw "You must enter the path to the .sql files you want to append."),
    [string]$DbscriptFile = "2.DB_Scripts.sql",
    [string]$TablesFile = "1.Tables_Scripts.sql",
    [string]$Triggers = "3.Triggers_Scripts.sql",
    [string]$Functions = "4.Functions_Scripts.sql",

    [string]$Tables = "Tables",
    [string]$SP = "StoredProcedures",
    [string]$output = "POWERSHELL\Output",
    [string]$Trigger = "Triggers",
    [string]$Function = "Functions"
)
$Basepath = "C:\Users\Neela Narayanan\source\repos\Database"
$path = "$Basepath\$Tables"
$outputpath = "$Basepath\$output"
$outFile = "$outputpath\$TablesFile"
 
cls
if((Test-Path $outFile) -eq $true) {Remove-Item -Path $outFile -Force}
 
$files = Get-ChildItem -LiteralPath $path -Include "*.sql" -Recurse | Sort-Object -Property Name
 
New-Item -ItemType file -Path $outFile -Force | Out-Null
 
foreach($file in $files)
{
    Write-Host "Appending file $file..." -ForegroundColor Gray
    $content = Get-Content -Path $file.FullName
    Add-Content -Path $outFile "----------------------------------------------------------------------------------------------------------------------------------------------------------------"
    Add-Content -Path $outFile "--      $File"
    Add-Content -Path $outFile "----------------------------------------------------------------------------------------------------------------------------------------------------------------"
    Add-Content -Path $outFile $content
    Add-Content -Path $outFile "GO`n"
}
 
Write-Host "Completed file $outFile" -ForegroundColor DarkGreen

$path = "$Basepath\$SP"
$outputpath = "$Basepath\$output"
$outFile = "$outputpath\$DbscriptFile"
 
cls
if((Test-Path $outFile) -eq $true) {Remove-Item -Path $outFile -Force}
 
$files = Get-ChildItem -LiteralPath $path -Include "*.sql" -Recurse | Sort-Object -Property Name
 
New-Item -ItemType file -Path $outFile -Force | Out-Null
 
foreach($file in $files)
{
    Write-Host "Appending file $file..." -ForegroundColor Gray
    $content = Get-Content -Path $file.FullName
    Add-Content -Path $outFile "----------------------------------------------------------------------------------------------------------------------------------------------------------------"
    Add-Content -Path $outFile "--      $File"
    Add-Content -Path $outFile "----------------------------------------------------------------------------------------------------------------------------------------------------------------"
    Add-Content -Path $outFile $content
    Add-Content -Path $outFile "GO`n"
}
 
Write-Host "Completed file $outFile" -ForegroundColor DarkGreen

$path = "$Basepath\$Trigger"
$outputpath = "$Basepath\$output"
$outFile = "$outputpath\$Triggers"
 
cls
if((Test-Path $outFile) -eq $true) {Remove-Item -Path $outFile -Force}
 
$files = Get-ChildItem -LiteralPath $path -Include "*.sql" -Recurse | Sort-Object -Property Name
 
New-Item -ItemType file -Path $outFile -Force | Out-Null
 
foreach($file in $files)
{
    Write-Host "Appending file $file..." -ForegroundColor Gray
    $content = Get-Content -Path $file.FullName
    Add-Content -Path $outFile "----------------------------------------------------------------------------------------------------------------------------------------------------------------"
    Add-Content -Path $outFile "--      $File"
    Add-Content -Path $outFile "----------------------------------------------------------------------------------------------------------------------------------------------------------------"
    Add-Content -Path $outFile $content
    Add-Content -Path $outFile "GO`n"
}
 
Write-Host "Completed file $outFile" -ForegroundColor DarkGreen


$path = "$Basepath\$Function"
$outputpath = "$Basepath\$output"
$outFile = "$outputpath\$Functions"
 
cls
if((Test-Path $outFile) -eq $true) {Remove-Item -Path $outFile -Force}
 
$files = Get-ChildItem -LiteralPath $path -Include "*.sql" -Recurse | Sort-Object -Property Name
 
New-Item -ItemType file -Path $outFile -Force | Out-Null
 
foreach($file in $files)
{
    Write-Host "Appending file $file..." -ForegroundColor Gray
    $content = Get-Content -Path $file.FullName
    Add-Content -Path $outFile "----------------------------------------------------------------------------------------------------------------------------------------------------------------"
    Add-Content -Path $outFile "--      $File"
    Add-Content -Path $outFile "----------------------------------------------------------------------------------------------------------------------------------------------------------------"
    Add-Content -Path $outFile $content
    Add-Content -Path $outFile "GO`n"
}
 
Write-Host "Completed file $outFile" -ForegroundColor DarkGreen

