import { NgModule } from '@angular/core';

// Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent
  ]
})

export class SharedModule { }
