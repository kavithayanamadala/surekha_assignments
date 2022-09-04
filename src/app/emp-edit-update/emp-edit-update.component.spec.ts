import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEditUpdateComponent } from './emp-edit-update.component';

describe('EmpEditUpdateComponent', () => {
  let component: EmpEditUpdateComponent;
  let fixture: ComponentFixture<EmpEditUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpEditUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpEditUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
