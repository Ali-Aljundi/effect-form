import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterdColumnChartComponent } from './clusterd-column-chart.component';

describe('ClusterdColumnChartComponent', () => {
  let component: ClusterdColumnChartComponent;
  let fixture: ComponentFixture<ClusterdColumnChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterdColumnChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterdColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
