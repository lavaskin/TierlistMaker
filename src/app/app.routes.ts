import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { TierlistPage } from './pages/tierlist/tierlist.page';
import { ViewerPage } from './pages/viewer/viewer.page';
import { CreatePage } from './pages/create/create.page';

export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomePage },
	{ path: 'create/:id	', component: CreatePage },
	{ path: 'tierlist/:id', component: TierlistPage },
	{ path: 'viewer/:id', component: ViewerPage },

	{ path: '**', redirectTo: '/home' }
];
