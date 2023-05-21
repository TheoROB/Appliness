import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associations',
  templateUrl: './associations.page.html',
  styleUrls: ['./associations.page.scss'],
})
export class AssociationsPage implements OnInit {
  images: string[] = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'çàuàçu', 'eryfzseyz', 'iuiuyiuy', 'iuhyiuy']; // Vos images
  imagesPerPage = 4; // Nombre d'images à afficher par page
  currentPage = 0; // Page actuelle

  constructor() { }

  ngOnInit() {
  }

  getDisplayedImages(): string[] {
    const startIndex = this.currentPage * this.imagesPerPage;
    const endIndex = startIndex + this.imagesPerPage;
    return this.images.slice(startIndex, endIndex);
  }

  showNextPage() {
    if ((this.currentPage + 1) * this.imagesPerPage < this.images.length) {
      this.currentPage++;
    }
  }

  showPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  hasPreviousPage(): boolean {
    return this.currentPage > 0;
  }

  hasNextPage(): boolean {
    const endIndex = this.currentPage * this.imagesPerPage + this.imagesPerPage;
    return endIndex < this.images.length;
  }
}
