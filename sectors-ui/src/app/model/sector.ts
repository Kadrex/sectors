import {FormControl} from "@angular/forms";

export interface Sector {
  id: number,
  name: string,
  children: Sector[],
  parent: Sector
}

export interface SectorsFormGroup {
  id: FormControl<number | null>,
  name: FormControl<string | null>,
  sectors: FormControl<Sector[] | null>,
  agreeToTerms: FormControl<boolean | null>
}


export interface SectorsForm {
  id: number,
  name: string,
  sectors: Sector[],
  agreeToTerms: boolean
}
