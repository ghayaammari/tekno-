import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurpendingComponent } from './vendeurpending.component';

describe('VendeurpendingComponent', () => {
  let component: VendeurpendingComponent;
  let fixture: ComponentFixture<VendeurpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendeurpendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendeurpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
