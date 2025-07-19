import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TileComponent } from '@app/components/tile/tile.component';
import { TierlistModel } from '@app/models/tierlist.model';
import { AlertService } from '@app/services/alert.service';
import { TemplateService } from '@app/services/template.service';

@Component({
	selector: 'page-viewer',
	imports: [
		CommonModule,
		TileComponent,
	],
	templateUrl: './viewer.page.html',
	styleUrl: './viewer.page.scss'
})
export class ViewerPage {
	public tierlist?: TierlistModel;

	private _route = inject(ActivatedRoute);
	private _templates = inject(TemplateService);
	private _alerts = inject(AlertService);

	ngOnInit() {
		this._route.params.subscribe(params => {
			const tierlistId = params['id'];

			// Fetch the tierlist template details
			this._templates.get(tierlistId).subscribe({
				next: (tierlist: TierlistModel) => {
					this.tierlist = tierlist;
				},
				error: (err) => {
					this._alerts.showError('Failed to load template.');
				}
			});
		});
	}
}
