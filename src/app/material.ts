import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list'; 

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatAutocompleteModule,
    MatInputModule, MatDialogModule, MatCardModule, MatButtonToggleModule, MatListModule],
    exports: [MatButtonModule, MatCheckboxModule, MatAutocompleteModule,
        MatInputModule, MatDialogModule, MatCardModule, MatButtonToggleModule, MatListModule],
    })

export class MaterialModule { }