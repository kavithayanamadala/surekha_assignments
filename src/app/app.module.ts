import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateValidationsComponent } from './template-validations/template-validations.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveValidationsComponent } from './reactive-validations/reactive-validations.component';
import { EmpEditUpdateComponent } from './emp-edit-update/emp-edit-update.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RoutesComponent } from './routes/routes.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { DirectivePipeComponent } from './directive-pipe/directive-pipe.component';
import { ColorDirective } from './Directives/color-directive';
import { PasswordValidationsComponent } from './password-validations/password-validations.component';
import { Decorate } from './Directives/decorate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpListComponent,
    TemplateDrivenComponent,
    TemplateValidationsComponent,
    ReactiveFormComponent,
    ReactiveValidationsComponent,
    EmpEditUpdateComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    ProductDetailsComponent,
    RoutesComponent,
    WildcardComponent,
    DirectivePipeComponent,
    ColorDirective,
    PasswordValidationsComponent,
    Decorate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
