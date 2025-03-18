@echo off
cd ..\CrudFrontEndGulp
git pull

call gulp build:publicDir

xcopy .\publicDir ..\CrudGenV5\public\Students /h /i /c /k /e /r /y

cd ..\CrudGenV5
