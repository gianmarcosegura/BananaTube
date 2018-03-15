import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioComponent } from './comentario.component';

describe('ComentarioComponent', () => {
  let component: ComentarioComponent;
  let fixture: ComponentFixture<ComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
