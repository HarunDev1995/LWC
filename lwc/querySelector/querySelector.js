import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {

    userNames = ["arun","Kumar","Vijay","Alex"]

     fetchDetails(){
        //h1 tag controlled using js
        const elem = this.template.querySelector('h1')
        elem.style.border="1px red solid"
        console.log(elem.innerText)

        //div tag controlled using js
        const userElements = this.template.querySelectorAll(".names")
        console.log(userElements.innerText)
        Array.from(userElements).forEach(item =>{
            console.log(item.innerText)
            item.setAttribute("title",item.innerText)
        })

        //lwc:dom="manual"
        const childElem =this.template.querySelector(".child")
        childElem.innerHTML='<p> i am child div </p>'
    }
}