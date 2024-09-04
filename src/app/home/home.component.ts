import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  playerName: string = '';
  categories: any[] = [];
  selectedCategoryId: number | null = null;
  filter: string = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  resetFilter(): void {
    this.filter = '';
  }

  navigateToQuiz(): void {
    if (this.playerName && this.selectedCategoryId) {
      this.router.navigate(['/quiz', this.selectedCategoryId, this.playerName]);
    }
  }
}
