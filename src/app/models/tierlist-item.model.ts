export interface TierlistItemModel {
	id: number,
	name: string,
	thumbnail: string,
	variations: TierlistItemVariation[],
}

interface TierlistItemVariation {
	name: string,
	image: string,
}
