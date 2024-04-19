class ApiError extends Error{
    constructor(statusCode, message= "Something Went Wrong"){
        super(message);
        this.message = message;
        this.success = false,
        this.statusCode = statusCode
    }
}

export {ApiError}