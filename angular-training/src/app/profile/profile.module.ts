import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ProfileInfoComponent } from "./profile-info/profile-info.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";

@NgModule({
	declarations: [
		ProfileComponent,
		ChangePasswordComponent,
		ProfileInfoComponent
	],
	imports: [
		FormsModule,
		ProfileRoutingModule,
		SharedModule
	]
})
export class ProfileModule{}