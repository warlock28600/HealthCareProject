import {Component, ElementRef, EventEmitter, Injector, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BaseComponent} from "../../base.component";
import {StringUtil} from "../../../util/string.util";

@Component({
  selector: 'app-sama-dropdown',
  templateUrl: './sama-dropdown.component.html',
  styleUrls: ['./sama-dropdown.component.scss']
})
export class SamaDropdownComponent extends BaseComponent implements OnInit {

  @ViewChild('search')
  searchElement?: ElementRef;

  @Input()
  value?: any;
  @Input()
  title?: string;
  @Input()
  required?: boolean;
  @Input()
  microservice?: string;
  @Input()
  version?: string;
  @Input()
  controller?: string;
  @Input()
  method?: string;
  @Input()
  displayKey?: string;
  @Input()
  searchOnKey?: string;
  @Input()
  options: any = [];
  @Input()
  selectedOptions: any = [];
  @Input()
  fieldName?: string;

  @Input()
  autoSelectLatest?: boolean = false;
  @Input()
  disable: boolean = false;
  @Input()
  isSearchable?: boolean = true;
  @Input()
  isMultiple?: boolean = false;
  @Input()
  highlightBasedOn?: string;

  @Output()
  onSelected: EventEmitter<any> = new EventEmitter();
  @Output()
  searchChange: EventEmitter<string | null> = new EventEmitter();
  @Output()
  toggleChange: EventEmitter<boolean> = new EventEmitter();
  @Output()
  valueChange: EventEmitter<any> = new EventEmitter();

  searchInput = '';
  isListHide: boolean = true;

  constructor(injector: Injector) {
    super(injector);
  }

  override ngOnInit() {
    super.ngOnInit();
    let keys: any = [];
    if (this.displayKey) {
      for (let i = 0; i < this.displayKey!.split(',').length; i++) {
        keys.push(this.displayKey!.split(',')[i]);
      }
    }
    this.refreshCustom();
  }

  refreshCustom() {
    let keys: any = [];
    if (this.displayKey) {
      for (let i = 0; i < this.displayKey!.split(',').length; i++) {
        keys.push(this.displayKey!.split(',')[i]);
      }
    }
    for (let i = 0; i < this.options.length; i++) {
      this.options[i].Custom = '';
      for (let j = 0; j < keys.length; j++) {
        if (keys[j].includes('.')) {
          let temp = this.options[i][keys[j].split('.')[0]];
          for (let k = 1; k < keys[j].split('.').length; k++) {
            temp = temp[keys[j].split('.')[k]];
          }
          this.options[i].Custom += j === 0 ? (temp + ' ') : ('(' + temp + ') ');
        } else {
          this.options[i].Custom += j === 0 ? (this.options[i][keys[j]] + ' ') : ('(' + this.options[i][keys[j]] + ') ');
        }
      }
    }
    if (this.selectedOptions) {
      this.selectedOptions = this.selectedOptions.filter((selectedOption: any) => {
        return selectedOption;
      });
      for (let i = 0; i < this.selectedOptions.length; i++) {
        if (this.selectedOptions[i]) {
          this.selectedOptions[i].Custom = '';
          for (let j = 0; j < keys.length; j++) {
            if (this.selectedOptions[i][keys[j]]) {
              this.selectedOptions[i].Custom += j === 0 ? (this.selectedOptions[i][keys[j]] + ' ') : ('(' + this.selectedOptions[i][keys[j]] + ') ');
            }
          }
        }
      }
      setTimeout(() => {
        if (this.fieldName) {
          if (this.isMultiple) {
            this.value = this.selectedOptions.map((selectedOption: any) => {
              return selectedOption[this.fieldName!];
            });
            this.valueChange.emit(this.value);
          } else {
            if (this.selectedOptions.length > 0) {
              this.value = this.selectedOptions[0][this.fieldName];
              this.valueChange.emit(this.value);
            }
          }
        }
      }, 200);
    } else {
      this.selectedOptions = [];
    }
  }

  onQuerySubmited(event?: any) {
    if (event) {
      this.searchChange.emit(StringUtil.reformatString(event.target.value));
    }
  }

  toggle() {
    if (!this.disable) {
      setTimeout(() => {
        if (this.isSearchable) {
          this.searchElement!.nativeElement.focus();
        }
      }, 0);
      if (!this.disable) {
        this.isListHide = !this.isListHide;
      }
      this.toggleChange.emit(this.isListHide);
    }
  }

  onItemSelected(index: number) {
    if (this.isMultiple) {
      let indexOfSelected = this.selectedOptions.indexOf(this.options[index]);
      if (indexOfSelected === -1) {
        this.selectedOptions.push(this.options[index]);
      } else {
        this.selectedOptions.splice(indexOfSelected, 1);
      }
      if (this.fieldName) {
        this.value = this.selectedOptions.map((selectedOption: any) => {
          return selectedOption[this.fieldName!];
        });
        this.valueChange.emit(this.value);
      }
      this.onSelected.emit(this.selectedOptions);
    } else {
      this.selectedOptions = [this.options[index]];
      this.toggle();
      if (this.fieldName) {
        this.value = this.selectedOptions[0][this.fieldName];
        this.valueChange.emit(this.value);
      }
      this.onSelected.emit(this.selectedOptions[0]);
    }
  }

  getSelectedLabels(): string {
    return this.selectedOptions.map((option: any) => {
      return option && option.Custom;
    });
  }

  onSearchIconClicked() {
    this.searchInput = '';
    this.searchChange.emit('');
  }

  onSelectedItemRemoveClicked(index: number) {
    if (this.isMultiple) {
      this.selectedOptions.splice(index, 1);
      if (this.fieldName) {
        this.value = this.selectedOptions.map((selectedOption: any) => {
          return selectedOption[this.fieldName!];
        });
        this.valueChange.emit(this.value);
      }
      this.onSelected.emit(this.selectedOptions);
    } else {
      this.selectedOptions.splice(index, 1);
      this.toggle();
      if (this.fieldName) {
        this.value = undefined;
        this.valueChange.emit(this.value);
      }
      this.onSelected.emit();
    }
  }

  hasSelected(option: any): boolean {
    if (this.highlightBasedOn) {
      return this.selectedOptions.some((temp: any) => {
        return temp[this.highlightBasedOn!] === option[this.highlightBasedOn!];
      });
    } else {
      let tempOption = {...option};
      delete tempOption.RowNum;
      delete tempOption.Custom;
      let tempOptionJson = JSON.stringify(tempOption);
      for (let i = 0; i < this.selectedOptions.length; i++) {
        let tempSelectedOption = {...this.selectedOptions[i]};
        delete tempSelectedOption.RowNum;
        delete tempSelectedOption.Custom;
        let tempSelectedOptionJson = JSON.stringify(tempSelectedOption);
        if (tempSelectedOptionJson === tempOptionJson) {
          return true;
        }
      }
    }
    return false;
  }

  onClickedOutside() {
    this.isListHide = true;
  }
}
