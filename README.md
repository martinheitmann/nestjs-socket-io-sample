# NestJS with SocketIO and Vue Example

A sample application for demonstrating SocketIO with NestJS gateways. Uses Vue as the front-end client.

## Installation and start

### Server

Generate the server-side certificates using the included script `sh makecert.sh` and move the generated certificates to a folder named `certs`. Remember to include your domains in your system's hostfile. 

Run `npm install` followed by `npm run start:dev` in the root directory to start the NestJS server in development mode.

### Client

Run `npm install` followed by `npm run serve` in the `client` directory to start the Vue client application in development mode.
