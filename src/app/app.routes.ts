import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { TierlistPage } from './pages/tierlist/tierlist.page';

export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomePage },
	{ path: 'tierlist/:id', component: TierlistPage },

	{ path: '**', redirectTo: '/home' }
];
