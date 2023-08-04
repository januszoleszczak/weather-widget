import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherItem } from 'src/app/weather/interfaces/weather-item.interface';

@Component({
  selector: 'app-weather-widget-item',
  templateUrl: './weather-widget-item.component.html',
  styleUrls: ['./weather-widget-item.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetItemComponent {
  @Input() weatherData: WeatherItem | undefined;
}
