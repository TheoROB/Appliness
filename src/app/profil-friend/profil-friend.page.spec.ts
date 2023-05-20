import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilFriendPage } from './profil-friend.page';

describe('ProfilFriendPage', () => {
  let component: ProfilFriendPage;
  let fixture: ComponentFixture<ProfilFriendPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilFriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
