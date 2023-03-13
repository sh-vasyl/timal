module.exports = {
    apps: [{
        name: "timal",
        watch: false,
        max_memory_restart: "1000M",
        interpreter: "node@16.19.0",
        cwd : "./",
        script : "./.output/server/index.mjs",
        args : "start",
        interpreter_args: "--harmony",
        error_file: "./pm2-error.log",
        env: {
            PORT: 3005,
            "NODE_ENV": "development"
        },
        env_production: {
            PORT: 3005,
            "NODE_ENV": "production"
        }
    }]
}
