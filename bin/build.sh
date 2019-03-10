#/bin/bash

mkdir -p  ../dist
cd ../dist
zip application ../src/src/* ../src/manifest/manifest.webapp -j
zip totp1 application.zip ../src/manifest/* -j

adb push totp1.zip /sdcard/apps/totp1.zip
