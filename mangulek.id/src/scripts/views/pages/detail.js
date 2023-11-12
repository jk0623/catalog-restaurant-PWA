import RestaurantSource from '../../data/restaurant-source';
import UrlHandler from '../../routes/url-handler';
import LikeButton from '../../utils/like-button-initiator';
import { detailOfRestaurant } from '../templates/template-creator';

const Detail = {
  async render() {
    return `

    <div class="resto_container" id="detailResto"></div>   
  <div id="likeButtonContainer"></div> 
        
      `;
  },

  async afterRender() {
    // eslint-disable-next-line no-unused-vars
    const url = UrlHandler.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#detailResto');
    restoContainer.innerHTML = detailOfRestaurant(restaurant);

    LikeButton.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
        
      },
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
