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
import { TemplateService } from '@app/services/template.service';

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
	private _templates = inject(TemplateService);
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
					this._checkCanReset();
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

	public reset(): void {
		// Fetch the template the tierlist is based on and set its tiers back to the default
		this.isLoading = true;
		this._templates.get(this.tierlist!.templateId).subscribe({
			next: (template: TierlistModel) => {
				this.tierlist!.tiers = template.tiers;
				this.tierlist!.items = template.items;
				
				this.canReset = false;
			},
			error: () => {
				this._alerts.showError('Failed to reset tierlist.');
			}
		}).add(() => this.isLoading = false);
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

	public clickedTier(tier: TierlistTier): void {
		this.selectedTier = tier;
		this.showTierInfoDialog = true;
	}

	public deleteTier(tier: TierlistTier): void {
		const index = this.tierlist?.tiers?.indexOf(tier);
		if (index !== undefined && index >= 0) {
			// Add the tiers items into the main list
			const tierItems = this.tierlist!.tiers![index].items || [];
			this.tierlist!.items.push(...tierItems);

			// Delete the tier
			this.tierlist!.tiers!.splice(index, 1);
			this._checkCanReset();
		}
	}

	private _checkCanReset(): void {
		// Check if any of the tiers have items inside them
		this.canReset = this.tierlist?.tiers?.some(tier => tier.items && tier.items.length > 0) || false;
	}
}
