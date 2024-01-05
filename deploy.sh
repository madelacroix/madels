#!/bin/bash
echo "deploying ur site :)"

rm -rf .next
rm -rf out/

npm run build
npm run export

aws s3 cp --recursive out/ s3://www.madeldelacruz.com