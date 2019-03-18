import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantInfoPage } from './participant-info.page';

describe('ParticipantInfoPage', () => {
  let component: ParticipantInfoPage;
  let fixture: ComponentFixture<ParticipantInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
