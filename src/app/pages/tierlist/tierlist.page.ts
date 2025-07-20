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

	public showVariationsDialog: boolean = false;
	public selectedItem?: TierlistItemModel;
	public galleryIndex: number = 0;
	public selectedItemVariations: TierlistItemVariation[] = [];

	public showTierInfoDialog: boolean = false;
	public selectedTier?: TierlistTier;

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
				next: (tierlist: TierlistModel) => {
					this.tierlist = tierlist as TierlistModel;
					this._checkCanReset();
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
				this.isEditing = false;
			},
			error: () => {
				this._alerts.showError('Failed to reset tierlist.');
			}
		}).add(() => this.isLoading = false);
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
		this._checkCanReset();
	}

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

			this._checkCanReset();
		}
	}

	public clickedTile(item: TierlistItemModel): void {
		this.galleryIndex = 0;
		this.selectedItem = item;
		this.selectedItemVariations = [];		
		this.showVariationsDialog = true;

		// This is needed as a hack to ensure that the correct amount of variations are shown
		// in the thumbnails of the galleria. For example, if you clicked a 2 variation item and then a 3, the
		// third variation wouldn't appear as a thumbnail otherwise
		setTimeout(() => {
			this.selectedItemVariations = deepCopy(item.variations);
		});
	}

	public clickedTier(tier: TierlistTier): void {
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
		this._checkCanReset();
	}

	private _checkCanReset(): void {
		// Check if any of the tiers have items inside them
		const tiersHaveItems = this.tierlist?.tiers?.some(tier => tier.items && tier.items.length > 0) || false;
		const tiersDontMatchTemplate = this.tierlist?.tiers?.some((tier, index) => {
			const templateTier = this.tierlist?.defaultTiers?.[index];
			return !templateTier || tier.label !== templateTier.label || tier.color !== templateTier.color;
		}) || false;
		const defaultTiersMissing = this.tierlist?.defaultTiers?.length !== this.tierlist?.tiers?.length;

		this.canReset = tiersHaveItems || tiersDontMatchTemplate || defaultTiersMissing;
	}
}
