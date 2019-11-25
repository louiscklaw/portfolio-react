#!/usr/bin/env sh

cd assets/icons
convert  icon_origional.png  -resize  72x72  icon_72x72.png
convert  icon_origional.png  -resize  96x96  icon_96x96.png
convert  icon_origional.png  -resize  128x128  icon_128x128.png
convert  icon_origional.png  -resize  144x144  icon_144x144.png
convert  icon_origional.png  -resize  152x152  icon_152x152.png
convert  icon_origional.png  -resize  192x192  icon_192x192.png
convert  icon_origional.png  -resize  384x384  icon_384x384.png
convert  icon_origional.png  -resize  512x512  icon_512x512.png
