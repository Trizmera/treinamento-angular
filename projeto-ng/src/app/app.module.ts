import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";

const routes: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'task', loadChildren: () => import('./task/task.module').then(m => m.TaskModule) },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }