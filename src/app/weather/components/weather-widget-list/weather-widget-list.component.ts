import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weather-widget-list',
  templateUrl: './weather-widget-list.component.html',
  styleUrls: ['./weather-widget-list.component.scss'],
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetListComponent {}

