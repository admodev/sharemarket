// Modules
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

// Services
import { HeaderService } from '../../../core/services/header.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() currentTheme!: string;

  constructor(
    private readonly headerService: HeaderService,
    private readonly themeService: ThemeService
  ) {
    this.pHeaderService = headerService;
    this.pThemeService = themeService;
  }

  public pHeaderService;
  public pThemeService;

  ngOnInit() {
    this.pThemeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
