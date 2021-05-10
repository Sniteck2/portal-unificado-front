import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaTramiteComponent } from './grilla-tramite.component';

describe('GrillaTramiteComponent', () => {
  let component: GrillaTramiteComponent;
  let fixture: ComponentFixture<GrillaTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
