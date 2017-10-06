import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrencesComponent } from './confrences.component';

describe('ConfrencesComponent', () => {
  let component: ConfrencesComponent;
  let fixture: ComponentFixture<ConfrencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfrencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfrencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
