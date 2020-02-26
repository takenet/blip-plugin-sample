[![Blip-plugin](https://i.imgur.com/6zaam3J.png "Blip-plugin")][blip]

# Blip plugin

Blip plugin is a technology agnostic way to plug unofficial features to enhance the portal capabilities.

This project aims to give the fundamental skills needed to develop and build your plugins.

## Getting started from sample

This sample was created using the React framework.

1. Download or clone the project from `git`(the recommended way):

`git clone https://github.com/takenet/blip-plugin-sample.git`

2. Install all packages from npm:

`cd sample && npm install`

3. Run the project:

`npm start`

4. Now, add the plugin to your chatbot and enjoy it!

## Good to know

* All the communication between your plugin and portal should be made using the browser message API. We highly recommend you to use our official [package][iframe-message] which has been designed to that communication.
* We recommend you to create plugins with components and colors similar to our design system. We have an official [package][blip-toolkit] to help you with that.
* After the first render of plugin, if the window size is too small, you will have to change it through the `HeightChange` message.
* We have some guidelines to create new pages. We recommend you to follow them (it's in Portuguese):

![Page guidelines 1](https://i.imgur.com/0gEvaxT.png "Page guidelines 1")

![Page guidelines 2](https://i.imgur.com/gMfUMjG.png "Page guidelines 2")

![Page guidelines 3](https://i.imgur.com/QPil55Q.png "Page guidelines 3")

## Possible message types

**`SendCommand`**

Send a blip command. Destination defines the domain which you will send(`msging.net` or `blip.ai`) your message. If you don't know which one to choose, leave it at default.
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

Show a modal to the user.

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

Get the current user language.

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

Check if the user has any permissions.

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
