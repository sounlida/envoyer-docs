# Servers

[[toc]]

## Overview

After creating a project, you may add as many servers as you like to the project. After adding a server, you will be given an SSH key to add to your server. You should add the SSH key to the `~/.ssh/authorized_keys` file for the users Envoyer should connect to the server as.

After you have added the SSH key to the server, click the "refresh" icon next to the server's "Connection Status" indicator. Envoyer will attempt to connect to your server and run a few health checks on the server, such as attempting to restart PHP FPM (if it is installed on the server).

:::warning Unable to restart PHP FPM?
If Envoyer was unable to restart PHP FPM, you will receive an alert on your project overview. The information modal for the alert will provide the command needed to allow Envoyer to restart FPM without a password.
:::

## Importing Laravel Forge Servers

If you have provisioned your server with [Laravel Forge](https://forge.laravel.com), you may import it into your Envoyer project. You'll need to create an API token on your Forge account and then connect it to your Envoyer account from the [Integrations](https://envoyer.io/user/profile#/integrations) dashboard.

When adding a server to your project, click the **Import Forge Server** button. Envoyer will display a modal asking you to select the server from your account and the site from the server.

Once selected, Envoyer will add the required SSH key to the connected site's user (typically `forge`, unless using a Forge configured isolated user). Envoyer will use this SSH key to connect to your server and deploy your site.

## Managing Uploaded Files

When storing user uploaded files in an Envoyer deployed Laravel application, you should store them in the application's `storage` directory. Then, you may use the "Manage Linked Folders" feature of Envoyer to create a symbolic link from your public directory to the `storage` directory. The "Manage Linked Folders" button can be found on the "Deployment Hooks" tab of your project.

If you are not using Laravel, you will essentially follow the same process. However, you will need to manually create a `storage` directory in the deployment path of your application (the same directory level as the `current` symbolic link).
