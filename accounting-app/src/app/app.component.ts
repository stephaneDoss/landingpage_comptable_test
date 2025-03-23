import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { PricingSectionComponent } from './components/pricing-section/pricing-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { CTASectionComponent } from './components/cta-section/cta-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    FeaturesSectionComponent,
    TestimonialsSectionComponent,
    PricingSectionComponent,
    FooterSectionComponent,
    HeaderSectionComponent,
    CTASectionComponent
  ],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {}
