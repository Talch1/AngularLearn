import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyoutComponent } from './leyout.component';

describe('LeyoutComponent', () => {
  let component: LeyoutComponent;
  let fixture: ComponentFixture<LeyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
