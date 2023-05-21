import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssociationsPage } from './associations.page';

describe('AssociationsPage', () => {
  let component: AssociationsPage;
  let fixture: ComponentFixture<AssociationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssociationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
