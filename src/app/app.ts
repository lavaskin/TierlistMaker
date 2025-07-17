import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

@Component({
	selector: 'app-root',
	imports: [
		RouterModule,
		NavComponent,
	],
	templateUrl: './app.html',
	styleUrl: './app.scss'
})
export class App { }
