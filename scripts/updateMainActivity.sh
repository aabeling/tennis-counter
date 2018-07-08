#!/bin/bash

#
# cordova hook to update the MainActivity.java file
#

echo "replacing MainActivity"
cp scripts/MainActivity.java platforms/android/app/src/main/java/de/banapple/tenniscounter/MainActivity.java