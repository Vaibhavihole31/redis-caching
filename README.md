# Caching in Node.js using Redis

Caching is a technique used in computing to store frequently accessed data or resources in a temporary storage area called a cache. When an application needs to access the data or resource, it first checks the cache to see if a copy is available. If it is, the data is returned from the cache, which is faster than fetching the data from the original source. If the data is not in the cache, the application fetches it from the original source, stores a copy of it in the cache, and returns the data to the application.

Caching is used to speed up access to frequently accessed data, which improves application performance. By storing data in a cache, the application can reduce the amount of time it takes to access the data, which can help to reduce latency and improve user experience. Caching can be used in a variety of applications and systems, including web applications, databases, file systems, and more.

## Installation

To install node-redis, simply:

```js
npm install redis
```

## Documentaion

[Node-Redis](https://www.npmjs.com/package/redis)

[Redis](https://medium.com/@juwelariful1/what-is-redis-and-why-with-use-case-1b294b91e373)

## Caching vs. Non-Caching: API Response Time Comparison

In this section, we'll compare the API response times with and without caching implemented using Redis. The screenshots below demonstrate the significant performance improvements achieved through caching.

### Without Caching:

<img src="./images/screenshot-1.png" alt="without-caching" width="800px"/>

In the above screenshot, we can see the API response time without caching enabled. The response time is relatively higher as the application fetches the data from the original source every time a request is made. This can result in increased latency and slower user experience, especially when dealing with frequently accessed data.

### With Caching:

<img src="./images/screenshot-2.png" alt="with-caching" width="800px"/>

In contrast, the above screenshot showcases the API response time with caching enabled using Redis. As the data is stored in the cache, subsequent requests for the same data can be served directly from the cache, bypassing the need to fetch it from the original source. This significantly reduces the response time, resulting in improved performance and a faster user experience.

By implementing caching with Redis in your Node.js application, you can optimize the retrieval of frequently accessed data, minimize latency, and enhance overall application performance.

## Conclusion 

Caching can significantly improve the performance of web applications by reducing the time required to fetch data from external sources. Redis is a fast and reliable in-memory cache that can be easily integrated into Node.js applications.
