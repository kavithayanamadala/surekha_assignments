import {Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"decorate"
})
export class Decorate implements PipeTransform{
    transform(value: any, args: any) {
        console.log(value,args)
        if (value=="bobba"){
            return args+value+args  
             }
             return value
        
    }

}