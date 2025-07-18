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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'page-create',
	imports: [
		CommonModule, FormsModule,
		SpinnerComponent, InputTextModule, ButtonModule, ToastModule,
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
	private _toasts = inject(MessageService);
	private _tierlists = inject(TierlistService);
	private _storage = inject(StorageService);

	ngOnInit(): void {
		// Get the template id out of the url
		this._route.params.subscribe(params => {
			const templateId = params['id'];
			if (templateId == undefined) {
				this._toasts.add({ severity: 'error', summary: 'Error', detail: 'No template ID provided.' });
				return;
			}
			
			this.fetchTemplate(templateId);
		});
	}

	public createTierlist() {
		const tierlistName = this.tierlist!.name.trim();
		if (!tierlistName) {
			this._toasts.add({ severity: 'warn', summary: 'Warning', detail: 'Tierlist name cannot be empty.' });
			return;
		}

		this.isLoadingCreation = true;
		this._storage.saveTierlist(this.tierlist!).subscribe({
			next: (savedTierlist) => {
				// nav over to the newly created tierlist
				this._router.navigate(['/tierlist', savedTierlist.userId]);
			},
			error: (err) => {
				this._toasts.add({ severity: 'error', summary: 'Error', detail: 'Failed to create tierlist.' });
			}
		})
	}

	private fetchTemplate(tierlistId: number): void {
		this.isLoadingTemplate = true;
		this._tierlists.getTierlist(tierlistId).subscribe({
			next: (tierlist: TierlistModel) => {
				this.tierlist = tierlist;
			},
			error: () => {
				this._toasts.add({ severity: 'error', summary: 'Error', detail: 'Failed to load tierlist template.' });
			}
		}).add(() => this.isLoadingTemplate = false);
	}
}