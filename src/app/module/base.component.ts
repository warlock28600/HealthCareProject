import {Component, Injector} from "@angular/core";
import {RouteUtil} from "../util/route.util";
import {ServiceApi} from "../network/service/service.api";
import {ActivatedRoute, Router} from "@angular/router";
import {NetworkUtil} from "../util/network.util";
import {SamaRequestType} from "../enums/sama.request.type";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  template: ''
})
export abstract class BaseComponent {

  Route = RouteUtil;

  public serviceApi: ServiceApi;
  public router: Router;
  public activatedRoute: ActivatedRoute;
  public matSnackBar: MatSnackBar;

  tableProperties: any = {
    offset: 0,
    limit: 7,
    order: undefined,
    requestType: SamaRequestType.PAGINATE,
    pageLength: 0,
    limitOptions: [7, 14, 28],
    onSortChanged: (event: any) => {
      this.onSortChanged(event);
    },
    pageChanged: (event: any) => {
      this.pageChanged(event);
    }
  };

  protected constructor(injector: Injector) {
    this.serviceApi = injector.get(ServiceApi);
    this.router = injector.get(Router);
    this.matSnackBar = injector.get(MatSnackBar);
    this.activatedRoute = injector.get(ActivatedRoute);
  }

  ngOnInit(): void {
    this.executeLoader();
  }

  ngAfterViewInit(): void {
  }


  ngAfterContentInit(): void {
  }

  pageChanged(event: any) {
    this.tableProperties.limit = event.pageSize;
  }

  public executeLoader(): void {

    if (NetworkUtil.isInternetConnected()) {
      this.loadOnline();
    } else {
      this.loadOffline();
    }
  }

  onSortChanged(event: any) {
    if (event.direction !== '') {
      this.tableProperties.order = {
        Field: event.active,
        Type: event.direction.toUpperCase()
      };
    } else {
      this.tableProperties.order = undefined;
    }
    this.tableProperties.offset = 0;
  }

  public loadOnline(): void {
  }

  public loadOffline(): void {
  }
}
