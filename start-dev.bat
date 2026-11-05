@echo off
title Prabodha AI - Development Server
echo ========================================================
echo       PRABODHA AI - LAUNCHING DEV SERVER (HMR)
echo ========================================================
echo.

set "PATH=C:\Program Files\nodejs;%PATH%"

where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not found. Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo Starting Vite development server with Hot Module Reload...
echo Open your browser at http://localhost:5173
echo.

call npm.cmd run dev -- --host 0.0.0.0
pause

