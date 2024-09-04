import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
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

  resetFilter(): void {
    this.filter = '';
  }

  navigateToQuiz(categoryId: number): void {
    this.router.navigate(['/quiz', categoryId]);
  }
}
