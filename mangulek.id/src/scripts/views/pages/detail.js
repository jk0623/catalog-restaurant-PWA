import RestaurantSource from '../../data/restaurant-source';
import UrlHandler from '../../routes/url-handler';

const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
      `;
  },

  async afterRender() {
    // eslint-disable-next-line no-unused-vars
    const url = UrlHandler.parseActiveUrlWithCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant);
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
