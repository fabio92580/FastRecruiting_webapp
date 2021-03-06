import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectedCandidatesComponent} from './selected-candidates.component';

const routes: Routes = [
    {
        path: '', component: SelectedCandidatesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SelectedCandidatesRoutingModule { }
