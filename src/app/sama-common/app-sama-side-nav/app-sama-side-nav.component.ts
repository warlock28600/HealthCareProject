import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-app-sama-side-nav',
  templateUrl: './app-sama-side-nav.component.html',
  styleUrls: ['./app-sama-side-nav.component.scss']
})
export class AppSamaSideNavComponent {
  // private sidenav: MatSidenav
  isShowing?: boolean;
  @Input() sideNavEvent?: any = undefined


  constructor() {

  }


  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  ngOnInit() {
    console.log(this.sideNavEvent)
  }


  // openAndClose(){
  //   if(this.sideNavEvent=true){
  //     this.sidenav.open()
  //   }else {
  //     this.sidenav.close()
  //   }
  // }

}
