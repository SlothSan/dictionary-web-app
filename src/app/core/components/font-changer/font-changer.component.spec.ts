import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontChangerComponent } from './font-changer.component';

describe('FontChangerComponent', () => {
  let component: FontChangerComponent;
  let fixture: ComponentFixture<FontChangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontChangerComponent]
    });
    fixture = TestBed.createComponent(FontChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
