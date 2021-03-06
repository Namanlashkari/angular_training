import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
