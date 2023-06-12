import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefisPage } from './defis.page';

describe('DefisPage', () => {
  let component: DefisPage;
  let fixture: ComponentFixture<DefisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DefisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
