import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrmBase2';
public list:any;
public login:boolean=true;

  constructor(){
//getRole e richiamare getRoleList
this.list=this.getRoleList('admin');
  }

  private  getRoleList(role: string): any[] {
    switch (role) {
      case 'admin':
        return [{label:'Utenti',path:'1'}, {label:'Ticket',path:'2'},{label:'Richieste',path:'3'},{label:'Preventivi',path:'4'}];
      case 'officer':
        return [ {label:'Ticket',path:''}];
      case 'broker':
        return [ {label:'Accettazione',path:''},{label:'Richieste',path:''},{label:'Preventivi',path:''}];
      default:
        return [];
    }
  }
  
 
}
