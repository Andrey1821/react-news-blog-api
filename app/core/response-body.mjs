class ResponseBody {
    constructor(data, pagination) {
        this.error = { message: data };
        this.data = { data };
        if(pagination) {
            this.data = {
                data,
                pagination
            }
        }
    }
}

export default ResponseBody;