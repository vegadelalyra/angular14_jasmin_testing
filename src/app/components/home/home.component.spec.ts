import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [HomeComponent],
  //   }).compileComponents();

  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [HomeComponent],
  //   })
  //     .compileComponents()
  //     .then(() => {
  //       fixture = TestBed.createComponent(HomeComponent);
  //       component = fixture.componentInstance;
  //     });
  // });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct contents', () => {
    let pElements = el.queryAll(By.css('p'));
    let buttonElements = el.queryAll(By.css('.btn'));
    let imgElements = el.queryAll(By.css('img'));
    let textElements = el.queryAll(By.css('.title'));
    component.title = 'Angular Unit Testing!';
    fixture.detectChanges();

    expect(pElements[0].nativeElement.textContent).toBe('home works!');
    expect(buttonElements[0].nativeElement.disabled).toBeTrue();
    expect(imgElements[0].nativeElement.src).toBe('http://imgsrc.com/123');
    expect(textElements[0].nativeElement.textContent).toBe(
      'Angular Unit Testing!'
    );
  });
});
