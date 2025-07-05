import {  Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OrderComponent } from "./order/order.component";
import { PaymentComponent } from "./payment/payment.component";

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    {path:'order',component:OrderComponent},
    {path:'payment',component:PaymentComponent}
  ];