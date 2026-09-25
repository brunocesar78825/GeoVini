$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host " VINIGEOCLIMA BA" -ForegroundColor Cyan
Write-Host " SERVIDOR LOCAL" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Site:" -ForegroundColor White
Write-Host "http://127.0.0.1:8080" -ForegroundColor Yellow
Write-Host ""

Write-Host "Para parar o servidor:" -ForegroundColor White
Write-Host "CTRL + C" -ForegroundColor Yellow
Write-Host ""

Start-Process "http://127.0.0.1:8080"

py -m http.server 8080 --bind 127.0.0.1
