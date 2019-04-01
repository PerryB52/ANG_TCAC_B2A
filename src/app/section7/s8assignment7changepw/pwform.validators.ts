import { ValidationErrors, AbstractControl } from "../../../../node_modules/@angular/forms";
import { resolve } from "url";

export class PWFormValidators{
    //simulating a server call to check if user is unique or not

    static checkPassword(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== '1234')
                    resolve({ checkPassword: true })
                
                else resolve(null);
            }, 2000);
        })
    }


    static passwordMismatch(control:AbstractControl):ValidationErrors | null { 

    let newpassword: AbstractControl;

    return   (( newpassword = control.root.get("newpassword")) && (control)) ? (control.value!==newpassword.value ? {passwordMismatch:true} :null) : null;
   }
}