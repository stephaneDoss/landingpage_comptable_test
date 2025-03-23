import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-section.component.html',
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #f8f9fa; /* Couleur de fond mise à jour */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre ajustée */
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1200px; /* Largeur maximale */
      margin: 0 auto; /* Centrer horizontalement */
    }
    .logo {
      font-size: 1.8rem; /* Taille ajustée */
      font-weight: bold;
      color: #007bff; /* Couleur mise à jour */
      font-family: 'Arial', sans-serif; /* Police mise à jour */
    }
    .nav {
      display: flex;
      gap: 2rem; /* Espacement ajusté */
      align-items: center;
    }
    .nav a {
      text-decoration: none;
      color: #333;
      font-size: 1rem;
      font-weight: 500; /* Poids de police ajusté */
      transition: color 0.3s ease; /* Transition pour hover */
    }
    .nav a:hover {
      color: #007bff; /* Couleur au survol */
    }
    .btn-login, .btn-signup {
      padding: 0.6rem 1.2rem; /* Espacement ajusté */
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem; /* Taille de police ajustée */
      font-family: 'Arial', sans-serif; /* Police mise à jour */
    }
    .btn-login {
      background-color: transparent;
      color: #333;
      border: 1px solid #333; /* Bordure ajoutée */
    }
    .btn-login:hover {
      background-color: #f1f1f1; /* Couleur au survol */
    }
    .btn-signup {
      background-color: #007bff;
      color: #fff;
      border: 1px solid #007bff; /* Bordure ajoutée */
    }
    .btn-signup:hover {
      background-color: #0056b3; /* Couleur au survol */
    }
    @media (max-width: 768px) {
      .nav {
        flex-direction: column;
        gap: 1rem; /* Espacement ajusté pour mobile */
      }
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    nav a {
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    nav a:hover {
      color: #2563eb; /* Hover color for links */
    }
    button {
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    button:hover {
      text-decoration: underline;
    }
    .btn-signup {
      font-weight: bold;
      padding: 0.6rem 1.2rem;
      border-radius: 0.375rem;
    }
    nav {
      transition: all 0.3s ease;
    }
    nav.hidden {
      display: none;
    }
    nav.block {
      display: block;
    }
    @media (min-width: 1024px) {
      nav {
        display: flex !important;
      }
    }
    button:focus {
      outline: none;
    }
  `]
})
export class HeaderSectionComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu toggled:', this.isMenuOpen); 
  }
}
