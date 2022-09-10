import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordValidationsComponent } from './password-validations.component';

describe('PasswordValidationsComponent', () => {
  let component: PasswordValidationsComponent;
  let fixture: ComponentFixture<PasswordValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordValidationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
