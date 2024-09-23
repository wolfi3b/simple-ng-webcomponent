import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideHttpClient } from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const mainConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule),
  ]
};
