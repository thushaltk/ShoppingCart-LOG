import axios from 'axios';

class SellerService {
    constructor(data){
        this.data = data;
    }

    getData(data){
        this.data = data;
        console.log(this.data);
    }

    

}


export default new SellerService();