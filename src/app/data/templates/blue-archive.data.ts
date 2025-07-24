import { BlueArchiveCharacterModel } from "@app/models/ba-character.model";
import { TemplateIdEnum } from "@app/models/enums/template-ids.enum";
import { TierlistModel } from "@app/models/tierlist.model";
import { preProcessTemplateData } from "@app/utils";

// Info from: https://bluearchive.wiki/wiki/Characters

const baTemplateData: TierlistModel = {
	templateId: TemplateIdEnum.BlueArchive,
	name: "Blue Archive",
	defaultTiers: [
		{ label: '😭', color: '#ff0000' },
		{ label: 'A', color: '#f15b4c' },
		{ label: 'B', color: '#ef5b70' },
		{ label: 'C', color: '#d35d90' },
		{ label: 'D', color: '#9b6b9c' },
		{ label: 'F', color: '#c39ec9' },
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
				{ name: 'Swimsuit', image: '/tierlists/ba/hasumi.jpg', },
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
				{ name: 'Swimsuit', image: '/tierlists/ba/ichika.jpg', },
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
		{
			name: 'Maki',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/2/21/Maki.png/266px-Maki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/f/f8/Maki_00.png', },
				{ name: 'Camping', image: 'https://static.wikitide.net/bluearchivewiki/2/26/Maki_%28Camping%29_00.png', },
			],
		},
		{
			name: 'Makoto',
			age: 18,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/2/20/Makoto.png/266px-Makoto.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/7/73/Makoto_00.png', },
			],
		},
		{
			name: 'Mari',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/4/4f/Mari.png/266px-Mari.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/3/3b/Mari_00.png', },
				{ name: 'Idol', image: 'https://static.wikitide.net/bluearchivewiki/0/00/Mari_%28Idol%29_00.png', },
				{ name: 'Sportswear', image: 'https://static.wikitide.net/bluearchivewiki/c/c8/Mari_%28Sportswear%29_diorama_00.png', },
			],
		},
		{
			name: 'Marina',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/9d/Marina.png/266px-Marina.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/4f/Marina_00.png', },
				{ name: 'Qipao', image: 'https://static.wikitide.net/bluearchivewiki/b/bb/Marina_%28Qipao%29_00.png', },
			],
		},
		{
			name: 'Mashiro',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/0/06/Mashiro.png/266px-Mashiro.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/0/04/Mashiro_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/4/43/Mashiro_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Megu',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/d/d4/Megu.png/266px-Megu.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/4e/Megu_00.png', },
			],
		},
		{
			name: 'Meru',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/4/4f/Meru.png/266px-Meru.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/a7/Meru_00.png', },
			],
		},
		{
			name: 'Michiru',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/e/e6/Michiru.png/266px-Michiru.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/4d/Michiru_00.png', },
			],
		},
		{
			name: 'Midori',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/e/ee/Midori.png/266px-Midori.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/f/fd/Midori_00.png', },
				{ name: 'Maid', image: 'https://static.wikitide.net/bluearchivewiki/7/73/Midori_%28Maid%29_00.png', },
			],
		},
		{
			name: 'Mika',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/c/c8/Mika.png/266px-Mika.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/3/3b/Mika_00.png', },
				{ name: 'Swimsuit', image: '/tierlists/ba/mika.jpg', },
			],
		},
		{
			name: 'Mimori',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/8/82/Mimori.png/266px-Mimori.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/8/84/Mimori_00.png/800px-Mimori_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/f/fb/Mimori_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Mina',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/6/6b/Mina.png/266px-Mina.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/80/Mina_00.png', },
			],
		},
		{
			name: 'Mine',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a0/Mine.png/266px-Mine.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/2/27/Mine_00.png', },
				{ name: 'Idol', image: 'https://static.wikitide.net/bluearchivewiki/8/82/Mine_%28Idol%29_00.png', },
			],
		},
		{
			name: 'Minori',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/1/1a/Minori.png/266px-Minori.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/c/cc/Minori_00.png', },
			],
		},
		{
			name: 'Misaka Mikoto',
			age: 14,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/76/Misaka_Mikoto.png/266px-Misaka_Mikoto.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/ad/Misaka_Mikoto_00.png', },
			],
		},
		{
			name: 'Misaki',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/ae/Misaki.png/266px-Misaki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/e/e2/Misaki_00.png', },
			],
		},
		{
			name: 'Miyako',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/3/3e/Miyako.png/266px-Miyako.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/b/b8/Miyako_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/b/b9/Miyako_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Miyu',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/ac/Miyu.png/266px-Miyu.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/d/d7/Miyu_diorama_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/d/d7/Miyu_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Moe',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/c/cc/Moe.png/266px-Moe.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/82/Moe_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/0/04/Moe_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Momiji',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/5/53/Momiji.png/266px-Momiji.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/45/Momiji_00.png', },
			],
		},
		{
			name: 'Momoi',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/1/18/Momoi.png/266px-Momoi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/87/Momoi_00.png', },
				{ name: 'Maid', image: 'https://static.wikitide.net/bluearchivewiki/3/3e/Momoi_%28Maid%29_diorama_00.png', },
			],
		},
		{
			name: 'Mutsuki',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/0/0b/Mutsuki.png/266px-Mutsuki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/a4/Mutsuki_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/9/9a/Mutsuki_%28New_Year%29_00.png', },
			],
		},
		{
			name: 'Nagisa',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/6/6a/Nagisa.png/266px-Nagisa.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/6/63/Nagisa_00.png', },
				{ name: 'Swimsuit', image: '/tierlists/ba/nagisa.jpg', },
			],
		},
		{
			name: 'Nagusa',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/b/bb/Nagusa.png/266px-Nagusa.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/4f/Nagusa_diorama_00.png', },
			],
		},
		{
			name: 'Natsu',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/90/Natsu.png/266px-Natsu.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/5/5e/Natsu_00.png', },
				{ name: 'Band', image: 'https://static.wikitide.net/bluearchivewiki/3/30/Natsu_%28Band%29_00.png', },
			],
		},
		{
			name: 'Neru',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/2/24/Neru.png/266px-Neru.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/a2/Neru_00.png', },
				{ name: 'Bunny Girl', image: 'https://static.wikitide.net/bluearchivewiki/f/f2/Neru_%28Bunny_Girl%29_00.png', },
				{ name: 'School Uniform', image: 'https://static.wikitide.net/bluearchivewiki/5/54/Neru_%28School_Uniform%29_00.png', },
			],
		},
		{
			name: 'Niya',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/0/07/Niya.png/266px-Niya.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/0/06/Niya_00.png', },
			],
		},
		{
			name: 'Noa',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/2/23/Noa.png/266px-Noa.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/5/50/Noa_00.png', },
				{ name: 'Pajama', image: 'https://static.wikitide.net/bluearchivewiki/5/5d/Noa_%28Pajama%29_00.png', },
			],
		},
		{
			name: 'Nodoka',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/e/e1/Nodoka.png/266px-Nodoka.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/7/75/Nodoka_00.png', },
				{ name: 'Hot Spring', image: 'https://static.wikitide.net/bluearchivewiki/8/80/Nodoka_%28Hot_Spring%29_diorama_00.png', },
			],
		},
		{
			name: 'Nonomi',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/ad/Nonomi.png/266px-Nonomi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/85/Nonomi_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/4/4a/Nonomi_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Nozomi',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/0/0b/Nozomi.png/266px-Nozomi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/87/Nozomi_00.png', },
			],
		},
		{
			name: 'Pina',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/9/96/Pina.png/266px-Pina.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/a0/Pina_00.png', },
				{ name: 'Guide', image: 'https://static.wikitide.net/bluearchivewiki/e/e6/Pina_%28Guide%29_00.png', },
			],
		},
		{
			name: 'Rei',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a3/Rei.png/266px-Rei.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/e/e3/Rei_00.png', },
			],
		},
		{
			name: 'Reijo',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/4/4d/Reijo.png/266px-Reijo.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/8b/Reijo_00.png', },
			],
		},
		{
			name: 'Reisa',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/3/34/Reisa.png/266px-Reisa.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/48/Reisa_00.png', },
			],
		},
		{
			name: 'Renge',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/e/e4/Renge.png/266px-Renge.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/a1/Renge_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/7/79/Renge_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Rio',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/4/4a/Rio.png/266px-Rio.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/b/b2/Rio_00.png', },
			],
		},
		{
			name: 'Rumi',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/7d/Rumi.png/266px-Rumi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/b/b9/Rumi_00.png', },
			],
		},
		{
			name: 'Saki',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/d/d0/Saki.png/266px-Saki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/85/Saki_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/f/f3/Saki_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Sakurako',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/f/f0/Sakurako.png/266px-Sakurako.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/a6/Sakurako_00.png', },
				{ name: 'Idol', image: 'https://static.wikitide.net/bluearchivewiki/e/e5/Sakurako_%28Idol%29_00.png', },
			],
		},
		{
			name: 'Saori',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/4/46/Saori.png/266px-Saori.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/4/49/Saori_00.png', },
				{ name: 'Dress', image: 'https://static.wikitide.net/bluearchivewiki/f/ff/Saori_%28Dress%29_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/9/9f/Saori_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Saten Ruiko',
			age: 12,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/b/b0/Saten_Ruiko.png/266px-Saten_Ruiko.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/3/33/Saten_Ruiko_00.png', },
			],
		},
		{
			name: 'Satsuki',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/e/e9/Satsuki.png/266px-Satsuki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/d/dd/Satsuki_00.png', },
			],
		},
		{
			name: 'Saya',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/c/ce/Saya.png/266px-Saya.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/2/28/Saya_00.png', },
				{ name: 'Casual', image: 'https://static.wikitide.net/bluearchivewiki/e/ef/Saya_%28Casual%29_00.png', },
			],
		},
		{
			name: 'Seia',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/4/46/Seia.png/266px-Seia.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/7/74/Seia_00.png', },
				{ name: 'Swimsuit', image: '/tierlists/ba/seia.jpg', },
				{ name: 'Box', image: 'https://static.wikitide.net/bluearchivewiki/9/95/Seia_%28Box%29_00.png', },
			],
		},
		{
			name: 'Sena',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/f/f4/Sena.png/266px-Sena.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/1/10/Sena_00.png', },
				{ name: 'Casual', image: 'https://static.wikitide.net/bluearchivewiki/8/81/Sena_%28Casual%29_diorama_00.png', },
			],
		},
		{
			name: 'Serika',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/c/c8/Serika.png/266px-Serika.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/b/b0/Serika_00.png', },
				{ name: 'New Year', image: 'https://static.wikitide.net/bluearchivewiki/9/90/Serika_%28New_Year%29_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/0/0c/Serika_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Serina',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/4/41/Serina.png/266px-Serina.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/f/f4/Serina_00.png', },
				{ name: 'Christmas', image: 'https://static.wikitide.net/bluearchivewiki/1/15/Serina_%28Christmas%29_diorama_00.png', },
			],
		},
		{
			name: 'Shigure',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/d/da/Shigure.png/266px-Shigure.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/7/71/Shigure_00.png', },
				{ name: 'Hot Spring', image: 'https://static.wikitide.net/bluearchivewiki/2/26/Shigure_%28Hot_Spring%29_diorama_00.png', },
			],
		},
		{
			name: 'Shimiko',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/f/f4/Shimiko.png/266px-Shimiko.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/a3/Shimiko_00.png', },
			],
		},
		{
			name: 'Shiroko',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/6/63/Shiroko.png/266px-Shiroko.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/0/0a/Shiroko_00.png', },
				{ name: 'Riding', image: 'https://static.wikitide.net/bluearchivewiki/8/81/Shiroko_%28Riding%29_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/5/5d/Shiroko_%28Swimsuit%29_00.png', },
			],
		},
		{
			name: 'Shiroko * Terror',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/f/f9/Shiroko%EF%BC%8ATerror.png/266px-Shiroko%EF%BC%8ATerror.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/6/69/Shiroko%EF%BC%8ATerror_00.png', },
			],
		},
		{
			name: 'Shizuko',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/7/77/Shizuko.png/266px-Shizuko.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/9/9e/Shizuko_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/1/18/Shizuko_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Shokuhou Misaki',
			age: 14,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/6/66/Shokuhou_Misaki.png/266px-Shokuhou_Misaki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/f/f7/Shokuhou_Misaki_00.png', },
			],
		},
		{
			name: 'Shun',
			//age: 'Top Secret',
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/1/17/Shun.png/266px-Shun.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/9/9b/Shun_00.png', },
			],
		},
		{
			name: 'Shun (Kid)',
			//age: 'Top Secret',
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/5/53/Shun_%28Kid%29.png/266px-Shun_%28Kid%29.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/9/91/Shun_%28Kid%29_diorama_00.png', },
			],
		},
		{
			name: 'Sumire',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/d/d6/Sumire.png/266px-Sumire.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/6/6c/Sumire_00.png/800px-Sumire_00.png', },
				{ name: 'Part-Timer', image: 'https://static.wikitide.net/bluearchivewiki/5/5e/Sumire_%28Part-Timer%29_00.png', },
			],
		},
		{
			name: 'Suzumi',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/0/07/Suzumi.png/266px-Suzumi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/d/dc/Suzumi_00.png', },
			],
		},
		{
			name: 'Toki',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/e/e4/Toki.png/266px-Toki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/f/f2/Toki_00.png', },
				{ name: 'Bunny Girl', image: 'https://static.wikitide.net/bluearchivewiki/d/d2/Toki_%28Bunny_Girl%29_00.png', },
			],
		},
		{
			name: 'Tomoe',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/0/0a/Tomoe.png/266px-Tomoe.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/8c/Tomoe_00.png', },
				{ name: 'Qipao', image: 'https://static.wikitide.net/bluearchivewiki/7/73/Tomoe_%28Qipao%29_00.png', },
			],
		},
		{
			name: 'Tsubaki',
			age: 16,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/6/6a/Tsubaki.png/266px-Tsubaki.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a5/Tsubaki_00.png/1024px-Tsubaki_00.png', },
				{ name: 'Guide', image: 'https://static.wikitide.net/bluearchivewiki/3/32/Tsubaki_%28Guide%29_00.png', },
			],
		},
		{
			name: 'Tsukuyo',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/c/ce/Tsukuyo.png/266px-Tsukuyo.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/e/e7/Tsukuyo_00.png', },
			],
		},
		{
			name: 'Tsurugi',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/c/c1/Tsurugi.png/266px-Tsurugi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/2/29/Tsurugi_00.png/1024px-Tsurugi_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/0/00/Tsurugi_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Ui',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/1/18/Ui.png/266px-Ui.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/d/dc/Ui_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/d/d2/Ui_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Umika',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/e/e2/Umika.png/266px-Umika.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/8/82/Umika_00.png', },
			],
		},
		{
			name: 'Utaha',
			age: 17,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/3/37/Utaha.png/266px-Utaha.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/thumb/4/4d/Utaha_00.png/800px-Utaha_00.png', },
				{ name: 'Cheerleader', image: 'https://static.wikitide.net/bluearchivewiki/3/36/Utaha_%28Cheerleader%29_diorama_00.png', },
			],
		},
		{
			name: 'Wakamo',
			age: 18,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/a/a7/Wakamo.png/266px-Wakamo.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/a/ab/Wakamo_00.png', },
				{ name: 'Swimsuit', image: 'https://static.wikitide.net/bluearchivewiki/1/16/Wakamo_%28Swimsuit%29_diorama_00.png', },
			],
		},
		{
			name: 'Yoshimi',
			age: 15,
			thumbnail: 'https://static.wikitide.net/bluearchivewiki/thumb/c/c2/Yoshimi.png/266px-Yoshimi.png',
			variations: [
				{ name: 'Default', image: 'https://static.wikitide.net/bluearchivewiki/6/60/Yoshimi_00.png', },
				{ name: 'Band', image: 'https://static.wikitide.net/bluearchivewiki/8/80/Yoshimi_%28Band%29_00.png', },
			],
		},
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
	] as BlueArchiveCharacterModel[],
}

// Pre-process the template data to add IDs and sort items and export them
preProcessTemplateData(baTemplateData, false);
export default baTemplateData;