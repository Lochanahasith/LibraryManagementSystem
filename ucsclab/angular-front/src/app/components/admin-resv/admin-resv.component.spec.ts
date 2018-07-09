import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResvComponent } from './admin-resv.component';

describe('AdminResvComponent', () => {
  let component: AdminResvComponent;
  let fixture: ComponentFixture<AdminResvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
