const SORT_BY_FOOD = 'SORT_BY_FOOD';
const SORT_BY_ELECTRONICS = 'SORT_BY_ELECTRONICS';
const SORT_BY_SUPPLIES = 'SORT_BY_SUPPLIES';
const SORT_BY_BOOKS = 'SORT_BY_BOOKS';
const SORT_BY_TOYS = 'SORT_BY_TOYS';
export const sortByFood = payload => ({
    type: SORT_BY_FOOD,
    payload
});
export const sortByElectronics = payload => ({
    type: SORT_BY_ELECTRONICS,
    payload
});
export const sortBySupplies = payload => ({
    type: SORT_BY_SUPPLIES,
    payload
});
export const sortByBooks = payload => ({
    type: SORT_BY_BOOKS,
    payload
});
export const sortByToys = payload => ({
    type: SORT_BY_TOYS,
    payload
});