import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaruserComponent } from './navbaruser.component';

describe('NavbaruserComponent', () => {
  let component: NavbaruserComponent;
  let fixture: ComponentFixture<NavbaruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbaruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
