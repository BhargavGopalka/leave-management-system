import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {UserAuthModule} from './user-auth/user-auth.module';
import {UserAuthRoutingModule} from './user-auth/user-auth-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {MasterModule} from './master/master.module';
import {MasterRoutingModule} from './master/master-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    UserAuthRoutingModule,
    BrowserAnimationsModule,
    MasterModule,
    MasterRoutingModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
