import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoaderComponent } from './item/loader/loader.component';
import { ToolbarComponent } from './item/toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TabellaComponent } from './page/tabella/tabella.component';
import {MatTableModule} from '@angular/material/table';
import { LoginPageComponent } from './page/login-page/login-page.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterPageComponent } from './page/register-page/register-page.component';
import {MatMenuModule} from '@angular/material/menu';
import { AuthService } from './service/auth-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TicketModalComponent } from './modali/ticket-modal/ticket-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthInterceptor } from './service/auth-interceptor.service';







@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ToolbarComponent,
    TabellaComponent,
    LoginPageComponent,
    RegisterPageComponent,
    TicketModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
   

  

    
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
