import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentCategoryComponent } from './components/content-category/content-category.component';
import { MainComponentComponent } from './components/main-component/main-component.component';

const routes: Routes = [
  {path:"",redirectTo:"career",pathMatch:"full"},
  {path:"career",component:MainComponentComponent},
  {path:"career/:id",component:ContentCategoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
