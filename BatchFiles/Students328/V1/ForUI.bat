@echo off
cd ..\CrudFrontEndGulp
git pull

call gulp build:publicDir

xcopy .\publicDir ..\CrudBackEndWithMail\public\StudentsCRUD /h /i /c /k /e /r /y



cd ..\FrontEndForClients
git pull

call npm run Students

xcopy .\publicDir\Students ..\CrudBackEndWithMail\public /h /i /c /k /e /r /y



cd ..\CrudBackEndWithMail
