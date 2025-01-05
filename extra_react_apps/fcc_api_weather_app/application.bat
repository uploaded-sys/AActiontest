::this is a batch file to start a react application in devlopment mode {template} 
::you can set the bellow as echo on if you want to see the process 
@echo on
:: Install dependencies if they are not already installed
call npm install
IF %ERRORLEVEL% NEQ 0 EXIT /B %ERRORLEVEL%
:: Open the server in the default browser
start http://localhost:5173 :: replace with your port
timeout /t 5 /nobreak >nul
:: Start the development server
npm run dev
