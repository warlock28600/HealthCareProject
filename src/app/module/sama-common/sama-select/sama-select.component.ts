import {Component, Injector, Input, OnChanges, OnInit} from '@angular/core';
import {ListResponse} from "../../../network/service/list.response";
import {SamaDropdownComponent} from "../sama-dropdown/sama-dropdown.component";

@Component({
  selector: 'app-sama-select',
  templateUrl: './sama-select.component.html',
  styleUrls: ['./sama-select.component.scss']
})
export class SamaSelectComponent extends SamaDropdownComponent implements OnInit, OnChanges {

  @Input()
  protocolMethod = 'GET';
  @Input()
  orderByField?: string;
  @Input()
  orderByType: string = 'DESC';

  constructor(injector: Injector) {
    super(injector);
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  ngOnChanges(changes: any) {
    if (changes.method && !changes.method.firstChange) {
      this.selectedOptions = [];
      this.options = [];
    }
    if (changes.selectedOptions) {
      this.refreshCustom();
    }
    if (this.autoSelectLatest) {
      this.onQueryChanged();
    }
  }

  override loadOnline() {
    super.loadOnline();
  }

  onToggle(isListHide: boolean) {
    if (!isListHide && this.options.length === 0) {
      this.onQueryChanged();
    }
  }

  onQueryChanged(event?: any) {
    if (this.protocolMethod === 'GET') {
      let query: any = [];
      for (let i = 0; i < this.searchOnKey!.split(',').length; i++) {
        query.push({
          f: this.searchOnKey!.split(',')[i],
          c: 'LK',
          v: '%' + (event ? event : '') + '%'
        });
      }
      this.serviceApi.getSelect(this.microservice!, this.version!, this.controller!, this.method!, {
        t: 'OR',
        d: query
      }).subscribe((res: ListResponse<any>) => {
        this.options = res.data ?? [];
        this.refreshCustom();
        if (this.autoSelectLatest) {
          if (this.options.length > 0) {
            this.selectedOptions = [this.options[0]];
            this.onSelected.emit(this.options[0]);
          }
        }
      });
    } else if (this.protocolMethod === 'POST') {
      let query: any = [];
      for (let i = 0; i < this.searchOnKey!.split(',').length; i++) {
        query.push({
          Field: this.searchOnKey!.split(',')[i],
          Type: 'LIKE',
          Value: '%' + (event ? event : '') + '%'
        });
      }
      this.serviceApi.postSelect(this.microservice!, this.version!, this.controller!, this.method!, {
        Filter: {
          Type: 'OR',
          Values: query
        },
        Order: {
          Field: this.orderByField,
          Type: this.orderByType
        }
      }).subscribe((res: ListResponse<any>) => {
        this.options = res.data ?? [];
        this.refreshCustom();
        if (this.autoSelectLatest) {
          if (this.options.length > 0) {
            this.selectedOptions = [this.options[0]];
            this.onSelected.emit(this.options[0]);
          }
        }
      });
    }
  }

  onChange(event: any) {
    if (event === undefined || !(event instanceof Event)) {
      this.onSelected.emit(event);
      this.valueChange.emit(this.value);
    }
  }
}
