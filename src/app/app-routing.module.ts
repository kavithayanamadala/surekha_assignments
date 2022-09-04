import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DirectivePipeComponent } from './directive-pipe/directive-pipe.component';
import { EmpEditUpdateComponent } from './emp-edit-update/emp-edit-update.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveValidationsComponent } from './reactive-validations/reactive-validations.component';
import { RoutesComponent } from './routes/routes.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { TemplateValidationsComponent } from './template-validations/template-validations.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  {
    path:"emplist",
    component:EmpListComponent
  },
  {
    path:"template",
    component:TemplateDrivenComponent
  },
  {
    path:"template-validations",
    component:TemplateValidationsComponent
  },
  {
    path:"reactive-form",
    component:ReactiveFormComponent
  },
  {
    path:"reactive-validations",
    component:ReactiveValidationsComponent
  },
  
  {
    path:"empupdate",
    component:EmpEditUpdateComponent
  },

  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"product",
    component:ProductComponent 
  },
  {
    path:"contact",
    component:ContactComponent
    },
    {
      path:"routes",
      component:RoutesComponent
      },
      {
        path:"directive-pipe",
        component:DirectivePipeComponent
        },
      {
        path:"**",
        component:WildcardComponent
        },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
