import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '@app/services/storage.service';
import { TemplateService } from '@app/services/template.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { TierlistModel } from '@app/models/tierlist.model';
import { SpinnerComponent } from '@app/components/spinner/spinner.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';
import { deepCopy } from '@app/utils';

@Component({
	selector: 'page-create',
	imports: [
		CommonModule, FormsModule,
		SpinnerComponent,
		InputTextModule, ButtonModule, ToastModule, FloatLabelModule, SelectModule,
	],
	templateUrl: './create.page.html',
	styleUrl: './create.page.scss'
})
export class CreatePage {
	public isLoadingTemplate: boolean = false;
	public isLoadingCreation: boolean = false;
	public newTierlist?: TierlistModel;

	public allTemplates: TierlistModel[] = [];
	public selectedTemplate?: TierlistModel;

	private _route = inject(ActivatedRoute);
	private _router = inject(Router);
	private _toasts = inject(MessageService);
	private _templates = inject(TemplateService);
	private _storage = inject(StorageService);

	ngOnInit(): void {
		// Get the template id out of the url
		this._route.params.subscribe(params => {
			const templateId = params['id'];
			this.isLoadingTemplate = true;

			// If there's no id specified, we show a select option for the user to choose a template
			if (templateId == undefined) {
				this._templates.getAll().subscribe({
					next: (templates: TierlistModel[]) => {
						this.allTemplates = templates;
					},
					error: () => {
						this._toasts.add({ severity: 'error', summary: 'Error', detail: 'Failed to load templates.' });
					}
				}).add(() => this.isLoadingTemplate = false);
			} else {
				this._templates.get(templateId).subscribe({
					next: (tierlist: TierlistModel) => {
						tierlist.name = `New ${tierlist.name} Tierlist`;
						this.newTierlist = tierlist;
					},
					error: () => {
						this._toasts.add({ severity: 'error', summary: 'Error', detail: 'Failed to load tierlist template.' });
					}
				}).add(() => this.isLoadingTemplate = false);
			}
		});
	}

	public get canCreate(): boolean {
		return this.newTierlist !== undefined && this.newTierlist.name.trim().length > 0;
	}

	public onTemplateChange(event: any) {
		const tierlist = deepCopy(event as TierlistModel);
		tierlist.name = `New ${tierlist.name} Tierlist`;
		this.newTierlist = tierlist;
	}

	public createTierlist() {
		const tierlistName = this.newTierlist!.name.trim();
		if (!tierlistName) {
			this._toasts.add({ severity: 'warn', summary: 'Warning', detail: 'Tierlist name cannot be empty.' });
			return;
		}

		this.isLoadingCreation = true;
		this._storage.save(this.newTierlist!).subscribe({
			next: (savedTierlist) => {
				// nav over to the newly created tierlist
				this._router.navigate(['/tierlist', savedTierlist.userId]);
			},
			error: (err) => {
				this._toasts.add({ severity: 'error', summary: 'Error', detail: 'Failed to create tierlist.' });
			}
		})
	}
}