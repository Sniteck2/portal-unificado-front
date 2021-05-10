import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCausasComponent } from './mis-causas.component';

describe('MisCausasComponent', () => {
  let component: MisCausasComponent;
  let fixture: ComponentFixture<MisCausasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCausasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCausasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
