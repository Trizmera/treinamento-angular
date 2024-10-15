import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule or any other Material modules you are using

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Import your components here
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatButtonModule, 
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
