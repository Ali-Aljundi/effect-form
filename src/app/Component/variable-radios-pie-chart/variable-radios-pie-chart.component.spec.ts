import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableRadiosPieChartComponent } from './variable-radios-pie-chart.component';

describe('VariableRadiosPieChartComponent', () => {
  let component: VariableRadiosPieChartComponent;
  let fixture: ComponentFixture<VariableRadiosPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableRadiosPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableRadiosPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
