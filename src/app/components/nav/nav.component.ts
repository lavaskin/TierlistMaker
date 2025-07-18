import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-nav',
	imports: [
		CommonModule, RouterModule,
		ButtonModule,
	],
	templateUrl: './nav.component.html',
	styleUrl: './nav.component.scss'
})
export class NavComponent {

}
