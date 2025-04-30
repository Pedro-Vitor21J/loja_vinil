import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { DetailComponent } from './components/pages/detail/detail.component';

export const routes: Routes = [
    /*{path: "" , component: CatalogComponent}*/
    {path: "home", component: DetailComponent}
];