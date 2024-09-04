import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(categories: any[], searchText: string): any[] {
    if (!categories || !searchText) {
      return categories;
    }
    return categories.filter(category =>
      category.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
