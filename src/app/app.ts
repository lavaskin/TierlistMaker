import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TierlistService } from './services/tierlist.service';
import { Tierlist } from './models/tierlist.model';

@Component({
	selector: 'app-root',
	imports: [ButtonModule],
	templateUrl: './app.html',
	styleUrl: './app.scss'
})
export class App {
	public loadedTierlist?: Tierlist;

	private _tierlist = inject(TierlistService);

	ngOnInit() {
		this._tierlist.getTierlist().subscribe({
			next: (tierlist: Tierlist) => {
				this.loadedTierlist = tierlist;
			},
			error: (error) => {
				console.error('Error loading tierlist:', error);
			},
		})
	}
}
