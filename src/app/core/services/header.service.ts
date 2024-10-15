// Modules
import { Injectable } from '@angular/core';

// Types
import { MenuLinks } from '../models/header.types';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private static readonly menuLinks: MenuLinks = [
    {
      title: 'Inicio',
      link: '/',
    },
    {
      title: 'Buscar',
      link: '/search',
    },
    {
      title: 'Mi Perfil',
      link: '/profile',
    },
  ];
  public menuLinksArray: MenuLinks = [];

  constructor() {
    this.menuLinksArray = HeaderService.menuLinks;
  }
}
