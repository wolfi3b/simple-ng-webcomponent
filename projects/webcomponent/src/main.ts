import {createApplication} from '@angular/platform-browser';
import {mainConfig} from './main.config';
import {createCustomElement} from '@angular/elements';
import {ApplicationRef} from '@angular/core';
import {ComponentLibComponent} from 'component-lib';


export async function registerComponent () {
  const app: ApplicationRef = await createApplication(mainConfig);

  // Define Web Components
  const myLibraryComponent = createCustomElement<ComponentLibComponent>(ComponentLibComponent, {injector: app.injector});
  customElements.define('wc-1', myLibraryComponent);
};

export function testFunction() {
  console.log('test');
}
