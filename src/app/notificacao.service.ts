import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private _snackBar: MatSnackBar) { }

  notificar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }
}
