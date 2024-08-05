import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  mySharedFunction() {
    console.log('My shared function is being called');
  }

  myMine() {}

  constructor() {
    console.log('...RUNNING SERVICE CONSTRUCTOR LOGIC');
  }
}
