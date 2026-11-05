import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterMenuByCategory,
  searchMenuItems,
  getFeaturedDishes,
  getAllergenList,
} from './menuUtils';
import { MENU_ITEMS } from '../data/menuData';

test('filterMenuByCategory returns all items when category is all', () => {
  const result = filterMenuByCategory(MENU_ITEMS, 'all');
  assert.equal(result.length, MENU_ITEMS.length);
});

test('filterMenuByCategory filters correctly for pintxos and medias', () => {
  const pintxos = filterMenuByCategory(MENU_ITEMS, 'pintxos');
  assert.ok(pintxos.length > 0);
  pintxos.forEach((item) => assert.equal(item.category, 'pintxos'));

  const medias = filterMenuByCategory(MENU_ITEMS, 'medias');
  assert.ok(medias.length > 0);
  medias.forEach((item) => assert.equal(item.category, 'medias'));
});

test('searchMenuItems finds items by dish name, description, or ingredients', () => {
  const queryGambas = searchMenuItems(MENU_ITEMS, 'gambas');
  assert.ok(queryGambas.length >= 1);
  assert.ok(queryGambas.some((item) => item.name.includes('Gambas')));

  const queryChaufa = searchMenuItems(MENU_ITEMS, 'chaufa');
  assert.ok(queryChaufa.length >= 1);
  assert.ok(queryChaufa.some((item) => item.name.toLowerCase().includes('chaufa')));

  const emptySearch = searchMenuItems(MENU_ITEMS, '');
  assert.equal(emptySearch.length, MENU_ITEMS.length);

  const nonExistent = searchMenuItems(MENU_ITEMS, 'xyznonexistent123');
  assert.equal(nonExistent.length, 0);
});

test('getFeaturedDishes returns the star dishes', () => {
  const featured = getFeaturedDishes(MENU_ITEMS);
  assert.ok(featured.length >= 3);
  assert.ok(featured.every((item) => item.isFeatured === true));
  const names = featured.map((d) => d.name);
  assert.ok(names.some((n) => n.includes('Gambas')));
  assert.ok(names.some((n) => n.includes('Foie')));
  assert.ok(names.some((n) => n.includes('chaufa')));
});

test('getAllergenList aggregates unique verified allergens correctly', () => {
  const allergens = getAllergenList(MENU_ITEMS);
  assert.ok(allergens.includes('Crustáceos'));
  assert.ok(allergens.includes('Gluten'));
  assert.ok(allergens.includes('Lácteos'));
  // Ensure no duplicates
  const uniqueCount = new Set(allergens).size;
  assert.equal(allergens.length, uniqueCount);
});
