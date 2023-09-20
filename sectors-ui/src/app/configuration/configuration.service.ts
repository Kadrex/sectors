import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private backendUrl = 'http://localhost:8082/api';

  get BASE_URL() {
    return this.backendUrl;
  }
}
