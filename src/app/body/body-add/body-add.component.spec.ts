import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAddComponent } from './body-add.component';

describe('BodyAddComponent', () => {
  let component: BodyAddComponent;
  let fixture: ComponentFixture<BodyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
