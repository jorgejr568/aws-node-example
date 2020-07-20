const {Router} = require('express')

const setupRoutes = (app) => {
  const router = Router()
  app.use(router)

  router.get(/.*/, function(req, res){
    return res.json({
      sup: 'doe',
      server: process.env.SERVER_NAME || 'NodeServer-00',
      date: new Date(),
    })
  })
}

module.exports = setupRoutes
