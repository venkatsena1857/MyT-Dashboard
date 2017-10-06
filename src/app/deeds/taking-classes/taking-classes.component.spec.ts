import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakingClassesComponent } from './taking-classes.component';

describe('TakingClassesComponent', () => {
  let component: TakingClassesComponent;
  let fixture: ComponentFixture<TakingClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakingClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakingClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
