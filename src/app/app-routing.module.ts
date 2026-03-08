import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from './pages/public/public.module';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'portal',
        loadChildren: () => import('./pages/portal/portal.module').then((m) => m.PortalModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/public/public.module').then((m) => m.PublicModule),
        pathMatch: 'full'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
