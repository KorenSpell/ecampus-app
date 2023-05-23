import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { ExpectationsComponent } from './Components/expectations/expectations.component';
import { ImportantComponent } from './Components/important/important.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ExpectationsComponent,
    ImportantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
