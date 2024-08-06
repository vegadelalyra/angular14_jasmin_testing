import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfoComponent } from './info.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { UnlessDirective } from 'src/app/directives/unless-directive/unless.directive';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let el: DebugElement;
  let location: Location;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [InfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate back to /home when clicked button', waitForAsync(() => {
    fixture.detectChanges();
    let btns = el.queryAll(By.css('button'));
    btns[0].nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  }));
});
