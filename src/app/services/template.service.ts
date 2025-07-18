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

		const tierlistCopy = deepCopy(tierlist);
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