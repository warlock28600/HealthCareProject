import {AfterContentInit, AfterViewInit, Component, Injector, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from "../../base.component";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, Observable, shareReplay} from "rxjs";
import {MatSidenav} from "@angular/material/sidenav";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class

/
home / farhang / WebstormProjects / SamaOld;
extends
BaseComponent;
implements;
OnInit, AfterViewInit, AfterContentInit;
{

  Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

@ViewChild('sidenav')
  sidenav ? : MatSidenav;

  constructor(private
  BreakpointObserver, injector;
:
  Injector;
)
  {
    super(injector);
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  override loadOnline() {
    super.loadOnline();
  }
}
