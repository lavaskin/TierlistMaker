import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerComponent } from '@app/components/spinner/spinner.component';
import { TileComponent } from '@app/components/tile/tile.component';
import { TierlistItemModel } from '@app/models/tierlist-item.model';
import { TierlistModel } from '@app/models/tierlist.model';
import { AlertService } from '@app/services/alert.service';
import { StorageService } from '@app/services/storage.service';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'page-tierlist',
	imports: [
		CommonModule,
		TileComponent, SpinnerComponent,
		ButtonModule,
	],
	templateUrl: './tierlist.page.html',
	styleUrl: './tierlist.page.scss',
})
export class TierlistPage {
	public isLoading: boolean = false;
	public isLoadingSave: boolean = false;
	public isLoadingDelete: boolean = false;

	public tierlist?: TierlistModel;

	private _route = inject(ActivatedRoute);
	private _router = inject(Router);
	private _storage = inject(StorageService);
	private _alerts = inject(AlertService);

	ngOnInit() {
		this._route.params.subscribe(params => {
			const tierlistUserId = params['id'];

			this.isLoading = true;
			this._storage.get(tierlistUserId).subscribe({
				next: (tierlist: TierlistModel | null) => {
					if (!tierlist) {
						this._alerts.showError('Tierlist not found.', 'Not Found');
						return;
					}
					
					this.tierlist = tierlist as TierlistModel;
				},
				error: () => {
					this._alerts.showError('Failed to load tierlist.');
				}
			}).add(() => this.isLoading = false);
		});
	}

	public save(): void {
		if (!this.tierlist) return;

		this.isLoadingSave = true;
		this._storage.save(this.tierlist).subscribe({
			next: () => {
				this._alerts.showSuccess('Tierlist saved successfully.', 'Saved');
			},
			error: () => {
				this._alerts.showError('Failed to save tierlist.');
			}
		}).add(() => this.isLoadingSave = false);
	}

	public delete(): void {
		if (!this.tierlist) return;

		this.isLoadingDelete = true;
		this._storage.delete(this.tierlist.userId!).subscribe({
			next: () => {
				this._alerts.showSuccess('Tierlist deleted successfully.', 'Deleted');
				this._router.navigate(['/']);
			},
			error: () => {
				this._alerts.showError('Failed to delete tierlist.');
			}
		}).add(() => this.isLoadingDelete = false);
	}

	public showItemVariations(item: TierlistItemModel): void {
		console.log('Item Variations:', item);
	}
}
