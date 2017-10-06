import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductingClassesComponent } from './conducting-classes.component';

describe('ConductingClassesComponent', () => {
  let component: ConductingClassesComponent;
  let fixture: ComponentFixture<ConductingClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductingClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductingClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
