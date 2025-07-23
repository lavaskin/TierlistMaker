import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { TemplatesData } from "@app/data/templates.data";
import { TierlistModel } from "@app/models/tierlist.model";
import { deepCopy } from "@app/utils";

@Injectable({
	providedIn: 'root'
})
export class TemplateService {
	private _templates: TierlistModel[] = deepCopy(TemplatesData);

	public get(templateId: number): Observable<TierlistModel> {
		const foundTemplate = deepCopy(this._templates.find(t => t.templateId == templateId));

		return new Observable<TierlistModel>((observer) => {
			if (!foundTemplate) {
				observer.error(new Error(`Template with ID ${templateId} not found`));
			} else {
				observer.next(foundTemplate);
			}
			observer.complete();
		});
	}

	public getAll(): Observable<TierlistModel[]> {
		const templatesCopy = deepCopy(this._templates);

		return new Observable<TierlistModel[]>((observer) => {
			observer.next(templatesCopy);
			observer.complete();
		});
	}
}