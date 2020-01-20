import { IframeMessageProxy } from 'iframe-message-proxy'

export const getApplication = async () => {
    const { response: application } = await IframeMessageProxy.sendMessage({
        action: 'getApplication',
    })

    return application
}

export const getContacts = async () => {
    const { response: { items } } = await IframeMessageProxy.sendMessage({
        action: 'sendCommand',
        content: {
            destination: 'MessagingHubService',
            command: {
                method: 'get',
                uri: '/contacts'
            }
        }
    })
    
    return items
}

export const getThreads = async () => {
    const { response: { items } } = await IframeMessageProxy.sendMessage({
        action: 'sendCommand',
        content: {
            destination: 'MessagingHubService',
            command: {
                method: 'get',
                uri: '/threads'
            }
        }
    })

    return items
}