import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TicketService } from 'src/app/service/ticket.service';
import { TicketValidator } from 'src/app/validator/ticket.validator';

@Component({
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.css']
})
export class TicketModalComponent implements OnInit {
public formGroup:FormGroup;
  constructor(
    private ticketSrv:TicketService,
    private dialogRef: MatDialogRef<TicketModalComponent>,
   
  ) { 
    this.formGroup=TicketValidator.formTicket();
  }

  ngOnInit(): void {
  }
  public save()  {
    if(this.formGroup.valid){
      this.ticketSrv.Create(this.formGroup.value).subscribe(response=>{
        if(response.id){
          this.dialogRef.close();

        }
      })

    }
  }

}
