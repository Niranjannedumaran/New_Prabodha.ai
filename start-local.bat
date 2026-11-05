@echo off
title Prabodha AI - Local Production Server
echo ========================================================
echo       PRABODHA AI - LAUNCHING LOCAL DEPLOYMENT
echo ========================================================
echo.

:: Ensure Node is in PATH
set "PATH=C:\Program Files\nodejs;%PATH%"

:: Verify Node
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not found. Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

:: Check if dist exists, if not build it
if not exist "dist" (
    echo Building production package...
    call npm.cmd run build
)

echo Starting local preview server at http://localhost:5173 ...
echo Press Ctrl+C in this terminal to stop the server.
echo.

call npm.cmd run preview -- --port 5173 --host 0.0.0.0
pause

