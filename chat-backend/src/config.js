export default {
    db: {
        host: "localhost",
        dialect: "sqlite",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        storage: "chat.sqlite",
        logging: false
    },
    port: 3001
}
