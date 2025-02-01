import redis from "redis";

const redisClient = redis.createClient({
    host: "127.0.0.1",
    port: 6379
});

redisClient.on("error", (error)=>{
    console.error("Redis error:", error);
});

(async () => {
    await redisClient.connect(); // Ensure Redis connects before using it
    console.log("Connected to Redis");
})();

export { redisClient };