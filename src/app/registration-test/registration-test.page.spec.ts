import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationTestPage } from './registration-test.page';

describe('RegistrationTestPage', () => {
  let component: RegistrationTestPage;
  let fixture: ComponentFixture<RegistrationTestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrationTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
