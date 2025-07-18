import { BlueArchiveCharacterModel } from "@app/models/ba-character.model";
import { TierlistIds } from "@app/models/enums/tierlist-ids.enum";
import { TierlistModel } from "@app/models/tierlist.model";

// Info from: https://bluearchive.wiki/wiki/Characters

const baTierList: TierlistModel = {
	id: TierlistIds.BlueArchive,
	name: "Blue Archive",
	defaultTiers: [
		{ label: '😭', color: '#ff0000' },
		{ label: 'A', color: '#ff7f00' },
		{ label: 'B', color: '#ef5b70' },
		{ label: 'C', color: '#00ff00' },
		{ label: 'D', color: '#f15b4c' },
		{ label: 'F', color: '#e93f33' },
	],
	items: [
		{
			name: 'Airi',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/96/Airi.png/266px-Airi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/9/9e/Airi_00.png', },
				{ name: 'Band', image: 'https://static.wikitide.net/bluearchivewiki/f/fc/Airi_%28Band%29_00.png', },
			],
		},
		{
			name: 'Akane',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/aa/Akane.png/266px-Akane.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/a6/Akane_00.png', },
				{ name: 'Bunny Girl', image: 'https://static.wikitide.net/bluearchivewiki/1/16/Akane_%28Bunny_Girl%29_00.png', },
			],
		},
		{
			name: 'Akari',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/7d/Akari.png/266px-Akari.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/ab/Akari_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/8/84/Akari_%28New_Year%29_diorama_00.png', },
			],
		},
		{
			name: 'Ako',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/72/Ako.png/266px-Ako.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/9/9f/Ako_00.png', },
				{ name: 'Dress', image: 'https://static.wikitide.net/bluearchivewiki/4/4f/Ako_%28Dress%29_00.png', },
			],
		},
		{
			name: 'Aoba',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/4/42/Aoba.png/266px-Aoba.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/45/Aoba_00.png', },
			],
		},
		{
			name: 'Arisu',
			// age: '??',
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/0/0f/Arisu.png/266px-Arisu.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/c/cf/Arisu_00.png', },
				{ name: 'Maid', image: 'https://static.wikitide.net/bluearchivewiki/3/3d/Arisu_%28Maid%29_00.png', },
			],
		},
		{
			name: 'Aru',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/d/db/Aru.png/266px-Aru.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/8e/Aru_00.png', },
				{ name: 'Dress', image: 'https://static.wikitide.net/bluearchivewiki/a/a3/Aru_%28Dress%29_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/f/f8/Aru_%28New_Year%29_00.png', },
			],
		},
		{
			name: 'Asuna',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/9f/Asuna.png/266px-Asuna.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/43/Asuna_00.png', },
				{ name: 'Bunny Girl', image: 'https://static.wikitide.net/bluearchivewiki/6/66/Asuna_%28Bunny_Girl%29_00.png', },
				{ name: 'School Girl', image: 'https://static.wikitide.net/bluearchivewiki/7/78/Asuna_%28School_Uniform%29_00.png', },
			],
		},
		{
			name: 'Atsuko',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/c/c7/Atsuko.png/266px-Atsuko.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/c/cb/Atsuko_00.png/800px-Atsuko_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/9/91/Atsuko_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Ayane',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a7/Ayane.png/266px-Ayane.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/f/f9/Ayane_00.png/320px-Ayane_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/e/ea/Ayane_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Azusa',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/8/86/Azusa.png/266px-Azusa.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/0/0b/Azusa_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/5/5a/Azusa_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Cherino',
			// age: ??,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/7c/Cherino.png/266px-Cherino.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/5/5c/Cherino_00.png/1024px-Cherino_00.png', },
				{ name: 'Hot Spring', image: 'https://static.wikitide.net/bluearchivewiki/8/81/Cherino_%28Hot_Spring%29_diorama_00.png', },
			],
		},
		{
			name: 'Chiaki',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a4/Chiaki.png/266px-Chiaki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/2/21/Chiaki_00.png', },
			],
		},
		{
			name: 'Chihiro',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a7/Chihiro.png/266px-Chihiro.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/6/6a/Chihiro_00.png', },
			],
		},
		{
			name: 'Chinatsu',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/b/b6/Chinatsu.png/266px-Chinatsu.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/c/c9/Chinatsu_00.png', },
				{ name: 'Hot Spring', image: 'https://static.wikitide.net/bluearchivewiki/f/f9/Chinatsu_%28Hot_Spring%29_diorama_00.png', },
			],
		},
		{
			name: 'Chise',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/d/d0/Chise.png/266px-Chise.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/c/cb/Chise_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/4/4d/Chise_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Eimi',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/e/ed/Eimi.png/266px-Eimi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/1/17/Eimi_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/f/fc/Eimi_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Fuuka',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/1/1f/Fuuka.png/266px-Fuuka.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/8a/Fuuka_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/0/03/Fuuka_%28New_Year%29_diorama_00.png', },
			],
		},
		{
			name: 'Hanae',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/72/Hanae.png/266px-Hanae.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/2/26/Hanae_00.png', },
				{ name: 'Christmas', image: 'https://static.wikitide.net/bluearchivewiki/2/2e/Hanae_%28Christmas%29_diorama_00.png', },
			],
		},
		{
			name: 'Hanako',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/9c/Hanako.png/266px-Hanako.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/6/6a/Hanako_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/b/bd/Hanako_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Hare',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/4/47/Hare.png/266px-Hare.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/4a/Hare_00.png', },
				{ name: 'Camping', image: 'https://static.wikitide.net/bluearchivewiki/d/d5/Hare_%28Camping%29_00.png', },
			],
		},
		{
			name: 'Haruka',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/b/b1/Haruka.png/266px-Haruka.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/b/b7/Haruka_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/6/6d/Haruka_%28New_Year%29_00.png', },
			],
		},
		{
			name: 'Haruna',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a6/Haruna.png/266px-Haruna.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/7/79/Haruna_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/7/76/Haruna_%28New_Year%29_diorama_00.png', },
				{ name: 'Sportswear', image: 'https://static.wikitide.net/bluearchivewiki/0/0a/Haruna_%28Sportswear%29_diorama_00.png', },
			],
		},
		{
			name: 'Hasumi',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/8/84/Hasumi.png/266px-Hasumi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/9/9b/Hasumi_00.png', },
				{ name: 'Sportswear', image: 'https://static.wikitide.net/bluearchivewiki/9/91/Hasumi_%28Sportswear%29_00.png', },
			],
		},
		{
			name: 'Hatsune Miku',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/93/Hatsune_Miku.png/266px-Hatsune_Miku.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/e/ea/Hatsune_Miku_00.png', },
			],
		},
		{
			name: 'Hibiki',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/b/bc/Hibiki.png/266px-Hibiki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/0/07/Hibiki_00.png/800px-Hibiki_00.png', },
				{ name: 'Cheerleader', image: 'https://static.wikitide.net/bluearchivewiki/3/3f/Hibiki_%28Cheerleader%29_diorama_00.png', },
			],
		},
		{
			name: 'Hifumi',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/3/3b/Hifumi.png/266px-Hifumi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/e/ea/Hifumi_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/9/93/Hifumi_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Hikari',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/e/ee/Hikari.png/266px-Hikari.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/7/7b/Hikari_00.png', },
			],
		},
		{
			name: 'Hikari',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/e/ee/Hikari.png/266px-Hikari.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/7/7b/Hikari_00.png', },
			],
		},
		{
			name: 'Himari',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/5/5a/Himari.png/266px-Himari.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/6/6d/Himari_00.png', },
			],
		},
		{
			name: 'Hina',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/8/83/Hina.png/266px-Hina.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/a7/Hina_00.png', },
				{ name: 'Dress', image: 'https://static.wikitide.net/bluearchivewiki/3/34/Hina_%28Dress%29_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/b/bc/Hina_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Hinata',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/97/Hinata.png/266px-Hinata.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/1/19/Hinata_00.png/800px-Hinata_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/6/6f/Hinata_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Hiyori',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/76/Hiyori.png/266px-Hiyori.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/3/39/Hiyori_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/3/3f/Hiyori_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Hoshino',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a9/Hoshino.png/266px-Hoshino.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/7/71/Hoshino_00.png', },
				{ name: 'Battle', image: 'https://static.wikitide.net/bluearchivewiki/5/50/Hoshino_%28Battle%29_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/1/10/Hoshino_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Ibuki',
			age: 11,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/75/Ibuki.png/266px-Ibuki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/9/90/Ibuki_00.png', },
			],
		},
		{
			name: 'Ichika',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/b/b3/Ichika.png/266px-Ichika.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/e/e1/Ichika_00.png', },
			],
		},
		{
			name: 'Iori',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/2/26/Iori.png/266px-Iori.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/b/bd/Iori_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/3/3f/Iori_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Iroha',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/b/bf/Iroha.png/266px-Iroha.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/0/06/Iroha_00.png', },
			],
		},
		{
			name: 'Izumi',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/1/10/Izumi.png/266px-Izumi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/7/7c/Izumi_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/b/b0/Izumi_%28New_Year%29_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/f/f8/Izumi_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Izuna',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/5/54/Izuna.png/266px-Izuna.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/89/Izuna_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/4/4a/Izuna_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Junko',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/3/3c/Junko.png/266px-Junko.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/d/d1/Junko_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/4/4c/Junko_%28New_Year%29_00.png', },
			],
		},
		{
			name: 'Juri',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/3/37/Juri.png/266px-Juri.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/5/5e/Juri_00.png', },
				{ name: 'Part-Timer', image: 'https://static.wikitide.net/bluearchivewiki/e/ed/Juri_%28Part-Timer%29_00.png', },
			],
		},
		{
			name: 'Kaede',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/f/f0/Kaede.png/266px-Kaede.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/9/99/Kaede_00.png/800px-Kaede_00.png', },
			],
		},
		{
			name: 'Kaho',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/6/63/Kaho.png/266px-Kaho.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/b/b8/Kaho_00.png', },
			],
		},
		{
			name: 'Kanna',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/4/47/Kanna.png/266px-Kanna.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/4b/Kanna_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/e/e7/Kanna_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Karin',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/5/50/Karin.png/266px-Karin.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/f/fa/Karin_00.png', },
				{ name: 'Bunny Girl', image: 'https://static.wikitide.net/bluearchivewiki/7/7f/Karin_%28Bunny_Girl%29_00.png', },
				{ name: 'School Uniform', image: 'https://static.wikitide.net/bluearchivewiki/6/6d/Karin_%28School_Uniform%29_00.png', },
			],
		},
		{
			name: 'Kasumi',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/6/6b/Kasumi.png/266px-Kasumi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/8a/Kasumi_00.png', },
			],
		},
		{
			name: 'Kayoko',
			age: 18,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a5/Kayoko.png/266px-Kayoko.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/e/e5/Kayoko_00.png', },
				{ name: 'Dress', image: 'https://static.wikitide.net/bluearchivewiki/c/cf/Kayoko_%28Dress%29_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/thumb/8/8a/Kayoko_%28New_Year%29_00.png/320px-Kayoko_%28New_Year%29_00.png', },
			],
		},
		{
			name: 'Kazusa',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/b/b3/Kazusa.png/266px-Kazusa.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/f/fe/Kazusa_00.png', },
				{ name: 'Band', image: 'https://static.wikitide.net/bluearchivewiki/8/8c/Kazusa_%28Band%29_00.png', },
			],
		},
		{
			name: 'Kikyou',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/6/62/Kikyou.png/266px-Kikyou.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/6/6c/Kikyou_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/c/c5/Kikyou_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Kirara',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/3/3f/Kirara.png/266px-Kirara.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/f/ff/Kirara_00.png', },
			],
		},
		{
			name: 'Kirino',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/8/85/Kirino.png/266px-Kirino.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/5/51/Kirino_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/e/e0/Kirino_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Kisaki',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/5/55/Kisaki.png/266px-Kisaki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/0/0b/Kisaki_00.png', },
				{ name: 'Kindergarten (Kiki)', image: 'https://static.wikitide.net/bluearchivewiki/f/f7/Kisaki_%28Kindergarten%29_00.png', },
			],
		},
		{
			name: 'Koharu',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/c/c3/Koharu.png/266px-Koharu.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/e/e5/Koharu_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/8/86/Koharu_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Kokona',
			age: 11,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/8/83/Kokona.png/266px-Kokona.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/9/99/Kokona_00.png', },
			],
		},
		{
			name: 'Kotama',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/94/Kotama.png/266px-Kotama.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/9/91/Kotama_00.png', },
				{ name: 'Camping', image: 'https://static.wikitide.net/bluearchivewiki/0/05/Kotama_%28Camping%29_00.png', },
			],
		},
		{
			name: 'Kotori',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/ab/Kotori.png/266px-Kotori.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/a6/Kotori_00.png', },
				{ name: 'Cheerleader', image: 'https://static.wikitide.net/bluearchivewiki/2/25/Kotori_%28Cheerleader%29_diorama_00.png', },
			],
		},
		{
			name: 'Koyuki',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/af/Koyuki.png/266px-Koyuki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/a0/Koyuki_00.png', },
			],
		},

		// ...

		{
			name: 'Yukari',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/2/2b/Yukari.png/266px-Yukari.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/5/52/Yukari_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/5/57/Yukari_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Yuuka',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/3/3e/Yuuka.png/266px-Yuuka.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/f/f9/Yuuka_00.png', },
				{ name: 'Sportswear', image: 'https://static.wikitide.net/bluearchivewiki/thumb/d/da/Yuuka_%28Sportswear%29_diorama_00.png/800px-Yuuka_%28Sportswear%29_diorama_00.png', },
				{ name: 'Pajama', image: 'https://static.wikitide.net/bluearchivewiki/d/dd/Yuuka_%28Pajama%29_00.png', },
			],
		},
		{
			name: 'Yuzu',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/71/Yuzu.png/266px-Yuzu.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/2/29/Yuzu_00.png', },
				{ name: 'Maid', image: 'https://static.wikitide.net/bluearchivewiki/c/c8/Yuzu_%28Maid%29_00.png', },
			],
		},

		/*
		{
			name: '',
			age: 0,
			thumbnail: '',
			variations: [
				{ name: 'Default', image: '', },
				{ name: '', image: '', },
			],
		},
		*/
	] as BlueArchiveCharacterModel[],
}

// Add an id to all characters
baTierList.items.forEach((item, index) => {
	item.id = index + 1; // Assigning a unique id starting from 1
});	

// Sort the characters by name
baTierList.items.sort((a, b) => a.name.localeCompare(b.name));

export default baTierList;