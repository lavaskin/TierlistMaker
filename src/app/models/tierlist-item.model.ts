export interface TierlistItemModel {
	id?: number,
	name: string,
	thumbnail: string,
	variations: TierlistItemVariation[],
}

export interface TierlistItemVariation {
	name: string,
	image: string,
}
