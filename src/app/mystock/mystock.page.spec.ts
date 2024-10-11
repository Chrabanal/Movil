import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MystockPage } from './mystock.page';

describe('MystockPage', () => {
  let component: MystockPage;
  let fixture: ComponentFixture<MystockPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MystockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
