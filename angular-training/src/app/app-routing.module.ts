import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'signin', data: {breadcrumb: {alias: 'SignIn'}}, component: LoginComponent },
  { path: 'forgotpassword', data: {breadcrumb: {alias: 'ForgetPassword'}}, component: ForgetPasswordComponent },
  { path: 'register', data: {breadcrumb: {alias: 'Register'}}, component: RegisterComponent },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), data: {breadcrumb: {alias: 'Profile'}}},
  { path: 'products', loadChildren: () => import('./products/product.module').then(m => m.ProductModule), data: {breadcrumb: {alias: 'Products'}}},
  { path: 'unauthorized', component: UnauthorizedComponent, data: {breadcrumb: {alias: 'Unathorized'}}},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
		preloadingStrategy: PreloadAllModules
	})],
  exports: [RouterModule]
})
export class AppRoutingModule { }