import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpService) { }

  async login(credentials: { email: string; password: string }): Promise<any> {
    try {
      const res: any = await this.httpService.loginSignupCall('Users/Login', credentials) || {};
      console.log(res);
      return res;
    } catch (error) {
      return error || {};
    }
  }

  async signup(data: { firstname: string, lastname: string, email: string; password: string }): Promise<any> {
    try {
      return this.httpService.loginSignupCall('Users/Register', data);
    } catch (error) {
      return error;
    }
  }
}
