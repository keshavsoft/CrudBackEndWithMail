@echo off
cd ..\CrudFrontEndGulp
git pull

call gulp build:publicDir

xcopy .\publicDir ..\CrudBackEndWithMail\public\Students /h /i /c /k /e /r /y

cd ..\CrudBackEndWithMail
