import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    isVisible = false
    name



    handleClick(){
        this.isVisible = true  //button click handle panum
    }
    
    changeHandler(event){  //lightning input it captures the input value
        this.name = event.target.value
    }

    get helloMethod(){   //getter method gives the value to template directive
         return this.name==='hello' //equality operator dont use assignement operator
    }
}