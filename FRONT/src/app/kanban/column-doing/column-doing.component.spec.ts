import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDoingComponent } from './column-doing.component';

describe('ColumnDoingComponent', () => {
  let component: ColumnDoingComponent;
  let fixture: ComponentFixture<ColumnDoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnDoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnDoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
