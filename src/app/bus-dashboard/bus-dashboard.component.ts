// bus-service-management.component.ts
import { Component, ViewChild, ElementRef, LOCALE_ID, Inject, OnInit } from '@angular/core';
import {DatePipe, NgOptimizedImage, registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServiceCard } from '../Models/ServiceCard';
import { Driver } from '../Models/Driver';

// Register Spanish locale data
registerLocaleData(localeEs);


@Component({
  selector: 'app-bus-dashboard',
  templateUrl: './bus-dashboard.component.html',
  imports: [
    NgForOf,
    DatePipe,
    RouterLink,
    NgOptimizedImage
  ],
  styleUrls: ['./bus-dashboard.component.css'],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
    DatePipe
  ]
})
export class BusDashboardComponent implements OnInit {
  private readonly STORAGE_KEY = 'bus_services_data';

  constructor(
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.loadServices();
  }

  /**
   * Prints the current page
   */
  printPage(): void {
    window.print();
  }
  @ViewChild('pendingColumn', { static: true }) pendingColumn!: ElementRef;
  @ViewChild('datePicker') datePickerInput!: ElementRef<HTMLInputElement>;
  currentDate: Date = new Date();

  drivers: Driver[] = [
    { id: 1, name: 'Conductor A' },
    { id: 2, name: 'Conductor B' },
    { id: 3, name: 'Conductor C' },
    { id: 4, name: 'Conductor D' },
    { id: 5, name: 'Conductor F' },
    { id: 6, name: 'Conductor G' },
    { id: 7, name: 'Conductor H' },
    { id: 8, name: 'Conductor I' },
  ];

  serviceCards: ServiceCard[] = [
    {
      id: 101,
      origin: 'City A',
      destination: 'City B',
      serviceType: 'Normal',
      departureTime: '08:00',
      arrivalTime: '12:00',
      passengerCount: 40,
      notes: 'None',
      driverId: undefined
    },
    {
      id: 102,
      origin: 'City C',
      destination: 'City D',
      serviceType: 'Especial',
      departureTime: '10:00',
      arrivalTime: '14:00',
      passengerCount: 35,
      notes: 'VIP group',
      driverId: 1
    },
    {
      id: 103,
      origin: 'City E',
      destination: 'City F',
      serviceType: 'Normal',
      departureTime: '09:30',
      arrivalTime: '13:30',
      passengerCount: 42,
      notes: 'Stopover at Station X',
      driverId: undefined
    },
    {
      id: 104,
      origin: 'City G',
      destination: 'City H',
      serviceType: 'Especial',
      departureTime: '11:00',
      arrivalTime: '15:00',
      passengerCount: 30,
      notes: 'Chartered trip',
      driverId: 2
    },
    {
      id: 105,
      origin: 'City I',
      destination: 'City J',
      serviceType: 'Normal',
      departureTime: '07:00',
      arrivalTime: '11:00',
      passengerCount: 38,
      notes: 'None',
      driverId: undefined
    },
    {
      id: 106,
      origin: 'City K',
      destination: 'City L',
      serviceType: 'Especial',
      departureTime: '13:00',
      arrivalTime: '17:00',
      passengerCount: 45,
      notes: 'Medical group transport',
      driverId: 3
    },
    {
      id: 107,
      origin: 'City M',
      destination: 'City N',
      serviceType: 'Normal',
      departureTime: '12:30',
      arrivalTime: '16:30',
      passengerCount: 39,
      notes: 'No delays expected',
      driverId: undefined
    },
    {
      id: 108,
      origin: 'City O',
      destination: 'City P',
      serviceType: 'Especial',
      departureTime: '14:00',
      arrivalTime: '18:00',
      passengerCount: 28,
      notes: 'Security escort required',
      driverId: 4
    },
    {
      id: 109,
      origin: 'City Q',
      destination: 'City R',
      serviceType: 'Normal',
      departureTime: '15:00',
      arrivalTime: '19:00',
      passengerCount: 41,
      notes: 'Regular check-in',
      driverId: undefined
    },
    {
      id: 110,
      origin: 'City S',
      destination: 'City T',
      serviceType: 'Especial',
      departureTime: '06:00',
      arrivalTime: '10:00',
      passengerCount: 33,
      notes: 'Wedding party',
      driverId: 5
    },
    {
      id: 111,
      origin: 'City U',
      destination: 'City V',
      serviceType: 'Normal',
      departureTime: '08:15',
      arrivalTime: '12:15',
      passengerCount: 36,
      notes: 'Peak hour',
      driverId: undefined
    },
    {
      id: 112,
      origin: 'City W',
      destination: 'City X',
      serviceType: 'Especial',
      departureTime: '09:45',
      arrivalTime: '13:45',
      passengerCount: 29,
      notes: 'Film crew transport',
      driverId: 6
    },
    {
      id: 113,
      origin: 'City Y',
      destination: 'City Z',
      serviceType: 'Normal',
      departureTime: '10:30',
      arrivalTime: '14:30',
      passengerCount: 34,
      notes: 'Weekly route',
      driverId: undefined
    },
    {
      id: 114,
      origin: 'City AA',
      destination: 'City AB',
      serviceType: 'Especial',
      departureTime: '11:30',
      arrivalTime: '15:30',
      passengerCount: 32,
      notes: 'Private booking',
      driverId: 2
    },
    {
      id: 115,
      origin: 'City AC',
      destination: 'City AD',
      serviceType: 'Normal',
      departureTime: '13:15',
      arrivalTime: '17:15',
      passengerCount: 43,
      notes: 'Lunch stop planned',
      driverId: undefined
    },
    {
      id: 116,
      origin: 'City AE',
      destination: 'City AF',
      serviceType: 'Especial',
      departureTime: '14:45',
      arrivalTime: '18:45',
      passengerCount: 27,
      notes: 'University trip',
      driverId: 3
    },
    {
      id: 117,
      origin: 'City AG',
      destination: 'City AH',
      serviceType: 'Normal',
      departureTime: '15:30',
      arrivalTime: '19:30',
      passengerCount: 37,
      notes: 'Evening slot',
      driverId: undefined
    },
    {
      id: 118,
      origin: 'City AI',
      destination: 'City AJ',
      serviceType: 'Especial',
      departureTime: '16:00',
      arrivalTime: '20:00',
      passengerCount: 26,
      notes: 'Guided group',
      driverId: 1
    },
    {
      id: 119,
      origin: 'City AK',
      destination: 'City AL',
      serviceType: 'Normal',
      departureTime: '17:00',
      arrivalTime: '21:00',
      passengerCount: 44,
      notes: 'Final trip of the day',
      driverId: undefined
    },
    {
      id: 120,
      origin: 'City AM',
      destination: 'City AN',
      serviceType: 'Especial',
      departureTime: '18:00',
      arrivalTime: '22:00',
      passengerCount: 31,
      notes: 'Requires onboard WiFi',
      driverId: 4
    }
  ];


