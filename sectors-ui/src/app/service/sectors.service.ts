import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "../configuration/configuration.service";
import {Observable} from "rxjs";
import {Sector} from "../model/sector";

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

  private baseUrl = this.conf.BASE_URL + '/sectors';

  constructor(
    private http: HttpClient,
    private conf: ConfigurationService
  ) {
  }

  getMainSectors(): Observable<Sector[]> {
    const url = this.baseUrl + '/main';
    return this.http.get<Sector[]>(url);
  }

  getAllSectors(): Observable<Sector[]> {
    const url = this.baseUrl + '/all';
    return this.http.get<Sector[]>(url);
  }

  submitForm(form: any): Observable<string> {
    const url = this.baseUrl + '/submitForm';
    return this.http.post<string>(url, form);
  }

  delete(sector: Sector): Observable<any> {
    const url = this.baseUrl + '/' + sector.id;
    return this.http.delete<string>(url);
  }

  save(sector: Sector): Observable<string> {
    const url = this.baseUrl + '/';
    // @ts-ignore
    return this.http.post(url, sector, {responseType: 'text'});
  }
}
