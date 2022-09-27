import { LightningElement,track} from 'lwc';

export default class FirstLwc extends LightningElement {

    name  // undefined ah irkum
    age = 20
    fullname = "harunalrashidh"
    occupation = "Engineer"
    isVerified = false
    ObjectVar = {
        name : "Haurn",
        age : 20,
        height :6
    }
    @track  address = {
        city : "Melbourne",
        postcode : 30000,
        country : "Australia"
    }
    Users = ["Harun","mema","Ifra"]
    num1 = 10;
    num2 = 22;
    

changeHandler(event){
    //logic
    this.occupation = event.target.value //this gets data from input html which is binded back to html
}

trackHandler(event){
    this.address.city = event.target.value // this does not update in HTML since @track is not added

    //another method available by copying using shallow method updating the address object
   // this.address = {...this.address,"city":event.target.value}
}

//for getter method
get User(){
    return this.Users[0]
}

get Number(){
    return this.num1*this.num2
}




}