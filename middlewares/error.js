class ErrorHandler extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode=statuscode;
    }
}

export const errorMiddlewares = (err,req,res,next)=>{
    err.message = err.message || "internal server error"
    err.statuscode = err.statuscode || 500;
    // console.log(err)
    // console.log(err.message)
    return res.status(err.statuscode).json({
        success:false,
        message: err.message,
        // "Invalid Id | Task not found"
    });
}

export default ErrorHandler;