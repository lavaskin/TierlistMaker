import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '@app/services/storage.service';
import { TierlistService } from '@app/services/tierlist.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TierlistModel } from '@app/models/tierlist.model';
import { SpinnerComponent } from '@app/components/spinner/spinner.component';

@Component({
	selector: 'page-create',
	imports: [
		CommonModule, FormsModule,
		SpinnerComponent, InputTextModule, ButtonModule,
	],
	templateUrl: './create.page.html',
	styleUrl: './create.page.scss'
})
export class CreatePage {
	public isLoadingTemplate: boolean = false;
	public isLoadingCreation: boolean = false;
	public tierlist?: TierlistModel;

	private _route = inject(ActivatedRoute);
	private _router = inject(Router);
	private _tierlists = inject(TierlistService);
	private _storage = inject(StorageService);

	ngOnInit(): void {
		// Get the template id out of the url
		this._route.params.subscribe(params => {
			const templateId = params['id'];

			// Fetch the tierlist template details
			this.isLoadingTemplate = true;
			this._tierlists.getTierlist(templateId).subscribe({
				next: (tierlist: TierlistModel) => {
					this.tierlist = tierlist;
				},
				error: (err) => {
					console.error('Error fetching tierlist:', err);
				}
			}).add(() => this.isLoadingTemplate = false);
		});
	}

	public createTierlist() {
		const tierlistName = this.tierlist!.name.trim();
		if (!tierlistName) {
			alert('Tierlist name cannot be empty.');
			return;
		}

		this.isLoadingCreation = true;
		this._storage.saveTierlist(this.tierlist!).subscribe({
			next: (savedTierlist) => {
				// nav over to the newly created tierlist
				this._router.navigate(['/tierlist', savedTierlist.userId]);
			},
			error: (err) => {
				console.error('Error saving tierlist:', err);
				alert('Failed to create tierlist. Please try again.');
			}
		})
	}
}