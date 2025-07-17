import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TileComponent } from '@app/components/tile/tile.component';
import { TierlistModel } from '@app/models/tierlist.model';
import { TierlistService } from '@app/services/tierlist.service';

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
	private _tierlistId?: number;
	public tierlist?: TierlistModel;

	private _route = inject(ActivatedRoute);
	private _tierlist = inject(TierlistService);

	ngOnInit() {
		this._route.params.subscribe(params => {
			this._tierlistId = params['id'];
			this._fetchTierlist(this._tierlistId!);
		});
	}

	private _fetchTierlist(id: number) {
		this._tierlist.getTierlist(id).subscribe({
			next: (tierlist: TierlistModel) => {
				this.tierlist = tierlist;
			},
			error: (err) => {
				console.error('Error fetching tierlist:', err);
			}
		});
	}
}
