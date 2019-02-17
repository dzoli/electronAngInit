
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatRadioModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatCardModule,
    Material.MatDialogModule,
    Material.MatChipsModule,
    Material.MatBadgeModule,
    Material.MatSidenavModule,
  ],
  exports: [
    Material.MatSidenavModule,
    Material.MatBadgeModule,
    Material.MatChipsModule,
    Material.MatDialogModule,
    Material.MatCardModule,
    Material.MatIconModule,
    Material.MatTableModule,
    Material.MatSnackBarModule,
    Material.MatButtonModule,
    Material.MatRadioModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
  ],
  providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 400 } }]
})
export class MaterialModule { }
