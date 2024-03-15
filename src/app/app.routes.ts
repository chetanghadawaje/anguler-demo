import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { UserComponent } from './pages/user/user.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { UpdateProductComponent } from './components/admin/update-product/update-product.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { CartComponent } from './pages/user/cart/cart.component';

export const routes: Routes = [
    {
        path: "",
        component: ProductsComponent
    },
    {
        path: "products",
        component:ProductsComponent
    },
    {
        path:"users",
        component: UserComponent,
        children:[
            {
                path: "profile",
                component: ProfileComponent
            },
            {
                path: "cart",
                component: CartComponent
            }
        ]
    },
    
    // Admin routes
    {
        path: "admin/addproduct",
        component: AddProductComponent
    },
    {
        path:"admin/products",
        component: AdminProductsComponent
    },
    {
        path:"admin/update/:id",
        component: UpdateProductComponent
    },
    {
        path:"**",
        component: NotfoundComponent
    }
];
