import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaterToComponent } from './cater-to.component';

describe('CaterToComponent', () => {
  let component: CaterToComponent;
  let fixture: ComponentFixture<CaterToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaterToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
