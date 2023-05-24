import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StringUtil} from "../../util/string.util";
import {isArray, isEqual} from "lodash";

@Component({
  selector: 'app-sama-table',
  templateUrl: './sama-table.component.html',
  styleUrls: ['./sama-table.component.scss']
})
export class SamaTableComponent {

  selectedRows: any[] = [];
  showFirstLastButtons = true;

  @Input()
  tableProperties = {
    offset: 0,
    limit: 7,
    pageLength: 0,
    limitOptions: [7, 14, 28],
    onSortChanged: (event: any) => {
    },
    pageChanged: (event: any) => {
    }
  };
  @Input()
  isMultiSelectable = false;
  @Input()
  isSelectable = false;
  @Input()
  displayColumns: string[] = [];
  @Input()
  displayColumnTypes: string[] = [];
  @Input()
  dataSource: any[] = [];
  @Input()
  displayDataSources: string[] = [];
  @Input()
  hasPagination = true;

  @Output()
  onSortChanged: EventEmitter<any> = new EventEmitter();
  @Output()
  onRowSelected: EventEmitter<any> = new EventEmitter();
  @Output()
  onRowsSelected: EventEmitter<any[]> = new EventEmitter();

  getValue(columnIndex: number, rowIndex: number, element: any, fieldName: string): any {
    let totalValue = '';
    for (let i = 0; i < fieldName.split('+').length; i++) {
      let value = element;
      for (let j = 0; j < fieldName.split('+')[i].split('.').length; j++) {
        if (isArray(value)) {
          if (value && value.length > 0) {
            for (let k = 0; k < value.length; k++) {
              let temp: any = value[i];
              value = temp[fieldName.split('+')[i].split('.')[j]];
            }
          }
        } else {
          if (value) {
            value = value[fieldName.split('+')[i].split('.')[j]];
          }
        }
      }
      if (value) {
        totalValue += (' ' + value);
      }
    }
    switch (this.displayColumnTypes[columnIndex]) {
      case 'string':
        return totalValue;
      case 'boolean':
        return totalValue ? 'بلی' : 'خیر';
      case 'number':
        return totalValue;
      case 'date':
        return totalValue;
      case 'icon':
        return totalValue;
      case 'row_number':
        return '' + ((this.tableProperties!.offset * this.tableProperties!.limit) + (rowIndex + 1));
      default:
        return totalValue;
    }
  }

  integerAsCurrency(integer?: number) {
    return StringUtil.integerAsCurrency(integer);
  }

  onRowClicked(row: any) {
    if (this.isSelectable) {
      if (!this.isMultiSelectable) {
        this.selectedRows = [];
      }
      let index = -1;
      for (let i = 0; i < this.selectedRows.length; i++) {
        if (isEqual(this.selectedRows[i], row)) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        this.selectedRows.splice(index, 1);
      } else {
        this.selectedRows.push(row);
      }
      if (this.isMultiSelectable) {
        this.onRowsSelected.emit(this.selectedRows);
      } else {
        if (this.selectedRows.length === 0) {
          this.onRowSelected.emit(undefined);
        } else {
          this.onRowSelected.emit(row);
        }
      }
    }
  }

  isIncluded(object: any): boolean {
    for (let i = 0; i < this.selectedRows.length; i++) {
      if (isEqual(this.selectedRows[i], object)) {
        return true;
      }
    }
    return false;
  }

  tableSortChange(event: any) {
    event.active = this.displayDataSources[this.displayColumns.indexOf(event.active)];
    if (this.tableProperties) {
      this.tableProperties.onSortChanged(event);
    } else {
      this.onSortChanged.emit(event);
    }
  }
}
