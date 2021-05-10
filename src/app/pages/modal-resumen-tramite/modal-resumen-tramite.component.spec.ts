import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResumenTramiteComponent } from './modal-resumen-tramite.component';

describe('ModalResumenTramiteComponent', () => {
  let component: ModalResumenTramiteComponent;
  let fixture: ComponentFixture<ModalResumenTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalResumenTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResumenTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
