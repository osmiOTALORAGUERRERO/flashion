import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlComponent } from './forml.component';

describe('FormlComponent', () => {
  let component: FormlComponent;
  let fixture: ComponentFixture<FormlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
