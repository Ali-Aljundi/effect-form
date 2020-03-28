import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-widget',
  templateUrl: './small-widget.component.html',
  styleUrls: ['./small-widget.component.scss']
})
export class SmallWidgetComponent implements OnInit {

  @Input() color;
  @Input() type;
  @Input() active_count;
  @Input() total_count;
  constructor() { }

  ngOnInit() {
  }

}
