import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCompetenciaComponent } from './tarjeta-competencia.component';

describe('TarjetaCompetenciaComponent', () => {
  let component: TarjetaCompetenciaComponent;
  let fixture: ComponentFixture<TarjetaCompetenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaCompetenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
