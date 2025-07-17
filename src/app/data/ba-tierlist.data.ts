import { BlueArchiveCharacter } from "../models/ba-character.model";
import { Tierlist } from "../models/tierlist.model";

const baTierList: Tierlist = {
	id: 0,
	name: "Blue Archive",
	items: [
		{
			name: 'Airi',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/96/Airi.png/266px-Airi.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/9/9e/Airi_00.png', },
				{ name: 'Band', image: 'https://static.wikitide.net/bluearchivewiki/f/fc/Airi_%28Band%29_00.png', },
			],
		},
		{
			name: 'Akane',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/aa/Akane.png/266px-Akane.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/a6/Akane_00.png', },
				{ name: 'Bunny Girl', image: 'https://static.wikitide.net/bluearchivewiki/1/16/Akane_%28Bunny_Girl%29_00.png', },
			],
		},
		{
			name: 'Akari',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/7d/Akari.png/266px-Akari.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/ab/Akari_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/8/84/Akari_%28New_Year%29_diorama_00.png', },
			],
		},
		{
			name: 'Ako',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/72/Ako.png/266px-Ako.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/9/9f/Ako_00.png', },
				{ name: 'Dress', image: 'https://static.wikitide.net/bluearchivewiki/4/4f/Ako_%28Dress%29_00.png', },
			],
		},
		{
			name: 'Aoba',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/4/42/Aoba.png/266px-Aoba.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/45/Aoba_00.png', },
			],
		},
		{
			name: 'Arisu',
			// age: '??',
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/0/0f/Arisu.png/266px-Arisu.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/c/cf/Arisu_00.png', },
				{ name: 'Maid', image: 'https://static.wikitide.net/bluearchivewiki/3/3d/Arisu_%28Maid%29_00.png', },
			],
		},
		{
			name: 'Aru',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/d/db/Aru.png/266px-Aru.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/8e/Aru_00.png', },
				{ name: 'Dress', image: 'https://static.wikitide.net/bluearchivewiki/a/a3/Aru_%28Dress%29_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/f/f8/Aru_%28New_Year%29_00.png', },
			],
		},
		{
			name: 'Asuna',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/9f/Asuna.png/266px-Asuna.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/43/Asuna_00.png', },
				{ name: 'Bunny Girl', image: 'https://static.wikitide.net/bluearchivewiki/6/66/Asuna_%28Bunny_Girl%29_00.png', },
				{ name: 'School Girl', image: 'https://static.wikitide.net/bluearchivewiki/7/78/Asuna_%28School_Uniform%29_00.png', },
			],
		},
		{
			name: 'Atsuko',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/c/c7/Atsuko.png/266px-Atsuko.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/c/cb/Atsuko_00.png/800px-Atsuko_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/9/91/Atsuko_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Ayane',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a7/Ayane.png/266px-Ayane.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/f/f9/Ayane_00.png/320px-Ayane_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/e/ea/Ayane_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Azusa',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/8/86/Azusa.png/266px-Azusa.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/0/0b/Azusa_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/5/5a/Azusa_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Cherino',
			// age: ??,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/7c/Cherino.png/266px-Cherino.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/5/5c/Cherino_00.png/1024px-Cherino_00.png', },
				{ name: 'Hot Spring', image: 'https://static.wikitide.net/bluearchivewiki/8/81/Cherino_%28Hot_Spring%29_diorama_00.png', },
			],
		},
		{
			name: 'Chiaki',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a4/Chiaki.png/266px-Chiaki.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/2/21/Chiaki_00.png', },
			],
		},
		{
			name: 'Chihiro',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a7/Chihiro.png/266px-Chihiro.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/6/6a/Chihiro_00.png', },
			],
		},
		{
			name: 'Chinatsu',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/b/b6/Chinatsu.png/266px-Chinatsu.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/c/c9/Chinatsu_00.png', },
				{ name: 'Hot Spring', image: 'https://static.wikitide.net/bluearchivewiki/f/f9/Chinatsu_%28Hot_Spring%29_diorama_00.png', },
			],
		},
		{
			name: 'Chise',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/d/d0/Chise.png/266px-Chise.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/c/cb/Chise_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/4/4d/Chise_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Eimi',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/e/ed/Eimi.png/266px-Eimi.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/1/17/Eimi_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/f/fc/Eimi_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Fuuka',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/1/1f/Fuuka.png/266px-Fuuka.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/8a/Fuuka_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/0/03/Fuuka_%28New_Year%29_diorama_00.png', },
			],
		},
		{
			name: 'Hanae',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/72/Hanae.png/266px-Hanae.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/2/26/Hanae_00.png', },
				{ name: 'Christmas', image: 'https://static.wikitide.net/bluearchivewiki/2/2e/Hanae_%28Christmas%29_diorama_00.png', },
			],
		},
		{
			name: 'Hanako',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/9c/Hanako.png/266px-Hanako.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/6/6a/Hanako_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/b/bd/Hanako_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Hare',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/4/47/Hare.png/266px-Hare.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/4a/Hare_00.png', },
				{ name: 'Camping', image: 'https://static.wikitide.net/bluearchivewiki/d/d5/Hare_%28Camping%29_00.png', },
			],
		},
		{
			name: 'Haruka',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/b/b1/Haruka.png/266px-Haruka.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/b/b7/Haruka_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/6/6d/Haruka_%28New_Year%29_00.png', },
			],
		},
		{
			name: 'Haruna',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a6/Haruna.png/266px-Haruna.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/7/79/Haruna_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/7/76/Haruna_%28New_Year%29_diorama_00.png', },
				{ name: 'Sportswear', image: 'https://static.wikitide.net/bluearchivewiki/0/0a/Haruna_%28Sportswear%29_diorama_00.png', },
			],
		},
		{
			name: 'Hasumi',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/8/84/Hasumi.png/266px-Hasumi.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/9/9b/Hasumi_00.png', },
				{ name: 'Sportswear', image: 'https://static.wikitide.net/bluearchivewiki/9/91/Hasumi_%28Sportswear%29_00.png', },
			],
		},
		{
			name: 'Hatsune Miku',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/93/Hatsune_Miku.png/266px-Hatsune_Miku.png',
			skins: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/e/ea/Hatsune_Miku_00.png', },
			],
		},
	] as BlueArchiveCharacter[],
}

// Add an id to all characters
baTierList.items.forEach((item, index) => {
	item.id = index + 1; // Assigning a unique id starting from 1
});	

// Sort the characters by name
baTierList.items.sort((a, b) => a.name.localeCompare(b.name));

export default baTierList;