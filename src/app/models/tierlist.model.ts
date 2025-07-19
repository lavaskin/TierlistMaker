import { TierlistItemModel } from "./tierlist-item.model";

export interface TierlistModel {
	templateId: number,
	name: string,
	items: TierlistItemModel[],
	// This shouldn't be modified by the user.
	defaultTiers?: TierlistTier[],

	// NotMapped
	/**
	 * The auto-generated ID of the tierlist when a user creates it.
	 * This is used to identify the tierlist in the database.
	 */
	userId?: number,
	/**
	 * The user modified tiers of the tierlist.
	 * This is used to store the current state of the tierlist.
	 */
	tiers?: TierlistTier[],
}

export interface TierlistTier {
	label: string,
	color: string,

	// NotMapped
	/**
	 * The items in this tier.
	 */
	items?: TierlistItemModel[],
}
