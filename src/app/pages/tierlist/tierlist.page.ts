import { CommonModule } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerComponent } from '@app/components/spinner/spinner.component';
import { TileComponent } from '@app/components/tile/tile.component';
import { TierlistItemModel, TierlistItemVariation } from '@app/models/tierlist-item.model';
import { TierlistModel } from '@app/models/tierlist.model';
import { AlertService } from '@app/services/alert.service';
import { StorageService } from '@app/services/storage.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
	selector: 'page-tierlist',
	imports: [
		CommonModule, FormsModule, CdkDrag, CdkDropList, CdkDropListGroup,
		TileComponent, SpinnerComponent,
		ButtonModule, DialogModule, GalleriaModule,
	],
	templateUrl: './tierlist.page.html',
	styleUrl: './tierlist.page.scss',
})
export class TierlistPage {
	public isLoading: boolean = false;
	public isLoadingSave: boolean = false;
	public isLoadingDelete: boolean = false;

	public tierlist?: TierlistModel;
	public selectedItem?: TierlistItemModel;
	public selectedItemVariations = model<TierlistItemVariation[]>([]);

	public showDeleteDialog: boolean = false;
	public showVariations: boolean = false;

	public canReset: boolean = false;

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

	public drop(event: CdkDragDrop<TierlistItemModel[]>): void {
		console.log('Drop event:', event);

		// Moving an item around within the tier
		if (event.previousContainer == event.container) {
			moveItemInArray(
				event.container.data,
				event.previousIndex,
				event.currentIndex,
			);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex,
			);

			this._checkCanReset();
		}
	}

	public clickedTile(item: TierlistItemModel): void {
		this.selectedItem = item;
		this.selectedItemVariations.set(item.variations);
		// this.showVariations = true;
	}

	private _checkCanReset(): void {
		// Check if any of the tiers have items inside them
		this.canReset = this.tierlist?.tiers?.some(tier => tier.items && tier.items.length > 0) || false;
	}
}
