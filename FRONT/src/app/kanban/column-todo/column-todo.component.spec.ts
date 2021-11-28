import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnTodoComponent } from './column-todo.component';

describe('ColumnTodoComponent', () => {
  let component: ColumnTodoComponent;
  let fixture: ComponentFixture<ColumnTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
