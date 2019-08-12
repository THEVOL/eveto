import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PefilEventoPage } from './pefil-evento.page';

describe('PefilEventoPage', () => {
  let component: PefilEventoPage;
  let fixture: ComponentFixture<PefilEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PefilEventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PefilEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
