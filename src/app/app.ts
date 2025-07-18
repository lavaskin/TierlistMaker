import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ToastModule } from 'primeng/toast';

@Component({
	selector: 'app-root',
	imports: [
		RouterModule,
		NavComponent, ToastModule,
	],
	templateUrl: './app.html',
	styleUrl: './app.scss'
})
export class App { }
