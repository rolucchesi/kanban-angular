import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDoneComponent } from './column-done.component';

describe('ColumnDoneComponent', () => {
  let component: ColumnDoneComponent;
  let fixture: ComponentFixture<ColumnDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
