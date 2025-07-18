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
		const foundTemplate = this._templates.find(t => t.templateId == templateId);
		if (!foundTemplate) {
			throw new Error(`Template with id ${templateId} not found`);
		}

		// Return the tierlist after initializing its tiers
		const template = this._initializeTiers(foundTemplate);
		return new Observable<TierlistModel>((observer) => {
			observer.next(template);
			observer.complete();
		});
	}

	public getAll(): Observable<TierlistModel[]> {
		const templatesCopy = deepCopy(this._templates);

		// Initialize the tiers for each template
		templatesCopy.forEach((template: TierlistModel, index: number) => {
			templatesCopy[index] = this._initializeTiers(template);
		});

		return new Observable<TierlistModel[]>((observer) => {
			observer.next(templatesCopy);
			observer.complete();
		});
	}

	private _initializeTiers(tierlist: TierlistModel): TierlistModel {
		// Copy the default tiers onto the user tiers, and init the tierlist items
		const tierlistCopy = deepCopy(tierlist);
		if (!tierlistCopy.defaultTiers) {
			tierlistCopy.defaultTiers = this._defaultTiers;
		}

		// Add empty array for items and copy default tiers to user tiers for modification
		tierlistCopy.tiers = deepCopy(tierlistCopy.defaultTiers);
		tierlistCopy.tiers.forEach((tier: any) => {
			tier.items = [];
		});

		return tierlistCopy;
	}
}