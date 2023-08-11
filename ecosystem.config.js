module.exports = {
    apps: [
      {
        name: "project-collab",
        script: "project-collab/server.js",
        watch: false,
        env: {
          APP_ENV: "production",
          PORT: 4200,
        },
      },
    ],
  };
  