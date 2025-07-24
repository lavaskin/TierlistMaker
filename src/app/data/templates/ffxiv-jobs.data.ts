import { TemplateIdEnum } from "@app/models/enums/template-ids.enum";
import { TierlistModel } from "@app/models/tierlist.model"
import { preProcessTemplateData } from "@app/utils";

const ffxivJobsTemplateData: TierlistModel = {
	templateId: TemplateIdEnum.FF14Jobs,
	name: "FFXIV Jobs",
	items: [
		// Healers
		{
			name: 'White Mage (WHM)',
			thumbnail: '/tierlists/ffxiv-jobs/WhiteMage.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Scholar (SCH)',
			thumbnail: '/tierlists/ffxiv-jobs/Scholar.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Astrologian (AST)',
			thumbnail: '/tierlists/ffxiv-jobs/Astrologian.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Sage (SGE)',
			thumbnail: '/tierlists/ffxiv-jobs/Sage.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},

		// Tanks
		{
			name: 'Warrior (WAR)',
			thumbnail: '/tierlists/ffxiv-jobs/Warrior.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Paladin (PLD)',
			thumbnail: '/tierlists/ffxiv-jobs/Paladin.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Dark Knight (DRK)',
			thumbnail: '/tierlists/ffxiv-jobs/DarkKnight.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Gunbreaker (GNB)',
			thumbnail: '/tierlists/ffxiv-jobs/Gunbreaker.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},

		// Melee DPS
		{
			name: 'Dragoon (DRG)',
			thumbnail: '/tierlists/ffxiv-jobs/Dragoon.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Monk (MNK)',
			thumbnail: '/tierlists/ffxiv-jobs/Monk.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Ninja (NIN)',
			thumbnail: '/tierlists/ffxiv-jobs/Ninja.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Samurai (SAM)',
			thumbnail: '/tierlists/ffxiv-jobs/Samurai.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Reaper (RPR)',
			thumbnail: '/tierlists/ffxiv-jobs/Reaper.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Viper (VPR)',
			thumbnail: '/tierlists/ffxiv-jobs/Viper.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},

		// Ranged Magic DPS
		{
			name: 'Black Mage (BLM)',
			thumbnail: '/tierlists/ffxiv-jobs/BlackMage.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Summoner (SMN)',
			thumbnail: '/tierlists/ffxiv-jobs/Summoner.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Red Mage (RDM)',
			thumbnail: '/tierlists/ffxiv-jobs/RedMage.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Pictomancer (PCT)',
			thumbnail: '/tierlists/ffxiv-jobs/Pictomancer.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},

		// Ranged Physical DPS
		{
			name: 'Bard (BRD)',
			thumbnail: '/tierlists/ffxiv-jobs/Bard.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Machinist (MCH)',
			thumbnail: '/tierlists/ffxiv-jobs/Machinist.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		{
			name: 'Dancer (DNC)',
			thumbnail: '/tierlists/ffxiv-jobs/Dancer.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},

		// Limited Jobs
		{
			name: 'Blue Mage (BLU)',
			thumbnail: '/tierlists/ffxiv-jobs/BlueMage.png',
			variations: [
				// { name: 'Default', image: '', },
			],
		},

		/*
		{
			name: '',
			thumbnail: '',
			variations: [
				// { name: 'Default', image: '', },
			],
		},
		*/
	],
};

// Pre-process the template data to add IDs and sort items and export them
preProcessTemplateData(ffxivJobsTemplateData, false);
export default ffxivJobsTemplateData;