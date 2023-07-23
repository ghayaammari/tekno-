import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultervendeurComponent } from './consultervendeur.component';

describe('ConsultervendeurComponent', () => {
  let component: ConsultervendeurComponent;
  let fixture: ComponentFixture<ConsultervendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultervendeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultervendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
