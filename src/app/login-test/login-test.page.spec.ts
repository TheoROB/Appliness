import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginTestPage } from './login-test.page';

describe('LoginTestPage', () => {
  let component: LoginTestPage;
  let fixture: ComponentFixture<LoginTestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
