import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogThreeComponent } from './blog-three.component';

describe('BlogThreeComponent', () => {
  let component: BlogThreeComponent;
  let fixture: ComponentFixture<BlogThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
