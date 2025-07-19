import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { TierlistsData } from "@app/data/tierlists.data";
import { TierlistModel } from "@app/models/tierlist.model";
import { deepCopy } from "@app/utils";

@Injectable({
	providedIn: 'root'
})
export class TemplateService {
	// Deep copy the tierlists data to avoid mutation
	private templates: TierlistModel[] = deepCopy(TierlistsData);

	public get(templateId: number): Observable<TierlistModel> {
		const tierlist = this.templates.find(t => t.templateId == templateId);
		if (!tierlist) {
			throw new Error(`Template with id ${templateId} not found`);
		}

		// Copy the default tiers onto the user tiers, and init the tierlist items1
		const tierlistCopy = deepCopy(tierlist);
		if (tierlistCopy.defaultTiers) {
			tierlistCopy.tiers = deepCopy(tierlistCopy.defaultTiers);

			// Add empty array for items
			tierlistCopy.tiers.forEach((tier: any) => {
				tier.items = [];
			});
		}

		// Return the tierlist
		return new Observable<TierlistModel>((observer) => {
			observer.next(tierlistCopy);
			observer.complete();
		});
	}

	public getAll(): Observable<TierlistModel[]> {
		const tierlistsCopy = deepCopy(this.templates);
		return new Observable<TierlistModel[]>((observer) => {
			observer.next(tierlistsCopy);
			observer.complete();
		});
	}
}