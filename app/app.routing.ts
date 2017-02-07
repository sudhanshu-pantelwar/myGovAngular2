import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GovtComponent} from './components/govt.component';
import {AboutComponent} from './components/about.component';
import {GetDataComponent} from './components/getData.component';

const appRoutes: Routes = [
    {
        path: '',
        component: GovtComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'getData',
        component: GetDataComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);