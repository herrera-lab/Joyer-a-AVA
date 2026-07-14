import { resolvePage } from './router.js';
import { homePage } from '../pages/home.js';
import { categoryPage } from '../pages/category.js';
import { productDetailPage } from '../pages/product-detail.js';
import { cartPage } from '../pages/cart.js';
import { contactPage } from '../pages/contact.js';

export function initApp() {
  const page = resolvePage();

  switch (page) {
    case 'home':
      homePage();
      break;
    case 'category':
      categoryPage();
      break;
    case 'product':
      productDetailPage();
      break;
    case 'cart':
      cartPage();
      break;
    case 'contact':
      contactPage();
      break;
    default:
      homePage();
  }
}
