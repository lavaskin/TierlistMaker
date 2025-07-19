import { Injectable } from "@angular/core";
import { TierlistModel } from "@app/models/tierlist.model";
import { Observable } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	private _storageKeyPrefix = 'user-tierlist-';

	/**
	 * Retrieves the tierlist for a specific user.
	 * @param userId The user ID to retrieve the tierlist for
	 * @returns An observable containing the tierlist
	 */
	public get(userId: number): Observable<TierlistModel> {
		const tierlist = this._getFromLocalStorage(userId);

		return new Observable<TierlistModel>((observer) => {
			if (!tierlist) {
				observer.error(new Error(`Tierlist with userId ${userId} not found`));
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
	 * @returns The tierlist saved, with an attached userId if necessary
	 */
	public save(tierlist: TierlistModel): Observable<TierlistModel> {
		// Verify if the tierlist already has a userId
		if (!tierlist.userId) {
			// If not, create a new userId
			tierlist.userId = Date.now();
		}

		// Save the item to local storage under the user created id
		this._saveToLocalStorage(tierlist);

		// Return the saved tierlist
		return new Observable<TierlistModel>((observer) => {
			observer.next(tierlist);
			observer.complete();
		});
	}

	/**
	 * Deletes the tierlist for the specified user ID.
	 * @param userId The id of the tierlist to delete
	 * Deletes the tierlist for the specified user ID.
	 * @returns An observable indicating the completion of the deletion
	 */
	public delete(userId: number): Observable<void> {
		localStorage.removeItem(`${this._storageKeyPrefix}${userId}`);

		return new Observable<void>((observer) => {
			observer.next();
			observer.complete();
		});
	}

	private _saveToLocalStorage(tierlist: TierlistModel): void {
		const tierlistJson = JSON.stringify(tierlist);
		localStorage.setItem(`${this._storageKeyPrefix}${tierlist.userId}`, tierlistJson);
	}

	private _getFromLocalStorage(userId: number): TierlistModel | null {
		const tierlistJson = localStorage.getItem(`${this._storageKeyPrefix}${userId}`);
		if (!tierlistJson) {
			return null;
		}

		return JSON.parse(tierlistJson) as TierlistModel;
	}
}