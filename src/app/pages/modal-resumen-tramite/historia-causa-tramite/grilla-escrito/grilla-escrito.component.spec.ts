import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaEscritoComponent } from './grilla-escrito.component';

describe('GrillaEscritoComponent', () => {
  let component: GrillaEscritoComponent;
  let fixture: ComponentFixture<GrillaEscritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaEscritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaEscritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
