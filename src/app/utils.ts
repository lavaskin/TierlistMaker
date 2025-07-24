import { TierlistModel } from "./models/tierlist.model";

export function deepCopy(obj: any): any {
	return JSON.parse(JSON.stringify(obj));
}

export function preProcessTemplateData(templateData: TierlistModel, sort: boolean = true): any {
	// Add an id to all items
	templateData.items.forEach((item: any, index: number) => {
		item.id = index + 1; // Assigning a unique id starting from 1
	});

	// Sort the items by name
	if (sort) {
		templateData.items.sort((a: any, b: any) => a.name.localeCompare(b.name));
	}

	return templateData;
}