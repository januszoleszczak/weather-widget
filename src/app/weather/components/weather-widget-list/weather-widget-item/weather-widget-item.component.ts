import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weather-widget-item',
  templateUrl: './weather-widget-item.component.html',
  styleUrls: ['./weather-widget-item.component.scss'],
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetItemComponent {}

