import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';
import FavoriteRestoIdb from '../data/favorite-resto-idb';

const LikeButton = {
  // eslint-disable-next-line no-empty-function
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  // eslint-disable-next-line no-empty-function
  async _renderButton() {
    const { id } = this.restaurant;

    if (await this.isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestoIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putMovie(this._restaurant);
      this._renderButton();
    });
  },
  // eslint-disable-next-line no-dupe-keys
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteMovie(this._restaurant.id);
      this._renderButton();
    });
  },

};

export default LikeButton;
