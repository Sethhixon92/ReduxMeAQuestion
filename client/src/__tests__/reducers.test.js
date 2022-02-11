import { reducer } from '../utils/reducers';

import {
  UPDATE_PRODUTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART
} from '../utils/actions';

// create a sample of what our global state will look like
const intialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
    cart: [
        {
          _id: '1',
          name: 'Soup',
          purchaseQuantity: 1
       }, 
       {
           _id: '2',
           name: 'Bread',
           purchaseQuantity: '2'
       }
    ],
    cartOpen: false
};

test('UPDATE_PRODUCTS', () => {
    let newState = reducer(intialState, {
        type: UPDATE_PRODUCTS,
        products: [{},{}]
    });

    expect(newState.porducts.length).toBe(2);
    expect(intialState.products.length).toBe(0);
});

test('UPDATE_CATEGORIES', () => {
    let newState = reducer(intialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(intialState.categories.length).toBe(1);
});

test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(intialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });

    expect(newState.currentCategory).toBe('2');
    expect(intialState.currentCategory).toBe('1');
});

test('ADD_TO_CART', () => {
    let newState = reducer(intialState, {
        type: ADD_TO_CART,
        product: { purchaseQuantity: 1 }
    });

    expect(newState.cart.length).toBe(3);
    expect(initialState.cart.length).toBe(2);
});

test('ADD_MULTIPLE_TO_CART', () => {
    let newState = reducer(intialState, {
        type: ADD_MULTIPLE_TO_CART,
        product: [{}, {}]
    });

    expect(newState.cart.length).toBe(4);
    expect(intialState.cart.length).toBe(2);
});

test('REMOVE_FROM_CART', () => {
    let newState1 = reducer(intialState, {
        type: REMOVE_FROM_CART,
        _id: '1'
    });

    //cart is still open
    expect(newState1.cartOpen).toBe(true);

    //the second item should be now be the first
    expect(newState1.cart.length).toBe(1);
    expect(newState1.cart[0]._id).toBe('2');

    let newState2 = reducer(newState1, {
        type: REMOVE_FROM_CART,
        _id: '2'
    });

    // cart is empty and closed
    expect(newState2.cartOpen).toBe(false);
    expect(newState2.cart.length).toBe(0);

    expect(intialState.cart.length).toBe(2);
});

test('UPDATE_CART_QUANTITY', () => {
    let newState = reducer(intialState, {
        type: UPDATE_CART_QUANTITY,
        _id: '1',
        purchaseQuantity: 3
    });

    expect(newState.cartOpen).toBe(true);
    expect(newState.cart[0].purchaseQuantity).toBe(3);
    expect(newState.cart[1].purchaseQuantity).toBe(2);

    expect(intialState.cartOpen).toBe(false);
});

test('CLEAR_CART', () => {
    let newState = reducer(intialState, {
        type: CLEAR_CART
    });

    expect(newState.cartOpen).toBe(false);
    expect(newState.cart.length).toBe(0);
    expect(intialState.cart.length).toBe(2);
});

test('TOGGLE_CART', () => {
    let newState = reducer(intialState, {
        type: TOGGLE_CART
    });

    expect(newState.cartOpen).toBe(true);
    expect(intialState.cartOpen).toBe(false);

    let newState2 = reducer(newState, {
        type: TOGGLE_CART
    });

    expect(newState2.cartOpen).toBe(false);
});