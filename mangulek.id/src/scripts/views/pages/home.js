import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
    <div class="image-hero">
    <img src="./hero-image_4.jpg" >
    </div>
      `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    // eslint-disable-next-line no-unused-vars
    const list = await RestaurantSource.listRestaurant();
    console.log(list);
  },
};

export default Home;
