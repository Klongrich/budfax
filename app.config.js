module.exports = {
    apps : [{
      name        : "Server-API",
      script      : "./server/index.js",
      watch       : true,
      env: {
        "NODE_ENV": "development",
      },
      env_production : {
       "NODE_ENV": "production"
      }
    },
    {
      name       : "Server-Client",
      script     : "./serveStaticFiles.js",
      watch       : true,
      env: {
        "NODE_ENV": "development",
      },
      env_production : {
        "NODE_ENV": "production"
      }
    }]
  }