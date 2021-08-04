import ShopActionsType from './shop.types.js';

export const updateCollections = (collectionsMap) => ({
    type: ShopActionsType.UPDATE_COLLECTIONS,
    payload: collectionsMap,
});
