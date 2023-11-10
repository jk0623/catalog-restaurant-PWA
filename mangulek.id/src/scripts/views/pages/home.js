import RestaurantSource from '../../data/restaurant-source';
// eslint-disable-next-line no-unused-vars
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return ` <hero></hero>
    <section class="content">
      <h2 class="content__heading">Explore Restaurant</h2>
      <div id="restaurants" class="restaurants">
        <div class="restaurants__list" id="restaurantsList">
          ${await this._renderRestaurants()}
        </div>
      </div>
    </section>
      `;
  },

  async _renderRestaurants() {
    const restaurants = await RestaurantSource.daftarRestoran();
    return restaurants
      .map((restaurant) => createRestaurantItemTemplate(restaurant))
      .join('');
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    // eslint-disable-next-line no-unused-vars
    const restaurants = await RestaurantSource.listRestaurant();
    return restaurants;
  },
};

export default Home;
