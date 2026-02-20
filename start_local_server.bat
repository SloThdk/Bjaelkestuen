@echo off
title Bjælkestuen Demo Server
cd /d "%~dp0"

echo.
echo   Bjælkestuen - Starting Server...
echo.

REM Clean up port 3001
for /f "tokens=5" %%a in ('netstat -aon 2^>nul ^| findstr ":3001.*LISTENING"') do taskkill /F /PID %%a >nul 2>&1
if exist ".next\dev\lock" del /f /q ".next\dev\lock" >nul 2>&1

REM Open browser in 10 seconds
start "" /min cmd /c "timeout /t 10 /nobreak >nul & start http://localhost:3001"

echo   Server starting on http://localhost:3001
echo   Browser will open automatically.
echo.
echo   DO NOT CLOSE THIS WINDOW!
echo   Press Ctrl+C to stop the server.
echo.

set PORT=3001
call npm run dev

echo.
echo   Server stopped.
pause
