import { MenuItem, MenuCategory } from '../data/menuData';

/**
 * Filter menu items by category. If category is 'all', returns all items.
 */
export function filterMenuByCategory(
  items: MenuItem[],
  category: MenuCategory | 'all'
): MenuItem[] {
  if (category === 'all') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

/**
 * Search menu items by query across name, description, and ingredients.
 */
export function searchMenuItems(items: MenuItem[], query: string): MenuItem[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return items;
  }

  return items.filter((item) => {
    const matchName = item.name.toLowerCase().includes(normalizedQuery);
    const matchDesc = item.description.toLowerCase().includes(normalizedQuery);
    const matchIngredients = item.ingredients?.some((ing) =>
      ing.toLowerCase().includes(normalizedQuery)
    );
    const matchCategory = item.category.toLowerCase().includes(normalizedQuery);

    return matchName || matchDesc || matchIngredients || matchCategory;
  });
}

/**
 * Retrieve dishes flagged as featured (star dishes).
 */
export function getFeaturedDishes(items: MenuItem[]): MenuItem[] {
  return items.filter((item) => item.isFeatured);
}

/**
 * Extract unique list of verified allergens from all menu items.
 */
export function getAllergenList(items: MenuItem[]): string[] {
  const set = new Set<string>();
  items.forEach((item) => {
    item.allergens?.forEach((allergen) => set.add(allergen));
  });
  return Array.from(set).sort();
}
