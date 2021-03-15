import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, ModalController, PopoverController } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { AuthGuard } from './authguard.service';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { PopoverComponent } from './popover/popover.component';
import { ResumeComponent } from './resume/resume.component';



@NgModule({
  declarations: [AppComponent,PopoverComponent,ResumeComponent],
  entryComponents: [],
  imports: [BrowserModule,IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot(),FormsModule,HttpClientModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy , useClass: IonicRouteStrategy },{provide: HTTP_INTERCEPTORS,useClass: TokenInterceptorService,multi: true},AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {}
