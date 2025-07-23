import { TemplateIdEnum } from "@app/models/enums/template-ids.enum";
import { TierlistModel } from "@app/models/tierlist.model";

// Info from: https://zenless-zone-zero.fandom.com/wiki/Agent#Playable_Agents

const zzzTemplateData: TierlistModel = {
	templateId: TemplateIdEnum.ZenlessZoneZero,
	name: "Zenless Zone Zero",
	items: [
		{
			name: 'Alice Thymefield',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7e/Agent_Alice_Thymefield_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Alexandrina Sebastiane',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a8/Agent_Alexandrina_Sebastiane_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Anby Demara',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b1/Agent_Anby_Demara_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Anton Ivanov',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/1/13/Agent_Anton_Ivanov_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Asaba Harumasa',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fe/Agent_Asaba_Harumasa_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Astra Yao',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b8/Agent_Astra_Yao_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Belle',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/e/ee/Agent_Belle_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Ben Bigger',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/b/ba/Agent_Ben_Bigger_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Billy Kid',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/9/99/Agent_Billy_Kid_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Burnice White',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f9/Agent_Burnice_White_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Caesar King',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/a/af/Agent_Caesar_King_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Corin Wickes',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e4/Agent_Corin_Wickes_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Ellen Joe',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/e/ed/Agent_Ellen_Joe_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},

		// ...

		{
			name: 'Lycaon',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2f/Agent_Von_Lycaon_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Yixuan',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f7/Agent_Yixuan_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Zhu Yuan',
			thumbnail: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fb/Agent_Zhu_Yuan_Icon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},

		/*
		{
			name: '',
			thumbnail: '',
			variations: [
				{ name: 'Default', image: '', },
			],
		},
		*/
	],
}

// Add an id to all characters
zzzTemplateData.items.forEach((item, index) => {
	item.id = index + 1; // Assigning a unique id starting from 1
});	

// Sort the characters by name
zzzTemplateData.items.sort((a, b) => a.name.localeCompare(b.name));

export default zzzTemplateData;