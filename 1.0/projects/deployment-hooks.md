# Deployment Hooks

[[toc]]

## Overview

Deployment hooks allow you to customize your entire deployment plan, by writing small Bash scripts to automate parts of your deployment. You may add hooks that run before or after any step in your deployment. You may also specify the servers on which each hook is executed.

Like any other step during your deployment, if a deployment hook exits with a non-zero status code, the entire deployment will be cancelled. This prevents your customers from experiencing downtime with a broken deployment.

## Deployment Lifecycle

When a deployment is triggered for your project, Envoyer will execute your deployment plan. By default, this consists of downloading a tarball of your project, installing the Composer dependencies, pointing the `current` symbolic link at the latest release, and finally purging any old deployments from your server.

Of course, any deployment hooks you have configured will also be run during the deployment.

### Variables

Within your deployment hook script, you may use the `release` Envoyer variable to access the most current release directory. For example:

```bash
cd {{ release }}

php artisan command
```

The available variables are:

| Name | Description |
| ---- | ----------- |
| `author` | Resolves to the author of the commit that is being deployed
| `branch` | Resolves to the branch that Envoyer is configured to deploy
| `project` | Resolves to the project's root directory (the directory which contains `current`, `releases` and `storage`)
| `release` | Resolves to the current release path, within `releases`
| `sha` | Resolves to the commit hash that is being deployed
| `time` | Resolves to the current deployment formatted as `YmdHis`

<div v-pre>

:::tip Variable Formatting
Note that variables can be written with or without a space inside of the braces, i.e. `{{ variable }}` is the same as `{{ variable }}`
:::

</div>
