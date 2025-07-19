import { TierlistModel, TierlistTier } from "@app/models/tierlist.model";
import baTierList from "./ba-tierlist.data";

export const TierlistsData: TierlistModel[] = [
	baTierList,
];

export const defaultTiers: TierlistTier[] = [
	{ label: 'S', color: '#ff0000' },
	{ label: 'A', color: '#f15b4c' },
	{ label: 'B', color: '#ef5b70' },
	{ label: 'C', color: '#d35d90' },
	{ label: 'D', color: '#9b6b9c' },
	{ label: 'F', color: '#c39ec9' },
];
