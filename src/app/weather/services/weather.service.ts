import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, forkJoin, interval, map, of, startWith, switchMap } from 'rxjs';
import { config } from 'src/config';
import { WeatherItem } from '../interfaces/weather-item.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiKey = config.apiKey;
  private readonly intervalRefreshCity = config.intervalRefreshCity;
  private readonly intervalRefreshWeather = config.intervalRefreshWeather;
  private readonly http = inject(HttpClient);

  private cities: string[] = ['Lodz', 'Warsaw', 'Berlin', 'New York', 'London'];

  getRandomCities(): string[] {
    const randomCities = this.cities.sort(() => 0.5 - Math.random());
    return randomCities.slice(0, 3);
  }

  getWeatherData(cities: string[]): Observable<WeatherItem[] | HttpErrorResponse> {
    return forkJoin(
      cities.map((city) =>
        this.http.get<WeatherItem>(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
        )
      )
    ).pipe(
      catchError((error: HttpErrorResponse) => {
        return of(error);
      })
    );
  }

  getWeatherDataForRandomCities(): Observable<WeatherItem[]> {
    return interval(this.intervalRefreshCity).pipe(
      startWith(0),
      map(() => this.getRandomCities()),
      switchMap((cities) => {
        return interval(this.intervalRefreshWeather).pipe(
          startWith(0),
          switchMap(() => this.getWeatherData(cities)),
          catchError((error) => {
            return of(error);
          })
        );
      })
    );
  }
}
