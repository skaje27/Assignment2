//Implement application-level middleware for handling common functionalities across routes.

const applicationMiddleware=(req, res, next) =>{
    console.log('Application level middleware executed...');
    next();
  };
  
  module.exports=applicationMiddleware;