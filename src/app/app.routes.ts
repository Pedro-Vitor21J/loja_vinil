import { Routes } from '@angular/router';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DetailComponent } from './components/pages/detail/detail.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "catalog", component: CatalogComponent},
    {path: "catalog/:id", component: DetailComponent},
];