import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageCategoriesComponent} from "./components/manage-categories/manage-categories.component";
import {ManageOrdersComponent} from "./components/manage-orders/manage-orders.component";
import {ManageUsersComponent} from './components/manage-users/manage-users.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {MaterialModule} from "../shared/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilesModule} from "../shared/files/files.module";
import {AccordionModule} from "ngx-bootstrap/accordion";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {ModalModule} from "ngx-bootstrap/modal";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {PopoverModule} from "ngx-bootstrap/popover";
import {TooltipModule} from "ngx-bootstrap/tooltip";


@NgModule({
  declarations: [DashboardComponent, ManageCategoriesComponent, ManageOrdersComponent, ManageUsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FilesModule,
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
  ]
})
export class AdminModule {
}
