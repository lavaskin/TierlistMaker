import { TierlistModel, TierlistTier } from "@app/models/tierlist.model";
import baTierList from "./ba-tierlist.data";

export const TierlistsData: TierlistModel[] = [
	baTierList,
];

export const defaultTiers: TierlistTier[] = [
	{ label: 'S', color: '#ff0000' },
	{ label: 'A', color: '#ff7f00' },
	{ label: 'B', color: '#ef5b70' },
	{ label: 'C', color: '#00ff00' },
	{ label: 'D', color: '#f15b4c' },
	{ label: 'F', color: '#e93f33' },
];
