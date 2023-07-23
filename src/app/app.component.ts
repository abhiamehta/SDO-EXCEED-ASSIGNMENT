import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(e: any) {
    const navBar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTop');
    if (navBar) {
      if (window.scrollY > 500) {
        navBar.classList.remove('bg-transparent');
        navBar.classList.remove('navbar-dark');
        navBar.classList.add('fixed-top');
        navBar.classList.add('bg-light');
        navBar.classList.add('navbar-light');
        if (scrollTopBtn) {
          scrollTopBtn.classList.remove('d-none');
        }
        // add padding top to show content behind navbar
        const navbar_height = navBar.offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        navBar.classList.remove('fixed-top');
        navBar.classList.remove('bg-light');
        navBar.classList.remove('navbar-light');
        navBar.classList.add('navbar-dark');
        navBar.classList.add('bg-transparent');
        if (scrollTopBtn) {
          scrollTopBtn.classList.add('d-none');
        }
        // remove padding top from body
        document.body.style.paddingTop = '0';
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
