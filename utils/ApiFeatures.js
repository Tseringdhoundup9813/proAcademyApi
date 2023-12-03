class ApiFeatures{
    constructor(query,queryString){
        this.query = query;
        this.queryString = queryString;

    }
    filter(){

        const exludeFields = ['sort','page','limit','fields'];
        
        let queryObj = {...this.queryString};

        exludeFields.forEach((exlude) =>{
            delete queryObj[exlude]
        })

        let queryString = JSON.stringify(queryObj);
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g,(match)=> `$${match}`);
        queryObj = JSON.parse(queryString);

        console.log(queryObj);

        this.query =this.query.find(queryObj)
        return this;
    }


    sort(){

        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        }else{
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }


    limitFields(){
        if(this.queryString.fields){
            const fields =this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        }else{
            this.query = this.query.select('- __v');
        }
        return this;
    }


    paginate(){
        const limit = this.queryString.limit * 1 ||10;
        const page = this.queryString.page * 1 ||1

        const skip = (page -1) * limit;
        console.log(skip);
        
        this.query = this.query.skip(skip).limit(limit);

    //     if(req.this.query.page){
    //         const moveCount = this.query.countDocuments();
    //         console.log(moveCount);
    //         if(skip >=moveCount){
    //             throw new Error('this page is not found');
            
    //         }

    //  }
     return this;
    }



}
module.exports = ApiFeatures