import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PachagesComponent } from './pachages.component';

describe('PachagesComponent', () => {
  let component: PachagesComponent;
  let fixture: ComponentFixture<PachagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PachagesComponent]
    });
    fixture = TestBed.createComponent(PachagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
