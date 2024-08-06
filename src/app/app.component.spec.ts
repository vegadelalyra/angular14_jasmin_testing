import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  flushMicrotasks,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { delay, of } from 'rxjs';
import { GradePipe } from './pipes/grade-pipe/grade.pipe';
import { GradeDirective } from './directives/grade-directive/grade.directive';
import { UnlessDirective } from './directives/unless-directive/unless.directive';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, GradePipe, GradeDirective, UnlessDirective],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        el = fixture.debugElement;
        component = fixture.componentInstance;
      });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular14-jasmin-unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular14-jasmin-unit-testing');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'angular14-jasmin-unit-testing app is running!'
  //   );
  // });

  it('should render a button with text subscribe and the button should not be disabled', () => {
    component.isSubscribed = false;
    fixture.detectChanges();
    const buttonElements = el.queryAll(By.css('.subscribe'));

    expect(buttonElements[0].nativeElement.textContent).toBe('Subscribe');
    expect(buttonElements[0].nativeElement.disabled).toBeFalse;
  });

  //   it('should render a button with text subscribed and the button should be disabled after clicked', (done: DoneFn) => {
  //     component.isSubscribed = false;
  //     fixture.detectChanges();
  //     let buttonElements = el.queryAll(By.css('.subscribe'));

  //     buttonElements[0].nativeElement.click();
  //     setTimeout(() => {
  //       console.log('some other test case');
  //     }, 3_000);
  //     setTimeout(() => {
  //       fixture.detectChanges();
  //       buttonElements = el.queryAll(By.css('.subscribe'));
  //       expect(buttonElements[0].nativeElement.textContent).toBe('Subscribed');
  //       expect(buttonElements[0].nativeElement.disabled).toBeTrue();
  //       done();
  //     }, 2_000);
  //   });

  it('should render a button with text subscribed and the button should be disabled after clicked', fakeAsync(() => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let buttonElements = el.queryAll(By.css('.subscribe'));

    buttonElements[0].nativeElement.click();
    setTimeout(() => {
      console.log('some other test case');
    }, 3_000);
    setTimeout(() => {
      fixture.detectChanges();
      buttonElements = el.queryAll(By.css('.subscribe'));
    }, 2_000);

    flush();
    expect(buttonElements[0].nativeElement.textContent).toBe('Subscribed');
    expect(buttonElements[0].nativeElement.disabled).toBeTrue();
  }));

  it('should test the promise', fakeAsync(() => {
    let counter = 0;

    setTimeout(() => {
      console.log('First Set Timeout');
      counter = counter + 2;
    }, 2_000);
    setTimeout(() => {
      console.log('Second Set Timeout');
      counter = counter + 3;
    }, 3_000);

    Promise.resolve().then(() => {
      console.log('Promise');
      counter = counter + 1;
    });
    // flush();

    flushMicrotasks();
    expect(counter).toBe(1);

    tick(3_000);
    expect(counter).toBe(6);
  }));

  it('should test the observable', fakeAsync(() => {
    let isSubscribed = false;
    let myObs = of(isSubscribed).pipe(delay(1_000));
    myObs.subscribe(() => {
      isSubscribed = true;
    });
    tick(1_000);
    expect(isSubscribed).toBeTrue();
  }));
});
