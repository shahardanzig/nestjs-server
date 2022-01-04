import { registerAs } from "@nestjs/config";

export const serverConfig = registerAs('server', () => ({
    port: parseInt(process.env.SERVER_PORT) || 2000,
    mongodb:{
        hostname: process.env.MONGO_HOSTNAME || 'localhost:27017',
        database: process.env.MONGO_DATABASE || 'example'
    }
}));