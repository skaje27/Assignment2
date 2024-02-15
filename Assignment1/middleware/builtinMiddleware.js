//Utilize built-in middleware like express.json() for parsing JSON requests
const express=require('express');
const builtinMiddleware=express.json();
module.exports=builtinMiddleware;