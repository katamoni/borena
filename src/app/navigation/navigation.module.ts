import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { Navigation1Component } from './navigation1/navigation1.component';
import { Navigation2Component } from './navigation2/navigation2.component';

const routes:Routes=[
     {path:"navigation1",component:Navigation1Component},
     {path:"navigation2",component:Navigation2Component},
     
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class NavigationModule { }
