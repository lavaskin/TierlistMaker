import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { TierlistsData } from "@app/data/tierlists.data";
import { TierlistModel } from "@app/models/tierlist.model";
import { deepCopy } from "@app/utils";

@Injectable({
	providedIn: 'root'
})
export class TemplateService {
	private _templates: TierlistModel[] = deepCopy(TierlistsData);
	private _defaultTiers = [
		{ label: 'S', color: '#ff0000' },
		{ label: 'A', color: '#f15b4c' },
		{ label: 'B', color: '#ef5b70' },
		{ label: 'C', color: '#d35d90' },
		{ label: 'D', color: '#9b6b9c' },
		{ label: 'F', color: '#c39ec9' },
	];

	public get(templateId: number): Observable<TierlistModel> {
		const tierlist = this._templates.find(t => t.templateId == templateId);
		if (!tierlist) {
			throw new Error(`Template with id ${templateId} not found`);
		}

		// Copy the default tiers onto the user tiers, and init the tierlist items1
		const tierlistCopy = deepCopy(tierlist);
		if (!tierlistCopy.defaultTiers) {
			tierlistCopy.defaultTiers = this._defaultTiers;
		}

		// Add empty array for items and copy default tiers to user tiers for modification
		tierlistCopy.tiers = deepCopy(tierlistCopy.defaultTiers);
		tierlistCopy.tiers.forEach((tier: any) => {
			tier.items = [];
		});

		// Return the tierlist
		return new Observable<TierlistModel>((observer) => {
			observer.next(tierlistCopy);
			observer.complete();
		});
	}

	public getAll(): Observable<TierlistModel[]> {
		const tierlistsCopy = deepCopy(this._templates);
		return new Observable<TierlistModel[]>((observer) => {
			observer.next(tierlistsCopy);
			observer.complete();
		});
	}
}