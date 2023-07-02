import { FormControl, FormGroup, Validators } from "@angular/forms";

export class TicketValidator {
    public static formTicket(dataParam?: any):FormGroup{
        let dataForm=dataParam || {};

        return new FormGroup({
            description:new FormControl(dataForm && dataForm.descrizione || "",[Validators.required]),
            budget:new FormControl(dataForm && dataForm.budget || 0,[Validators.required]),
            quantity:new FormControl(dataForm && dataForm.qty || 0,[Validators.required,Validators.required]),
           
        })
    }}
