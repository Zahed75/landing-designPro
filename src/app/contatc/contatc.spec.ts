import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contatc } from './contatc';

describe('Contatc', () => {
  let component: Contatc;
  let fixture: ComponentFixture<Contatc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contatc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contatc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
