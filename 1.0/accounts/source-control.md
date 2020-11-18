# Source Control

[[toc]]

## Overview

Project owners must connect their source control providers before they can deploy projects. You can manage source control providers from the [Integrations tab](https://envoyer.io/user/profile#/integrations) within your account dashboard.

## Supported Providers

Envoyer supports four source control providers:

- GitHub
- GitLab
- Self-Hosted GitLab
- Bitbucket

Below we've covered some of the common questions for each provider.

### GitHub

If your organization has third-party restrictions enabled, the organization's owner will need to approve the integration. This can be done [here](https://github.com/settings/connections/applications/94f9ec2a8d84cbc725e2).

### GitLab

GitLab has [strict rate limits](https://docs.gitlab.com/ee/security/rate_limits.html) that can prevent a project from deploying to multiple servers at one time. If you need to deploy to more than one server at a time, you should consider switching to another provider.

### Self-Hosted GitLab

If you receive the "Invalid repository. Are you sure you have access to it?" error message, you should try using the Repository ID instead of the name.

## Provider Management

### Connecting Providers

You can connect to any of the support source control providers at any time through the [Integrations page](https://envoyer.io/user/profile#/integrations) in the account dashboard.

### Unlinking Providers

You may unlink providers at any time by clicking the **Unlink** button next to the **Refresh Token** button. 

:::tip Deployments
If you unlink a source control provider, you will be unable to make new deployments for projects that are connected to it.

Existing deployments will be unaffected.
:::
