#!/bin/bash

read -p "Enter the new project name: " NEW_NAME

OLD_NAME="ReactNativeTemplate"

find . -depth -name "*$OLD_NAME*" -execdir bash -c 'mv -i "$1" "${1//$OLD_NAME/$NEW_NAME}"' bash {} \;

grep -rl "$OLD_NAME" . --exclude="$0" | xargs sed -i "s/$OLD_NAME/$NEW_NAME/g"

# chmod +x change-project-name.sh // Run This Command For Permissions
# ./change-project-name.sh  // Run This Command to Run Script

