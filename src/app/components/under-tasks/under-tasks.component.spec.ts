import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderTasksComponent } from './under-tasks.component';

describe('UnderTasksComponent', () => {
  let component: UnderTasksComponent;
  let fixture: ComponentFixture<UnderTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
