import { Server } from "./app"
const run = async () => {
 const server = new Server();
 server.listen()
 console.log('api running')
 
}

run()