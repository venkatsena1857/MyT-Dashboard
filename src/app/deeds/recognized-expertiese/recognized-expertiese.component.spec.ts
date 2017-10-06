import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizedExpertieseComponent } from './recognized-expertiese.component';

describe('RecognizedExpertieseComponent', () => {
  let component: RecognizedExpertieseComponent;
  let fixture: ComponentFixture<RecognizedExpertieseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecognizedExpertieseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognizedExpertieseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
