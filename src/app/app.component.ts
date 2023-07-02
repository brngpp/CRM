import { Component } from '@angular/core';
import { AuthService } from './service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrmBase2';
public list:any;
public login:boolean=true;
public utente:any;

  constructor(private authSrv:AuthService , private router:Router){
     this.authSrv.emit.subscribe(res=>{
      this.utente=res;
      this.list=this.getRoleList(this.utente.ruolo);
      this.navigateToPage();
    })

}

  private  getRoleList(role: string): any[] {
    switch (role) {
      case 'ADMIN':
        return [{label:'Utenti',path:'1'}, {label:'Ticket',path:'2'},{label:'Richieste',path:'3'},{label:'Preventivi',path:'4'}];
      
      case 'USER':
        return [ {label:'Accettazione',path:''},{label:'Richieste',path:''},{label:'Preventivi',path:''}];
      default:
        return [];
    }
  }

  
  private navigateToPage() {
  
    this.router.navigateByUrl('1');
  }
  
 
}
