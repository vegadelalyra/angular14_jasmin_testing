import { TestBed } from '@angular/core/testing';
import { SharedService } from '../shared-service/shared.service';
import { CalcService } from './calc.service';

describe('CalcService', () => {
  let shared: SharedService;
  let calc: CalcService;

  beforeEach(() => {
    console.log('Before each is called');
    shared = jasmine.createSpyObj('SharedService', ['mySharedFunction']);
    TestBed.configureTestingModule({
      providers: [
        CalcService,
        {
          provide: SharedService,
          useValue: shared,
        },
      ],
    });
    shared = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService);
  });

  it('should multiply two numbers', () => {
    const result = calc.multiply(3, 5);
    expect(result).toBe(15);
  });

  it('should add two numbers', () => {
    const result = calc.add(3, 5);
    expect(result).toBe(8);
  });

  // it('should call the mySharedFunction func', () => {
  //   const shared = jasmine.createSpyObj('SharedService', ['mySharedFunction']);
  //   const calc = new CalcService(shared);
  //   // spyOn(shared, 'mySharedFunction').and.callThrough();

  //   const result = calc.multiply(3, 5);

  //   // expect(shared.mySharedFunction).toHaveBeenCalled();
  //   expect(result).toBe(15);
  // });
});
