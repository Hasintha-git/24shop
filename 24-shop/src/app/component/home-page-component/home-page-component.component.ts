import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponentComponent } from '../../component/login-page-component/login-page-component.component'

@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page-component.component.html',
  styleUrls: ['./home-page-component.component.scss']
})
export class HomePageComponentComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    setTimeout(() => {
      this.openDialog()
    }, 10000);
  }

  image: string | undefined;
  luxury: string | undefined;

  ngOnInit(): void {
    this.luxury = "/cars/luxury-cars";
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginPageComponentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
