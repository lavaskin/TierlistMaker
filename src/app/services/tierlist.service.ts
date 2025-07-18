import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { TierlistsData } from "@app/data/tierlists.data";
import { TierlistModel } from "@app/models/tierlist.model";
import { deepCopy } from "@app/utils";

@Injectable({
	providedIn: 'root'
})
export class TierlistService {
	// Deep copy the tierlists data to avoid mutation
	private tierlists: TierlistModel[] = deepCopy(TierlistsData);

	public getTierlist(id: number): Observable<TierlistModel> {
		const tierlist = this.tierlists.find(t => t.templateId == id);
		if (!tierlist) {
			throw new Error(`Tierlist with id ${id} not found`);
		}

		const tierlistCopy = deepCopy(tierlist);
		return new Observable<TierlistModel>((observer) => {
			observer.next(tierlistCopy);
			observer.complete();
		});
	}

	public getAllTierlists(): Observable<TierlistModel[]> {
		const tierlistsCopy = deepCopy(this.tierlists);
		return new Observable<TierlistModel[]>((observer) => {
			observer.next(tierlistsCopy);
			observer.complete();
		});
	}
}