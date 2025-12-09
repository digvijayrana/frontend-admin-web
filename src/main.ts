import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { App } from './app/app';
import { AppRoutingModule } from './app/app-routing-module';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(AppRoutingModule, HttpClientModule)
  ]
}).catch(err => console.error(err));
