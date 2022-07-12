import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookuspageComponent } from './bookuspage.component';

describe('BookuspageComponent', () => {
  let component: BookuspageComponent;
  let fixture: ComponentFixture<BookuspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookuspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookuspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
