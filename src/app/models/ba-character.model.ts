export interface BlueArchiveCharacter {
	id?: number,
	name: string,
	age?: number,
	thumbnail?: string,
	skins: BlueArchiveCharacterSkin[],
}

export interface BlueArchiveCharacterSkin {
	name: string,
	image: string,
}