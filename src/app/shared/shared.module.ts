import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    MenuModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    ToolbarModule,
    AvatarModule,
    DividerModule,
    MenubarModule,
    ConfirmDialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    MenuModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    ToolbarModule,
    AvatarModule,
    DividerModule,
    MenubarModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService]
})
export class SharedModule {}
