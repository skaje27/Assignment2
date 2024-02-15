// Implement configurable middleware to allow dynamic customization of certain aspects of the API.

const configurableMiddleware=(config)=>{
    return (req, res, next)=>{
      console.log(`Configurable middleware executed with config: ${config}`);
      next();
    };
  };
  
  module.exports = configurableMiddleware;
  