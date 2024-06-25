

class CustomAPIError extends Error{
    constructor(message,statusCode){//inviked when we create a new instance of the class
        super(message)//this will invoke contrutor of parent class
        this.statusCode=statusCode
    }
}

const createCustomError=(msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode);
}

module.exports=(createCustomError, CustomAPIError);