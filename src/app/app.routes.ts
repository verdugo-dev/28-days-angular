import { Routes } from '@angular/router';
import { Products } from './features/products/products';
import { Cart } from './features/cart/cart';

export const routes: Routes = [
    { path: 'products', component: Products },
    { path: 'cart', component: Cart },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
];
