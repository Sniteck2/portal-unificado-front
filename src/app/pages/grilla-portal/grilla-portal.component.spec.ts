import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaPortalComponent } from './grilla-portal.component';

describe('GrillaPortalComponent', () => {
  let component: GrillaPortalComponent;
  let fixture: ComponentFixture<GrillaPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
