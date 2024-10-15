// Components
import { Component } from '@angular/core';

// Services
import { HeaderService } from '../../../core/services/header.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private readonly headerService: HeaderService) {
    this.pHeaderService = headerService;
  }

  public pHeaderService;
}
