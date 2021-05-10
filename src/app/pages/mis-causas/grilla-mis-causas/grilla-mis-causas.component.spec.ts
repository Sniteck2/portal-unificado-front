import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaMisCausasComponent } from './grilla-mis-causas.component';

describe('GrillaMisCausasComponent', () => {
  let component: GrillaMisCausasComponent;
  let fixture: ComponentFixture<GrillaMisCausasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaMisCausasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaMisCausasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
