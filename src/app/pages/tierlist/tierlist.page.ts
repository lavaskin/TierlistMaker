import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerComponent } from '@app/components/spinner/spinner.component';
import { TileComponent } from '@app/components/tile/tile.component';
import { TierlistItemModel, TierlistItemVariation } from '@app/models/tierlist-item.model';
import { TierlistModel, TierlistTier } from '@app/models/tierlist.model';
import { AlertService } from '@app/services/alert.service';
import { StorageService } from '@app/services/storage.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TemplateService } from '@app/services/template.service';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ColorPickerModule } from 'primeng/colorpicker';
import { TooltipModule } from 'primeng/tooltip';
import { deepCopy } from '@app/utils';

@Component({
	selector: 'page-tierlist',
	imports: [
		CommonModule, FormsModule, CdkDrag, CdkDropList, CdkDropListGroup,
		TileComponent, SpinnerComponent,
		ButtonModule, DialogModule, GalleriaModule, InputTextModule, FloatLabelModule, ColorPickerModule, TooltipModule,
	],
	templateUrl: './tierlist.page.html',
	styleUrl: './tierlist.page.scss',
})
export class TierlistPage {
	public isLoading: boolean = false;
	public isLoadingSave: boolean = false;
	public isLoadingDelete: boolean = false;

	public tierlist?: TierlistModel;

	public isEditing: boolean = false;

	public showDeleteDialog: boolean = false;

	public isAddingNewItem: boolean = false;
	public showEditItemDialog: boolean = false;
	public newVariation: TierlistItemVariation = {
		name: '',
		image: '',
	};

	public showVariationsDialog: boolean = false;
	public selectedItem?: TierlistItemModel;
	public galleryIndex: number = 0;
	public selectedItemVariations: TierlistItemVariation[] = [];

	public showTierInfoDialog: boolean = false;
	public selectedTier?: TierlistTier;

	public canDropItems: boolean = false;

	private _route = inject(ActivatedRoute);
	private _router = inject(Router);
	private _storage = inject(StorageService);
	private _templates = inject(TemplateService);
	private _alerts = inject(AlertService);

	ngOnInit() {
		this._route.params.subscribe(params => {
			const tierlistId = params['id'];

			this.isLoading = true;
			this._storage.get(tierlistId).subscribe({
				next: (tierlist: TierlistModel) => {
					this.tierlist = tierlist as TierlistModel;
					this._checkCanDropItems();
				},
				error: () => {
					this._alerts.showError('Tierlist not found.', 'Not Found');
					this._router.navigate(['/create']);

				},
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
		this._storage.delete(this.tierlist.tierlistId!).subscribe({
			next: () => {
				this._alerts.showSuccess('Tierlist deleted successfully.', 'Deleted');
				this._router.navigate(['/']);
			},
			error: () => {
				this._alerts.showError('Failed to delete tierlist.');
			}
		}).add(() => this.isLoadingDelete = false);
	}

	/**
	 * Removes all the items from the tierlist tiers and moves them back to the main items array.
	 */
	public dropItems(): void {
		if (!this.canDropItems) return;

		// Move all the items from the tierlist tiers into the main items array
		this.tierlist!.items.push(...this.tierlist!.tiers!.flatMap(tier => tier.items || []));

		// Clear the tiers
		this.tierlist!.tiers!.forEach(tier => {
			tier.items = [];
		});

		this._checkCanDropItems();
	}

	/**
	 * Handles the drop event for the drag-and-drop functionality.
	 * @param event The DragDrop event
	 */
	public drop(event: CdkDragDrop<TierlistItemModel[]>): void {
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

			this._checkCanDropItems();
		}
	}

	public createNewItem(): void {
		this.isAddingNewItem = true;
		this.selectedItem = {
			name: 'New Item',
			thumbnail: '',
			variations: [
				{ name: 'Default', image: '' },
			],
		};

		this.showEditItemDialog = true;
	}

	public addNewItem(): void {
		this.tierlist!.items.push(this.selectedItem!);
		this.selectedItem = undefined;
		this.isAddingNewItem = false;
		this.showEditItemDialog = false;
	}

	public addNewVariation(): void {
		this.selectedItem!.variations.push(this.newVariation!);
		this.newVariation = {
			name: '',
			image: '',
		};
	}

	public deleteItem(item: TierlistItemModel): void {
		const index = this.tierlist?.items.indexOf(item);
		if (index === undefined || index < 0) return;

		this.tierlist!.items.splice(index, 1);
		this.selectedItem = undefined;
		this.isAddingNewItem = false;
		this.showEditItemDialog = false;
		this._alerts.showSuccess('Item deleted successfully.', 'Deleted');
	}

	public canDeleteItem(itemId?: number): boolean {
		if (!this.tierlist || !itemId) return false;
		
		// An item can only be deleted if it is not in any tier
		return !this.tierlist?.tiers?.some(tier => tier.items?.some(item => item.id === itemId));
	}

	public clickedTile(item: TierlistItemModel): void {
		this.isAddingNewItem = false;
		this.galleryIndex = 0;
		this.selectedItem = item;

		// When editing, show the edit item dialog
		if (this.isEditing) {
			this.showEditItemDialog = true;
		}
		
		// When not editing, show the variations dialog (if the item even has variations)
		else if (item.variations && item.variations.length > 0) {
			this.selectedItemVariations = [];
			this.showVariationsDialog = true;

			// This is needed as a hack to ensure that the correct amount of variations are shown
			// in the thumbnails of the galleria. For example, if you clicked a 2 variation item and then a 3, the
			// third variation wouldn't appear as a thumbnail otherwise
			setTimeout(() => {
				this.selectedItemVariations = deepCopy(item.variations);
			});
		}
	}

	public addTier(): void {
		if (!this.tierlist) return;

		const newTier: TierlistTier = {
			label: 'New Tier',
			color: '#A1A1A1',
			items: [],
		};

		this.tierlist.tiers?.push(newTier);
		this.clickedTier(newTier);
		this._checkCanDropItems();
	}

	public clickedTier(tier: TierlistTier): void {
		if (!this.isEditing) return;

		this.selectedTier = tier;
		this.showTierInfoDialog = true;
	}

	public deleteTier(tier: TierlistTier): void {
		const index = this.tierlist?.tiers?.indexOf(tier);
		if (index === undefined || index < 0) return;

		// Add the tiers items into the main list
		const tierItems = this.tierlist!.tiers![index].items || [];
		this.tierlist!.items.push(...tierItems);

		// Delete the tier
		this.tierlist!.tiers!.splice(index, 1);
		this.showTierInfoDialog = false;
		this._checkCanDropItems();
	}

	public moveTierUp(index: number): void {
		// Swap the tier at index with the one above it
		if (index <= 0 || !this.tierlist?.tiers) return;
		const tiers = this.tierlist.tiers;
		[tiers[index - 1], tiers[index]] = [tiers[index], tiers[index - 1]];
	}

	public moveTierDown(index: number): void {
		// Swap the tier at index with the one below it
		if (index >= (this.tierlist?.tiers?.length || 0) - 1 || !this.tierlist?.tiers) return;
		const tiers = this.tierlist.tiers;
		[tiers[index + 1], tiers[index]] = [tiers[index], tiers[index + 1]];
	}

	private _checkCanDropItems(): void {
		// Check if any of the tiers have items inside them
		const tiersHaveItems = this.tierlist?.tiers?.some(tier => tier.items && tier.items.length > 0) || false;
		this.canDropItems = tiersHaveItems;
	}
}
