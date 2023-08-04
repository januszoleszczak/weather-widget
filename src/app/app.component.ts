import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherWidgetListComponent } from './weather/components/weather-widget-list/weather-widget-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [WeatherWidgetListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'weather-app';
}

