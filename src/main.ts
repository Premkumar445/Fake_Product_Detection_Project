import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { SearchComponent } from './app/search/search.component';
import { LoginComponent } from './app/login/login.component';
import { SignupComponent } from './app/signup/signup.component';
import { AppComponent } from './app/app.component';
import { Component } from '@angular/core';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});