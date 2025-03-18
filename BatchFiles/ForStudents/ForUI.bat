@echo off
cd ..\crudFrontEnd

echo StartUrl="binV4"> .env
echo TableName="StudentNames">> .env

call npm run Table-ShowFromJs
call npm run CreateStatic
call npm run UnProtected-CreateStatic

xcopy .\publicDir\TableShowFromJs ..\CrudGenV5\public\Students\TableShowFromJs /h /i /c /k /e /r /y
xcopy .\publicDir\Protected\Create\Static ..\CrudGenV5\public\Students\Protected\Create\Static /h /i /c /k /e /r /y
xcopy .\publicDir\UnProtected\Create\Static ..\CrudGenV5\public\Students\UnProtected\Create\Static /h /i /c /k /e /r /y

cd ..\FrontEndForClients

call npm run Students

xcopy .\publicDir\Students ..\CrudGenV5\public\Students /h /i /c /k /e /r /y

cd ..\CrudGenV5
