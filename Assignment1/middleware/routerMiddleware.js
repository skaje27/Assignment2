//Create router-level middleware to address specific concerns related to particular routes.

const routerMiddleware=(req, res, next)=>{
    console.log('Router level middleware executed...');
    next();
  };
  
  module.exports=routerMiddleware;