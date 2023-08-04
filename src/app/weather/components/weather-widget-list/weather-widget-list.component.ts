import { ChangeDetectionStrategy, Component, TrackByFunction, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Observable } from 'rxjs';
import { WeatherItem } from '../../interfaces/weather-item.interface';
import { CommonModule } from '@angular/common';
import { WeatherWidgetItemComponent } from './weather-widget-item/weather-widget-item.component';

@Component({
  selector: 'app-weather-widget-list',
  templateUrl: './weather-widget-list.component.html',
  styleUrls: ['./weather-widget-list.component.scss'],
  standalone: true,
  imports: [CommonModule, WeatherWidgetItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetListComponent {
  private readonly weatherService = inject(WeatherService);

  weather$: Observable<WeatherItem[]> = this.weatherService.getWeatherDataForRandomCities();

  trackByCity: TrackByFunction<WeatherItem> = (index: number, weatherData: WeatherItem) =>
    weatherData.name;
}
