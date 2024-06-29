import {io} from 'socket.io-client'

export const initSocket = async () => {
    const options = {
        'force new connection' : true,
        reconnectionAttempt : Infinity,
        timeout : 10000,
        transports : ['websocket']
    }
    return  io("https://backend-8bqw.vercel.app", options)
}