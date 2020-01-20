[![Blip-plugin](https://i.imgur.com/bRMW7uO.png "Blip-plugin")][blip]

# Blip plugin

Blip plugin it's an technology agnostic way to plug unnoficial features to enhance the portal capabilities.

This project aims to give the initial skill needed to develop and build your own plugins.

## Getting started from sample

This sample was made using the React framework.

1. Download or clone the project from `git`(the recommended way):

`git clone https://github.com/takenet/blip-plugin-sample.git`

2. Install all packages from npm:

`cd sample && npm install`

3. Run the project:

`npm start`

4. Now just add the plugin to your chatbot and enjoy!

## Good to know

* All the communication between your plugin and portal should be made using the browser message API. We highly recommend you to use our official [package][iframe-message] which was been designed to that communication.
* We recomend you to create plugins with components and colors similar to our design system, we have a official [package][blip-toolkit] to help with that.
* We have some guidelines to create new pages, we recommend you follow their(it's in portuguese):

![Page guidelines 1](https://i.imgur.com/0gEvaxT.png "Page guidelines 1")

![Page guidelines 2](https://i.imgur.com/gMfUMjG.png "Page guidelines 2")

![Page guidelines 3](https://i.imgur.com/QPil55Q.png "Page guidelines 3")

## Possible message types

**`SendCommand`**

Send a blip command.
```
{
    command: Lime.Command,
    destination?: 'BlipService' | 'MessagingHubService',
    timeout?: number
}
```

**`StartLoading`**

Start a loading screen on portal.

**`StopLoading`**

Stop the loading screen.

**`HeightChange`**

Change the iframe height.

```
height: number
```

**`ShowModal`**

Show a modal to user.

```
{
    title: string,
    body: HTMLString,
    confirm: string,
    cancel: string
}
```

**`HideNavbar`**

Hide the navbar.

**`ShowNavbar`**

Shows the navbar.

**`GetCurrentLanguage`**

Get the user current language.

**`Toast`**

Create a toast.

```
{
    type: 'info' | 'success' | 'warning' | 'danger' | 'refresh',
    message: string
}
```

**`GetApplication`**

Get a application or the current application.

```
applicationId?: string
```

**`HasPermissions`**

Check if user has some permission.

```
{
    permissionType: string,
    customArea?: string,
    customShortName?: string
}
```

**`GetPermissionsObject`**

Get the entire permission object.

[blip]: https://blip.ai
[iframe-message]: https://github.com/takenet/iframe-message-proxy
[blip-toolkit]: https://www.npmjs.com/package/blip-toolkit