import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

import SHOP_DATA from './ShopData';
export class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection) => {
          return (
            <CollectionPreview
              key={collection.id}
              {...collection}
            ></CollectionPreview>
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
