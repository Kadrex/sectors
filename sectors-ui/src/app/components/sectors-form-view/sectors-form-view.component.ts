import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Sector, SectorsForm, SectorsFormGroup} from '../../model/sector';
import {SectorsService} from '../../service/sectors.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sectors-form-view',
  templateUrl: './sectors-form-view.component.html',
  styleUrls: ['./sectors-form-view.component.css']
})
export class SectorsFormViewComponent implements OnInit {

  sectors: Sector[] = [];

  sectorsForm: FormGroup<SectorsFormGroup> = this.formBuilder.group({
    id: this.formBuilder.control<number | null>(null),
    name: this.formBuilder.control<string>('', [Validators.required, Validators.maxLength(255), Validators.minLength(2)]),
    sectors: this.formBuilder.control<Sector[]>([], Validators.required),
    agreeToTerms: this.formBuilder.control<boolean>(false, Validators.required)
  });

  isViewReady: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private sectorsService: SectorsService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getSectors();
  }

  private getSectors() {
    this.sectorsService.getMainSectors().subscribe((sectors: Sector[]) => {
      this.sectors = sectors;
      this.prefillFromExisting();
      this.isViewReady = true;
    }, error => {
      this.isViewReady = true;
      this.snackBar.open('Failed fetching sectors, please try again.', 'OK');
    });
  }

  prefillFromExisting() {
    if (localStorage.getItem('sectorsForm')) {
      // @ts-ignore
      const existing: SectorsForm = JSON.parse(localStorage.getItem('sectorsForm'));
      const sectorsIds: number[] = existing.sectors.map(sector => sector.id);
      const allSectors: Sector[] = [];
      this.findChildren(this.sectors, allSectors);
      this.sectorsForm.patchValue({
        id: existing.id,
        name: existing.name,
        sectors: allSectors.filter(sector => sectorsIds.includes(sector.id)),
        agreeToTerms: existing.agreeToTerms
      });
    }
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

  save() {
    if (this.sectorsForm.invalid) {
      return;
    }
    this.sectorsService.submitForm(this.sectorsForm.value).subscribe(result => {
      localStorage.setItem('sectorsForm', JSON.stringify(result));
      this.showSnackbar('Form successfully submitted!');
      this.prefillFromExisting();
    }, error => {
      this.showSnackbar('Submitting form failed: ' + error);
    });
  }

  hasError(field: string) {
    const errors = this.sectorsForm.controls.name.errors;
    return !errors ? false : errors[field];
  }

  private showSnackbar(message: string) {
    this.snackBar.open(message, 'OK', {duration: 2000});
  }
}
