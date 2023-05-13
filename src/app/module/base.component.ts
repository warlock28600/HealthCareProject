import {Component, Injector} from "@angular/core";
import {RouteUtil} from "../util/route.util";
import {ServiceApi} from "../network/service/service.api";
import {ActivatedRoute, Router} from "@angular/router";
import {NetworkUtil} from "../util/network.util";

@Component({
  template: ''
})
export abstract class BaseComponent {

  Route = RouteUtil;

  public serviceApi: ServiceApi;
  public router: Router;
  public activatedRoute: ActivatedRoute;

  protected constructor(injector: Injector) {
    this.serviceApi = injector.get(ServiceApi);
    this.router = injector.get(Router);
    this.activatedRoute = injector.get(ActivatedRoute);
  }

  ngOnInit(): void {
    this.executeLoader();
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
  }

  public executeLoader(): void {

    if (NetworkUtil.isInternetConnected()) {
      this.loadOnline();
    } else {
      this.loadOffline();
    }
  }

  public loadOnline(): void {
  }

  public loadOffline(): void {
  }
}
