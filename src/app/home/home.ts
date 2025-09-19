import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TableModule, TagModule, RippleModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  kpis = [
    { title: "Today's Bookings", value: 13, icon: 'pi pi-calendar', linkText: 'View All' },
    { title: "Today's Revenue", value: '£2,489.02', icon: 'pi pi-dollar', linkText: 'View Report' },
    { title: 'Active Cleaners', value: 43, icon: 'pi pi-users', linkText: 'View All Cleaners' },
    { title: 'Pending Disputes', value: 3, icon: 'pi pi-exclamation-circle', linkText: 'View Disputes' }
  ];

  recentBookings = [
    { id: 'IC#2508150010', cleaner: 'Joseph Tribbiani', service: 'End-of-Tenancy',      date: '15 Aug 2025, 10:00 AM', amount: '£299.99', status: 'Payment Pending' },
    { id: 'IC#2508150011', cleaner: 'Joseph Tribbiani', service: 'Airbnb / Holiday Let', date: '15 Aug 2025, 10:00 AM', amount: '£299.99', status: 'Pending' },
    { id: 'IC#2508150012', cleaner: 'Joseph Tribbiani', service: 'Office / HMO',         date: '15 Aug 2025, 10:00 AM', amount: '£299.99', status: 'Pending' },
    { id: 'IC#2508150013', cleaner: 'Joseph Tribbiani', service: 'Office / HMO',         date: '15 Aug 2025, 10:00 AM', amount: '£299.99', status: 'Scheduled' },
    { id: 'IC#2508150014', cleaner: 'Joseph Tribbiani', service: 'Office / HMO',         date: '15 Aug 2025, 10:00 AM', amount: '£299.99', status: 'Scheduled' }
  ];

  payouts = [
    { payoutId: 'PO#10293', cleaner: 'Joseph Tribbiani', method: 'Bank Transfer', amount: '£250.00', status: 'Processing' },
    { payoutId: 'PO#10294', cleaner: 'Rachel Green',     method: 'Bank Transfer', amount: '£300.00', status: 'Completed' }
  ];

  statusSeverity(status: string) {
    switch (status) {
      case 'Scheduled': return 'info';
      case 'Pending': return 'warning';
      case 'Payment Pending': return 'warning';
      case 'Completed': return 'success';
      case 'Processing': return 'info';
      default: return 'secondary';
    }
  }
}
