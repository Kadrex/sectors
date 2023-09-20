import {Component, Input, OnInit} from '@angular/core';
import {Sector, SectorsFormGroup} from '../../model/sector';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-multi-select-multi-level-options',
  templateUrl: './multi-select-multi-level-options.component.html',
  styleUrls: ['./multi-select-multi-level-options.component.css']
})
export class MultiSelectMultiLevelOptionsComponent implements OnInit {


  @Input() sectors: Sector[] = [];
  @Input() sectorsForm: FormGroup<SectorsFormGroup> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  select(sector: Sector) {
    const selected = this.sectorsForm?.value?.sectors;
    if (selected?.includes(sector)) {
      const index = selected?.indexOf(sector);
      selected?.splice(index, 1)
    } else {
      selected?.push(sector);
    }
    this.sectorsForm?.patchValue({sectors: selected});
  }

  selected(sector: Sector) {
    return this.sectorsForm?.value?.sectors?.includes(sector);
  }

  clickCheckbox(event: Event) {
    event.preventDefault();
  }
}
