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

The `project` variable provides access to the project's root (the directory which contains current, releases, and storage):

```bash
cd {{ project }}

php artisan command
```

The `sha` variable provides access to the commit hash being deployed:

```bash
{{ sha }}
```

The `time` variable provides access to the timestamp of the current deployment formatted as `YmdHis`:

```bash
{{ time }}
```

<div v-pre>

:::tip Variable Formatting
Note that variables can be written with or without a space inside of the braces, i.e. `{{ variable }}` is the same as `{{ variable }}`
:::

</div>
