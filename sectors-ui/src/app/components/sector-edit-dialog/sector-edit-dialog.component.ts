import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Sector} from '../../model/sector';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-sector-edit-dialog',
  templateUrl: './sector-edit-dialog.component.html',
  styleUrls: ['./sector-edit-dialog.component.css']
})
export class SectorEditDialogComponent implements OnInit {

  @ViewChild('parentSelection') parentSelection: MatSelect | undefined;

  sectorForm: FormGroup = this.formBuilder.group({
    id: this.formBuilder.control<number | null>(null),
    name: this.formBuilder.control<string>('', [Validators.required, Validators.maxLength(255), Validators.minLength(2)]),
    parent: this.formBuilder.control<Sector | null>(null),
  })

  sectors: Sector[] = [];
  currentSector: Sector | undefined = undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: {sector: Sector, sectors: Sector[]},
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SectorEditDialogComponent>
  ) {
    this.currentSector = data.sector;
    this.setPossibleParentSectors(data.sectors);
    this.initializeForm(data.sector);
  }

  ngOnInit(): void {
  }

  get isNewSector() {
    return this.currentSector === null;
  }

  private setPossibleParentSectors(allSectors: Sector[]) {
    const currentSectorChildren: Sector[] = [];
    this.findChildren(this.currentSector?.children ?? [], currentSectorChildren);
    this.sectors = allSectors.filter(s => s.id != this.currentSector?.id && !currentSectorChildren.includes(s));
  }

  private findChildren(sectors: Sector[], children: Sector[]) {
    for (const child of sectors) {
      if (child.children?.length > 0) {
        this.findChildren(child.children, children);
      } else {
        children.push(child);
      }
    }
  }

  private initializeForm(sector: Sector) {
    if (sector) {
      this.sectorForm.patchValue({
        id: sector.id,
        name: sector.name,
        parent: this.sectors.find(s => s.id === sector.parent?.id)
      })
    }
  }

  save() {
    let dialogResult = null;
    if (!this.sectorForm.invalid) {
      dialogResult = this.sectorForm.value;
    }
    this.dialogRef.close(dialogResult);
  }

  hasError(field: string) {
    const errors = this.sectorForm.controls['name'].errors;
    return !errors ? false : errors[field];
  }

}
