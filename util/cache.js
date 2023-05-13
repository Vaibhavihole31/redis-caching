import { createClient } from 'redis';

const client = createClient({
    password: process.env.CACHE_PASSWORD,
    socket: {
        host: process.env.HOST,
        port: 17492
    }
});

client.on('error', err => console.log('Redis Client Error', err));
await client.connect();

export const createCache = async(key, value)=>{
    await client.set(key, JSON.stringify(value));
    return true
}

export const getCache = async(key)=>{
    const value = await client.get(key);
    return JSON.parse(value)
}

export const flushCache = async()=>{
    await client.sendCommand(['FLUSHALL']);
}
