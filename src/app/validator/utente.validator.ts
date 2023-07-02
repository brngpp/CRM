import { FormControl, FormGroup, Validators } from "@angular/forms";

export class AccountValidator {
    public static formAccount(dataParam?: any):FormGroup{
        let dataForm=dataParam || {};

        return new FormGroup({
            nome:new FormControl(dataForm && dataForm.nome || "",[Validators.required]),
            cognome:new FormControl(dataForm && dataForm.cognome || "",[Validators.required]),
            email:new FormControl(dataForm && dataForm.email || "",[Validators.required,Validators.email]),
            password:new FormControl(dataForm && dataForm.password || "",[Validators.required]),
            passwordConfirm:new FormControl(dataForm && dataForm.password || "",[Validators.required]),
            role:new FormControl(dataForm && dataForm.role || "",[Validators.required]),
        })
    }}
