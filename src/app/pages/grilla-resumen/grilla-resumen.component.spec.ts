import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaResumenComponent } from './grilla-resumen.component';

describe('GrillaResumenComponent', () => {
  let component: GrillaResumenComponent;
  let fixture: ComponentFixture<GrillaResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
