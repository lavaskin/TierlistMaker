import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SpinnerComponent } from '@app/components/spinner/spinner.component';
import { TierlistIds } from '@app/models/enums/tierlist-ids.enum';
import { TierlistModel } from '@app/models/tierlist.model';
import { StorageService } from '@app/services/storage.service';
import { TierlistService } from '@app/services/tierlist.service';
import { ButtonModule } from 'primeng/button';
import { forkJoin } from 'rxjs';

@Component({
	selector: 'page-home',
	imports: [
		CommonModule, RouterModule,
		SpinnerComponent, ButtonModule,
	],
	templateUrl: './home.page.html',
	styleUrl: './home.page.scss'
})
export class HomePage {
	public isLoading: boolean = false;
	public tierlistTemplates: TierlistModel[] = [];
	public userTierlists: TierlistModel[] = [];

	private _router = inject(Router);
	private _tierlists = inject(TierlistService);
	private _storage = inject(StorageService);

	ngOnInit(): void {
		this.isLoading = true;

		// Fetch both user tierlists and all the available templates
		forkJoin({
			tierlistTemplates: this._tierlists.getAllTierlists(),
			userTierlists: this._storage.getAllTierlists()
		}).subscribe({
			next: ({ tierlistTemplates, userTierlists }) => {
				this.tierlistTemplates = tierlistTemplates;
				this.userTierlists = userTierlists;
			},
			error: (err) => {
				console.error('Error fetching data:', err);
			}
		}).add(() => this.isLoading = false);
	}

	public navigateToTierlist(tierlistId: TierlistIds) {
		this._router.navigate(['/tierlist', tierlistId]);
	}
}
