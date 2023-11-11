import RestaurantSource from '../../data/restaurant-source';
// eslint-disable-next-line no-unused-vars
import { templateOfItemRestaurant } from '../templates/template-creator';

const Home = {
  async render() {
    return ` <hero class="image-hero"><img src="./hero-image_4.jpg"></hero>
    <section class="content">
      <h2 class="caption-content">Let's start searching for your best restaurant</h2>
        <div class="resto_list" id="restaurantsList">
          ${await this._renderRestaurants()}
        </div>
    </section>
      `;
  },

  async _renderRestaurants() {
    const restaurants = await RestaurantSource.listRestaurant();
    return restaurants
      .map((restaurant) => templateOfItemRestaurant(restaurant))
      .join('');
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    return restaurants;
  },
};

export default Home;
