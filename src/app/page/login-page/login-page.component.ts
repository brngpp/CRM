import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public showReg:boolean;


  constructor(private authService: AuthService) { 
    this.showReg=false;

  }

  ngOnInit(): void {
  }

  public onLogin(email: any,password: any) {
    
    let param={
      email:email,
      password:password,
    }
    this.authService.login(param).subscribe(response => {
      const token = response.token;
      // Salva il token nel local storage 
      localStorage.setItem('token', token);
      this.authService.emit.emit(response.utente);

      
  })

}

public showRegister(){
  this.showReg=true;
}

}
