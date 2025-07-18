import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TileComponent } from '@app/components/tile/tile.component';
import { TierlistModel } from '@app/models/tierlist.model';
import { StorageService } from '@app/services/storage.service';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'page-tierlist',
	imports: [
		CommonModule,
		TileComponent,
	],
	templateUrl: './tierlist.page.html',
	styleUrl: './tierlist.page.scss',
})
export class TierlistPage {
	public isLoading: boolean = false;
	public tierlist?: TierlistModel;

	private _route = inject(ActivatedRoute);
	private _storage = inject(StorageService);
	private _toasts = inject(MessageService);

	ngOnInit() {
		this._route.params.subscribe(params => {
			const tierlistUserId = params['id'];

			this.isLoading = true;
			this._storage.getTierlist(tierlistUserId).subscribe({
				next: (tierlist: TierlistModel | null) => {
					if (!tierlist) {
						console.error('Tierlist not found for user ID:', tierlistUserId);
						this._toasts.add({ severity: 'error', summary: 'Not Found', detail: 'Tierlist not found.' });
					} else {
						this.tierlist = tierlist as TierlistModel;
					}
				},
				error: () => {
					this._toasts.add({ severity: 'error', summary: 'Error', detail: 'Failed to load tierlist.' });
				}
			}).add(() => this.isLoading = false);
		});
	}
}
