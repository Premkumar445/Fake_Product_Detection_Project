import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { SearchComponent } from './app/search/search.component';
import { LoginComponent } from './app/login/login.component';
import { SignupComponent } from './app/signup/signup.component';
import { AboutComponent } from './app/about/about.component';
import { AppComponent } from './app/app.component';
import { ServicesComponent } from './app/services/services.component';
import { ContactComponent } from './app/contact/contact.component';
import { Component } from '@angular/core';



const routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
