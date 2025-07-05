import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiserviceService {

  constructor() { }

  getMessage():string{
return "Hi I am DI in angular"
  }
}
