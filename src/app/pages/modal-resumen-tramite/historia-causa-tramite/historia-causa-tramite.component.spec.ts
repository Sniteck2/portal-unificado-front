import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaCausaTramiteComponent } from './historia-causa-tramite.component';

describe('HistoriaCausaTramiteComponent', () => {
  let component: HistoriaCausaTramiteComponent;
  let fixture: ComponentFixture<HistoriaCausaTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaCausaTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaCausaTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