  onDragStart(event: DragEvent, card: ServiceCard) {
    event.dataTransfer?.setData('text/plain', JSON.stringify(card));
    setTimeout(() => {
      (event.target as HTMLElement).classList.add('dragging');
    });
  }

  onDragEnd(event: DragEvent) {
    (event.target as HTMLElement).classList.remove('dragging');
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    (event.currentTarget as HTMLElement).classList.add('drag-over');
  }

  onDragLeave(event: DragEvent) {
    (event.currentTarget as HTMLElement).classList.remove('drag-over');
  }

  onDrop(event: DragEvent, driverId: number | undefined) {
    event.preventDefault();
    const data = event.dataTransfer?.getData('text/plain');
    if (data) {
      const droppedCard: ServiceCard = JSON.parse(data);
      this.serviceCards = this.serviceCards.map(card =>
        card.id === droppedCard.id ? { ...card, driverId } : card
      );
      this.saveServices();
    }
    (event.currentTarget as HTMLElement).classList.remove('drag-over');
  }

  private timeToMinutes(timeString: string): number {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
  }

  private sortServicesByDeparture(services: ServiceCard[]): ServiceCard[] {
    return [...services].sort((a, b) => {
      return this.timeToMinutes(a.departureTime) - this.timeToMinutes(b.departureTime);
    });
  }

  getDriverCards(driverId: number): ServiceCard[] {
    const driverCards = this.serviceCards.filter(card => card.driverId === driverId);
    return this.sortServicesByDeparture(driverCards);
  }

  getPendingCards(): ServiceCard[] {
    const pendingCards = this.serviceCards.filter(card => card.driverId === undefined);
    return this.sortServicesByDeparture(pendingCards);
  }

  onCardClick(card: ServiceCard) {
    card.expanded = !card.expanded;
  }

  // Date handling methods
  openDatePicker() {
    this.datePickerInput.nativeElement.showPicker();
  }

  onDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value) {
      // Create date in local timezone
      const [year, month, day] = input.value.split('-').map(Number);
      this.currentDate = new Date(year, month - 1, day);
      // You can add any additional logic here when the date changes
    }
  }

  previousDay() {
    const newDate = new Date(this.currentDate);
    newDate.setDate(newDate.getDate() - 1);
    this.currentDate = newDate;
  }

  nextDay() {
    const newDate = new Date(this.currentDate);
    newDate.setDate(newDate.getDate() + 1);
    this.currentDate = newDate;
    this.loadServices();
  }

  private saveServices() {
    const dateKey = this.getDateStorageKey();
    const data = {
      services: this.serviceCards,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(dateKey, JSON.stringify(data));
    console.log('Saved services:', {
      dateKey,
      data,
      storageSize: `${JSON.stringify(data).length} bytes`
    });
  }

  private loadServices() {
    const dateKey = this.getDateStorageKey();
    const savedData = localStorage.getItem(dateKey);

    console.log(`Loading services for ${dateKey}...`);

    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        console.log('Loaded services data:', parsedData);

        if (parsedData.services && Array.isArray(parsedData.services)) {
          this.serviceCards = parsedData.services;
          console.log(`Successfully loaded ${this.serviceCards.length} services`);
        } else {
          console.warn('No valid services array found in saved data');
        }
      } catch (e) {
        console.error('Error loading saved services:', e);
        console.error('Problematic data:', savedData);
      }
    } else {
      console.log('No saved data found for this date');
    }
  }

  private getDateStorageKey(): string {
    return `${this.STORAGE_KEY}_${this.currentDate.toISOString().split('T')[0]}`;
  }

  ngOnInit() {
    this.loadServices();
  }

}
