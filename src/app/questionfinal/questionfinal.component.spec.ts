import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionfinalComponent } from './questionfinal.component';

describe('QuestionfinalComponent', () => {
  let component: QuestionfinalComponent;
  let fixture: ComponentFixture<QuestionfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionfinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
