import { Component } from '@angular/core';

interface TaskCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  route: string;
  emoji: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  tags: string[];
  concepts: string;
}

interface StatItem {
  label: string;
  value: string;
  icon: string;
  color: string;
  bg: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  readonly stats: StatItem[] = [
    { label: 'Components Built', value: '7',    icon: '🧩', color: '#6366f1', bg: '#eef2ff' },
    { label: 'Angular Concepts', value: '10+',  icon: '📚', color: '#0ea5e9', bg: '#e0f2fe' },
    { label: 'Services Created', value: '1',    icon: '⚙️',  color: '#10b981', bg: '#d1fae5' },
    { label: 'Lines of Code',    value: '~650', icon: '💻', color: '#f59e0b', bg: '#fef3c7' },
  ];

  readonly tasks: TaskCard[] = [
    {
      id: 1,
      title: 'Dynamic Shopping Cart',
      subtitle: 'Component Communication',
      description:
        'Product cards emit typed Product objects to the parent via EventEmitter. The cart deduplicates entries, increments quantities, shows per-item totals, and supports full cart clearing.',
      route: '/task1',
      emoji: '🛒',
      accentColor: '#f59e0b',
      bgColor: '#fffbeb',
      borderColor: '#fde68a',
      tags: ['*ngFor', '@Input', '@Output', 'EventEmitter<Product>', 'CartItem[]'],
      concepts: 'Parent–child data flow, structural directives, type-safe events',
    },
    {
      id: 2,
      title: 'User Status Display',
      subtitle: 'Dynamic Styling Directives',
      description:
        'Toggle online/offline with *ngIf for conditional rendering, [ngClass] to swap CSS classes, and [ngStyle] to set live background color. The lastSeen timestamp is formatted with the Date pipe.',
      route: '/task2',
      emoji: '👤',
      accentColor: '#10b981',
      bgColor: '#f0fdf4',
      borderColor: '#bbf7d0',
      tags: ['*ngIf', '[ngClass]', '[ngStyle]', 'Date Pipe', 'boolean toggle'],
      concepts: 'Conditional rendering, attribute binding, CSS class binding',
    },
    {
      id: 3,
      title: 'Shared Counter Service',
      subtitle: 'Dependency Injection & Shared State',
      description:
        'Two independent components inject the same root-provided CounterService. Changes from either component instantly reflect in the other — the canonical DI shared-state demo.',
      route: '/task3',
      emoji: '🔗',
      accentColor: '#6366f1',
      bgColor: '#eef2ff',
      borderColor: '#c7d2fe',
      tags: ['@Injectable', 'DI', 'providedIn: root', 'Shared State', 'Service'],
      concepts: 'Singleton services, Angular DI tree, inter-component communication',
    },
  ];
}
