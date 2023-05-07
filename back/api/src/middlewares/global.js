module.exports = (req,res,next) =>{
    console.log('meu midlware')
    next();
};