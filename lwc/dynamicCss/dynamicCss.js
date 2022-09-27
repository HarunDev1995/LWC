import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    percent = 10

   //for lightning input
   changeHandler(event){
    this.percent = event.target.value

   }


    get percentage(){
        return  `width:${this.percent}%`
    }
}