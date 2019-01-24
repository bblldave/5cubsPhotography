import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(formData: any) {
    console.log(formData);
    const body = {
      service_id: environment.emailJs.service_id,
      template_id: environment.emailJs.template_id,
      user_id: environment.emailJs.user_id,
      template_params: formData
    };

    return this.http.post(environment.emailJs.resource_url, body, { responseType: 'text'});
  }
}
