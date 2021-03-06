import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserPageComponent } from './pages/create-user.page';
import { CreateUserRoutingModule } from './create-user-routing.module';
import { MatSidenavModule,
        MatToolbarModule,
        MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatTabsModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { HeaderComponent } from '../shared/components/header/header';
import { SharedModule } from '../shared/shared.module';
import { CreateUserService } from './services/create-user.service';
import { CreateTeacherFormComponent } from './components/create-teacher-form-component/create-teacher-form.component';
import { jwtProvider } from '../shared/helpers/jwt.interceptor';

@NgModule({
    imports: [
        CommonModule,
        CreateUserRoutingModule,
        MatSidenavModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatTabsModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        CreateUserPageComponent,
        CreateUserFormComponent,
        CreateTeacherFormComponent
    ],
    providers: [
        CreateUserService,
        jwtProvider,
    ]
})
export class CreateUserModule {}
