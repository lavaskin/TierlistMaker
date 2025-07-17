export interface BlueArchiveCharacterModel {
	id?: number,
	name: string,
	age?: number,
	thumbnail?: string,
	skins: BlueArchiveCharacterSkin[],
}

interface BlueArchiveCharacterSkin {
	name: string,
	image: string,
}