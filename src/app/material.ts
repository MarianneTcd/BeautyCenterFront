import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatInputModule, MatDialogModule, MatCardModule],
    exports: [MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatInputModule, MatDialogModule, MatCardModule],
    })

export class MaterialModule { }