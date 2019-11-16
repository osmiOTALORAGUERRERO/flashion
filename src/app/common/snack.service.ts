import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  // tslint:disable-next-line: new-parens
  private snackBarOptions: MatSnackBarConfig = new MatSnackBarConfig;
  constructor(
    private snackBar: MatSnackBar
  ) { }
  launch(message: string, action: string, duration: number) {
    this.snackBarOptions.duration = duration;
    this.snackBar.open(message, action, this.snackBarOptions);
  }
}
