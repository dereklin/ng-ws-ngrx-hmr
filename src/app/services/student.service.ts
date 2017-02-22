import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as faker from 'faker';

@Injectable()
export class StudentService {

  public getStudents(): Observable<any[]> {
    let data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        name: faker.name.findName(),
        account: faker.finance.account(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        email: faker.internet.email()
        });
    }

    return Observable.create((observer) => {
      console.log('student service mimicing http call');
      observer.next(data);
    });
  }

}
