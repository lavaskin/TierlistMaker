import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TierlistModel } from '@app/models/tierlist.model';
import { TierlistService } from '@app/services/tierlist.service';

@Component({
	selector: 'page-tierlist',
	imports: [],
	templateUrl: './tierlist-page.html',
	styleUrl: './tierlist-page.scss'
})
export class TierlistPage {
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
