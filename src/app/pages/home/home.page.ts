import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TierlistIds } from '@app/models/enums/tierlist-ids.enum';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'page-home',
	imports: [
		CommonModule, RouterModule,
		ButtonModule,
	],
	templateUrl: './home.page.html',
	styleUrl: './home.page.scss'
})
export class HomePage {
	private _router = inject(Router);

	public tierlists = [
		{ id: TierlistIds.BlueArchive, name: "Blue Archive" },
	];

	public navigateToTierlist(tierlistId: TierlistIds) {
		this._router.navigate(['/tierlist', tierlistId]);
	}
}
