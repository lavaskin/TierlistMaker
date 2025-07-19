import { inject, Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
	providedIn: 'root'
})
export class AlertService {
	private _toasts = inject(MessageService);

	public showSuccess(body: string, header: string = 'Success'): void {
		this._showToast('success', header, body);
	}

	public showError(body: string, header: string = 'Error'): void {
		this._showToast('error', header, body);
	}

	public showInfo(body: string, header: string = 'Info'): void {
		this._showToast('info', header, body);
	}

	private _showToast(severity: string, summary: string, detail: string): void {
		this._toasts.add({ severity, summary, detail });
	}
}