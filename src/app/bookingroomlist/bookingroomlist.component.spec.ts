import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingroomlistComponent } from './bookingroomlist.component';

describe('BookingroomlistComponent', () => {
  let component: BookingroomlistComponent;
  let fixture: ComponentFixture<BookingroomlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingroomlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingroomlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
