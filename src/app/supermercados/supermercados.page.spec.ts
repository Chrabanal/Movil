import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupermercadosPage } from './supermercados.page';

describe('SupermercadosPage', () => {
  let component: SupermercadosPage;
  let fixture: ComponentFixture<SupermercadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermercadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
