import { TierlistItemModel } from "./tierlist-item.model";

export interface TierlistModel {
	id: number,
	name: string,
	items: TierlistItemModel[],
}