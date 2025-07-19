import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPicture } from './content-picture';

describe('ContentPicture', () => {
  let component: ContentPicture;
  let fixture: ComponentFixture<ContentPicture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPicture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPicture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
