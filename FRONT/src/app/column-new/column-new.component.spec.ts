import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnNewComponent } from './column-new.component';

describe('ColumnNewComponent', () => {
  let component: ColumnNewComponent;
  let fixture: ComponentFixture<ColumnNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
