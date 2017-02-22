import { BootstrapTabNavComponent } from './bootstrap-tab-nav/bootstrap-tab-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [BrowserModule, RouterModule],
  declarations: [TopbarComponent, SidebarComponent,
      FooterComponent, BootstrapTabNavComponent],
  exports:    [TopbarComponent, SidebarComponent,
      FooterComponent, BootstrapTabNavComponent]
})
export class NavigationModule {}
