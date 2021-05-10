import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasCausasCompetenciaComponent } from './tarjetas-causas-competencia.component';

describe('TarjetasCausasCompetenciaComponent', () => {
  let component: TarjetasCausasCompetenciaComponent;
  let fixture: ComponentFixture<TarjetasCausasCompetenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetasCausasCompetenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasCausasCompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
