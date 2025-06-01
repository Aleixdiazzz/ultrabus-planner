// bus-service-management.component.ts
import { Component, ViewChild, ElementRef, LOCALE_ID, Inject } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { NgForOf } from '@angular/common';
import {RouterLink} from '@angular/router';

// Register Spanish locale data
registerLocaleData(localeEs);

interface ServiceCard {
  id: number;
  origen: string;
  destino: string;
  tipo_servicio: string;
  hora_salida: string;
  hora_llegada: string;
  num_pasajeros: number;
  observaciones: string;
  driverId?: number;
  expanded?: boolean;
}

interface Driver {
  id: number;
  name: string;
}

@Component({
  selector: 'app-bus-dashboard',
  templateUrl: './bus-dashboard.component.html',
  imports: [
    NgForOf,
    DatePipe,
    RouterLink
  ],
  styleUrls: ['./bus-dashboard.component.css'],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
    DatePipe
  ]
})
export class BusDashboardComponent {
  constructor(
    @Inject(LOCALE_ID) private locale: string
  ) {}

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
    { id: 1, name: 'Driver A' },
    { id: 2, name: 'Driver B' },
    { id: 3, name: 'Driver C' },
    { id: 4, name: 'Driver D' },
    { id: 5, name: 'Driver F' },
    { id: 6, name: 'Driver G' },
    { id: 7, name: 'Driver H' },
    { id: 8, name: 'Driver I' },
  ];

  serviceCards: ServiceCard[] = [
    {
      id: 101,
      origen: 'City A',
      destino: 'City B',
      tipo_servicio: 'Normal',
      hora_salida: '08:00',
      hora_llegada: '12:00',
      num_pasajeros: 40,
      observaciones: 'None',
      driverId: undefined
    },
    {
      id: 102,
      origen: 'City C',
      destino: 'City D',
      tipo_servicio: 'Especial',
      hora_salida: '10:00',
      hora_llegada: '14:00',
      num_pasajeros: 35,
      observaciones: 'VIP group',
      driverId: 1
    },
    {
      id: 103,
      origen: 'City E',
      destino: 'City F',
      tipo_servicio: 'Normal',
      hora_salida: '09:30',
      hora_llegada: '13:30',
      num_pasajeros: 42,
      observaciones: 'Stopover at Station X',
      driverId: undefined
    },
    {
      id: 104,
      origen: 'City G',
      destino: 'City H',
      tipo_servicio: 'Especial',
      hora_salida: '11:00',
      hora_llegada: '15:00',
      num_pasajeros: 30,
      observaciones: 'Chartered trip',
      driverId: 2
    },
    {
      id: 105,
      origen: 'City I',
      destino: 'City J',
      tipo_servicio: 'Normal',
      hora_salida: '07:00',
      hora_llegada: '11:00',
      num_pasajeros: 38,
      observaciones: 'None',
      driverId: undefined
    },
    {
      id: 106,
      origen: 'City K',
      destino: 'City L',
      tipo_servicio: 'Especial',
      hora_salida: '13:00',
      hora_llegada: '17:00',
      num_pasajeros: 45,
      observaciones: 'Medical group transport',
      driverId: 3
    },
    {
      id: 107,
      origen: 'City M',
      destino: 'City N',
      tipo_servicio: 'Normal',
      hora_salida: '12:30',
      hora_llegada: '16:30',
      num_pasajeros: 39,
      observaciones: 'No delays expected',
      driverId: undefined
    },
    {
      id: 108,
      origen: 'City O',
      destino: 'City P',
      tipo_servicio: 'Especial',
      hora_salida: '14:00',
      hora_llegada: '18:00',
      num_pasajeros: 28,
      observaciones: 'Security escort required',
      driverId: 4
    },
    {
      id: 109,
      origen: 'City Q',
      destino: 'City R',
      tipo_servicio: 'Normal',
      hora_salida: '15:00',
      hora_llegada: '19:00',
      num_pasajeros: 41,
      observaciones: 'Regular check-in',
      driverId: undefined
    },
    {
      id: 110,
      origen: 'City S',
      destino: 'City T',
      tipo_servicio: 'Especial',
      hora_salida: '06:00',
      hora_llegada: '10:00',
      num_pasajeros: 33,
      observaciones: 'Wedding party',
      driverId: 5
    },
    {
      id: 111,
      origen: 'City U',
      destino: 'City V',
      tipo_servicio: 'Normal',
      hora_salida: '08:15',
      hora_llegada: '12:15',
      num_pasajeros: 36,
      observaciones: 'Peak hour',
      driverId: undefined
    },
    {
      id: 112,
      origen: 'City W',
      destino: 'City X',
      tipo_servicio: 'Especial',
      hora_salida: '09:45',
      hora_llegada: '13:45',
      num_pasajeros: 29,
      observaciones: 'Film crew transport',
      driverId: 6
    },
    {
      id: 113,
      origen: 'City Y',
      destino: 'City Z',
      tipo_servicio: 'Normal',
      hora_salida: '10:30',
      hora_llegada: '14:30',
      num_pasajeros: 34,
      observaciones: 'Weekly route',
      driverId: undefined
    },
    {
      id: 114,
      origen: 'City AA',
      destino: 'City AB',
      tipo_servicio: 'Especial',
      hora_salida: '11:30',
      hora_llegada: '15:30',
      num_pasajeros: 32,
      observaciones: 'Private booking',
      driverId: 2
    },
    {
      id: 115,
      origen: 'City AC',
      destino: 'City AD',
      tipo_servicio: 'Normal',
      hora_salida: '13:15',
      hora_llegada: '17:15',
      num_pasajeros: 43,
      observaciones: 'Lunch stop planned',
      driverId: undefined
    },
    {
      id: 116,
      origen: 'City AE',
      destino: 'City AF',
      tipo_servicio: 'Especial',
      hora_salida: '14:45',
      hora_llegada: '18:45',
      num_pasajeros: 27,
      observaciones: 'University trip',
      driverId: 3
    },
    {
      id: 117,
      origen: 'City AG',
      destino: 'City AH',
      tipo_servicio: 'Normal',
      hora_salida: '15:30',
      hora_llegada: '19:30',
      num_pasajeros: 37,
      observaciones: 'Evening slot',
      driverId: undefined
    },
    {
      id: 118,
      origen: 'City AI',
      destino: 'City AJ',
      tipo_servicio: 'Especial',
      hora_salida: '16:00',
      hora_llegada: '20:00',
      num_pasajeros: 26,
      observaciones: 'Guided group',
      driverId: 1
    },
    {
      id: 119,
      origen: 'City AK',
      destino: 'City AL',
      tipo_servicio: 'Normal',
      hora_salida: '17:00',
      hora_llegada: '21:00',
      num_pasajeros: 44,
      observaciones: 'Final trip of the day',
      driverId: undefined
    },
    {
      id: 120,
      origen: 'City AM',
      destino: 'City AN',
      tipo_servicio: 'Especial',
      hora_salida: '18:00',
      hora_llegada: '22:00',
      num_pasajeros: 31,
      observaciones: 'Requires onboard WiFi',
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
    }
    (event.currentTarget as HTMLElement).classList.remove('drag-over');
  }

  getDriverCards(driverId: number): ServiceCard[] {
    return this.serviceCards.filter(card => card.driverId === driverId);
  }

  getPendingCards(): ServiceCard[] {
  return this.serviceCards.filter(card => card.driverId === undefined);
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
  }
}
