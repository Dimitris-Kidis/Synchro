import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { PageSpinnerModule } from '../../common/components/page-spinner/page-spinner.module';
import { SharedModule } from '../../shared/shared.module';
// import { StoreModule } from '../store/store.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { StoreModule as StoreModule2 } from '@ngrx/store';
import { IconsModule } from '../../icons/icons.module';
import { StoreModule } from '../../store/store.module';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    SharedModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    OverlayModule,
    FontAwesomeModule,
    IconsModule,
    LayoutHeaderComponent,
    PageSpinnerModule,
    StoreModule,
    MenuItemComponent,
    MenuComponent,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
