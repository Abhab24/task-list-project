const asyncWrapper = (fn) => {
    return async(req,res,next)=>{
       try {
        await fn(req,res,next)
       } catch (error) {
        next(error)//passing to next middleware fn
       }
    }
};

module.exports = asyncWrapper;
