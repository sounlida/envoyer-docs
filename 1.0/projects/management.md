# Management

[[toc]]

## Overview

In Envoyer, your application is represented by a project. Projects can be deployed to one or more servers at the same time.

## Creating a Project

Click the **Add Project** button in the top of the Envoyer dashboard. You'll be presented with a modal that asks you to provide a few details about the project.

If you don't see the Source Control provider that you need, make sure that you've linked it in your account settings.

Once you've filled in the details, click **Save Project**.

:::tip Don't see the Add Project button?

Make sure that you've subscribed to one of Envoyer's paid subscriptions.
:::

## Project Settings

To make changes to your project settings, click the **Settings** button at the top of the project's dashboard.

From here, you can change the project settings, source control settings and delete the project.

### The Basics

You can edit the name, type, health check URL and how many deployments to retain.

When your site has finished deploying, Envoyer can ping it to check that it is available. Health checks are performed from three locations:

- New York
- London
- Singapore

Read more about [Heartbeats](/1.0/projects/heartbeats.html).

### Source Control

You can manage how the project is deployed here, from which source control provider, the branch that is deployed and you may also choose whether to install Composer dependencies. Envoyer also has an option to install Composer dependencies quietly. This will add the `--quiet` flag and will prevent Composer from writing additional output.

### Delete Project

If you no longer need the project, you may delete it from here. Type in the name and click **Delete Project**.

:::danger This action is irreversible!

Deleting your project is an irreversible action and we will be unable to recover it for you.
:::
