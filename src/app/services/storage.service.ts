import { Injectable } from "@angular/core";
import { TierlistModel } from "@app/models/tierlist.model";
import { deepCopy } from "@app/utils";
import { Observable } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	private _storageKeyPrefix = 'user-tierlist-';
	private _defaultTiers = [
		{ label: 'S', color: '#ff0000' },
		{ label: 'A', color: '#f15b4c' },
		{ label: 'B', color: '#ef5b70' },
		{ label: 'C', color: '#d35d90' },
		{ label: 'D', color: '#9b6b9c' },
		{ label: 'F', color: '#c39ec9' },
	];

	/**
	 * Retrieves the tierlist for a specific user.
	 * @param tierlistId The tierlist ID to retrieve the tierlist for
	 * @returns An observable containing the tierlist
	 */
	public get(tierlistId: number): Observable<TierlistModel> {
		const tierlist = this._getFromLocalStorage(tierlistId);

		return new Observable<TierlistModel>((observer) => {
			if (!tierlist) {
				observer.error(new Error(`Tierlist with tierlistId ${tierlistId} not found`));
			} else {
				observer.next(tierlist);
			}
			observer.complete();
		});
	}

	/**
	 * Fetches all the available tierlists created by the user
	 * @returns An observable containing all tierlists found
	 */
	public getAll(): Observable<TierlistModel[]> {
		const tierlists: TierlistModel[] = [];
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (key && key.startsWith(this._storageKeyPrefix)) {
				const tierlistJson = localStorage.getItem(key);
				if (tierlistJson) {
					const tierlist = JSON.parse(tierlistJson) as TierlistModel;
					tierlists.push(tierlist);
				}
			}
		}

		// Reverse their order to show the most recent first
		tierlists.reverse();

		return new Observable<TierlistModel[]>((observer) => {
			observer.next(tierlists);
			observer.complete();
		});
	}

	/**
	 * Saves a given tierlist, either creating a new one or updating an existing one.
	 * @param tierlist The tierlist to save
	 * @returns The tierlist saved, with an attached tierlistId if necessary
	 */
	public save(tierlist: TierlistModel): Observable<TierlistModel> {
		let tierlistCopy = deepCopy(tierlist);

		// Initialize the tierlist if it doesn't have a tierlistId (aka hasn't been created yet)
		if (!tierlistCopy.tierlistId) {
			tierlistCopy = this._initializeNewTierlist(tierlist);
		}

		// Save the item to local storage under the user created id
		this._saveToLocalStorage(tierlistCopy);

		// Return the saved tierlist
		return new Observable<TierlistModel>((observer) => {
			observer.next(tierlistCopy);
			observer.complete();
		});
	}

	/**
	 * Deletes the tierlist for the specified tierlist ID.
	 * @param tierlistId The id of the tierlist to delete
	 * Deletes the tierlist for the specified tierlist ID.
	 * @returns An observable indicating the completion of the deletion
	 */
	public delete(tierlistId: number): Observable<void> {
		localStorage.removeItem(`${this._storageKeyPrefix}${tierlistId}`);

		return new Observable<void>((observer) => {
			observer.next();
			observer.complete();
		});
	}

	private _saveToLocalStorage(tierlist: TierlistModel): void {
		const tierlistJson = JSON.stringify(tierlist);
		localStorage.setItem(`${this._storageKeyPrefix}${tierlist.tierlistId}`, tierlistJson);
	}

	private _getFromLocalStorage(tierlistId: number): TierlistModel | null {
		const tierlistJson = localStorage.getItem(`${this._storageKeyPrefix}${tierlistId}`);
		if (!tierlistJson) {
			return null;
		}

		return JSON.parse(tierlistJson) as TierlistModel;
	}

	private _initializeNewTierlist(tierlist: TierlistModel): TierlistModel {
		// Copy the default tiers onto the user tiers, and init the tierlist items
		const tierlistCopy: TierlistModel = deepCopy(tierlist);
		if (!tierlistCopy.defaultTiers) {
			tierlistCopy.defaultTiers = this._defaultTiers;
		}

		// Add empty array for items and copy default tiers to user tiers for modification
		tierlistCopy.tiers = deepCopy(tierlistCopy.defaultTiers);
		tierlistCopy.tiers!.forEach((tier: any) => {
			tier.items = [];
		});

		// Add a new id for the tierlist if it doesn't exist
		tierlistCopy.tierlistId = Date.now(); // Ensure tierlistId is set
		return tierlistCopy;
	}
}