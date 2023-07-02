import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth-service.service';
import { UtenteService } from 'src/app/service/utente.service';
import { AccountValidator } from 'src/app/validator/utente.validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
public formGroup:FormGroup;
public roles: any[];
  constructor(
    private utenteSrv:UtenteService,
    private authService:AuthService

  ) { 
this.formGroup=AccountValidator.formAccount();
 this.roles=["ADMIN","USER"];
  }

  ngOnInit(): void {
  }
  public register(){
    
    console.log(this.formGroup.value , this.ConfirmPassword())
    if(this.formGroup.valid && this.ConfirmPassword()){
      this.utenteSrv.Register(this.formGroup.value).subscribe(response=>{
        const token = response.token;
        // Salva il token nel local storage 
        localStorage.setItem('token', token);
        this.authService.emit.emit(response.utente);
      })

    }
  }

  private ConfirmPassword(){
    if(this.formGroup.value.password==this.formGroup.value.passwordConfirm){
       return true;
    }
    
      return false;
    
  }

}
