import { importProvidersFrom, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';



export const appProviders = [
  importProvidersFrom(
    BrowserModule,
  ),
  provideHttpClient(withInterceptorsFromDi()),
  provideHttpClient(),
];
