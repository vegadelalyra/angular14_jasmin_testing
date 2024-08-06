import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  mySharedFunction() {}

  constructor() {
    console.log('...RUNNING SERVICE CONSTRUCTOR LOGIC');
  }
}
