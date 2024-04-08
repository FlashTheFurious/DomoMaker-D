const controllers = require('./controllers');
const mid = require('./middleware');

// Debugging
// console.log('requiresSecure:', typeof mid.requiresSecure); 
// console.log('requiresLogout:', typeof mid.requiresLogout); 
// console.log('Account loginPage:', typeof controllers.Account.loginPage); 

const router = (app) => {
  app.get('/getDomos', mid.requiresLogin, controllers.Domo.getDomos);
  
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  app.get('/maker', mid.requiresLogin, controllers.Domo.makerPage);
  app.post('/maker', mid.requiresLogin, controllers.Domo.makeDomo);

  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
