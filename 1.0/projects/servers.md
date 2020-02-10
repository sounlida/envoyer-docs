# Servers

[[toc]]

## Overview

After creating a project, you may add as many servers as you like to the project. After adding a server, you will be given an SSH key to add to your server. You should add the SSH key to the authorized_keys file for the users you want to connect as.

After you have added the SSH key to the server, click the "refresh" icon next to the server's Connection Status indicator. Envoyer will attempt to connect to your server and run a few health checks on the server, such as attempting to restart PHP FPM (if it is installed on the server).

:::tip Unable to restart PHP FPM
If Envoyer was unable to restart PHP FPM, you will receive an alert on your project overview. The information modal for the alert will provide the command needed to allow Envoyer to restart FPM without a password.
:::

## Importing Laravel Forge Servers

write more.

## Managing Uploaded Files

When storing user uploaded files, you should store them in the `storage` directory of your application if you are using Laravel. Then, you may use the "Manage Linked Folders" feature of Envoyer to create a symbolic link from your public directory to the `storage` directory. The "Manage Linked Folders" button can be found on the "Deployment Hooks" tab of your project.

If you are not using Laravel, you will essentially follow the same process. However, you will need to manually create a `storage` directory in the deployment path of your application (the same directory level as the `current` symbolic link).