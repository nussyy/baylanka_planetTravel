import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'add-passengers',
    loadChildren: () => import('./pages/add-passengers/add-passengers.module').then( m => m.AddPassengersPageModule)
  },
  {
    path: 'scan-medical',
    loadChildren: () => import('./pages/scan-medical/scan-medical.module').then( m => m.ScanMedicalPageModule)
  },
  {
    path: 'seat-booking',
    loadChildren: () => import('./pages/seat-booking/seat-booking.module').then( m => m.SeatBookingPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
