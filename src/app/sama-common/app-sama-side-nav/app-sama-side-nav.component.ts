import {Component} from '@angular/core';

@Component({
  selector: 'app-app-sama-side-nav',
  templateUrl: './app-sama-side-nav.component.html',
  styleUrls: ['./app-sama-side-nav.component.scss']
})
export class AppSamaSideNavComponent {
  // private sidenav: MatSidenav
  isShowing?: boolean;
  sideNavButton?: boolean;

  constructor() {

  }


  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  ngOnInit() {

  }


  // openAndClose(){
  //   if(this.sideNavEvent=true){
  //     this.sidenav.open()
  //   }else {
  //     this.sidenav.close()
  //   }
  // }


}
