import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { templateOfItemRestaurant } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
      <div class="resto_list" id="favList"></div>
  </section>
      `;
  },

  async afterRender() {
    const fav = await FavoriteRestoIdb.getAllRestaurant();
    const favContainer = document.querySelector('#favList');

    fav.forEach((restaurant) => {
      favContainer.innerHTML += templateOfItemRestaurant(restaurant);
    });
  },
};

export default Favorite;
