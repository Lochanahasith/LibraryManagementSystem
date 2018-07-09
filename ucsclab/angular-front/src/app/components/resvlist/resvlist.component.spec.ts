import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResvlistComponent } from './resvlist.component';

describe('ResvlistComponent', () => {
  let component: ResvlistComponent;
  let fixture: ComponentFixture<ResvlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResvlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResvlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
