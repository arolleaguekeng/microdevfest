import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrls: ['./navbar.component.css'],
  animations: [],
})
export class NavbarComponent {
  menuOpen = false;
  showMenu = false;

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.showMenu = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('nav')) {
      this.closeMenu();
    }
  }
}
