import { Observable } from "rxjs";
import { Tierlist } from "../models/tierlist.model";
import baTierList from "../data/ba-tierlist.data";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class TierlistService {
	getTierlist(): Observable<Tierlist> {
		const tierlist = JSON.parse(JSON.stringify(baTierList)) as Tierlist;
		return new Observable<Tierlist>((observer) => {
			observer.next(tierlist);
			observer.complete();
		});
	}
}