import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ProfileInfoComponent } from "./profile-info/profile-info.component";
import { ProfileComponent } from "./profile.component";

const routes: Routes = [
	{ path: '', component: ProfileComponent, children: [
		{ path: '', component: ProfileInfoComponent },
		{ path: 'changepassword', component: ChangePasswordComponent, data: {breadcrumb: {alias: 'ChangePassword'}} },
	] }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProfileRoutingModule{}