import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import { selectCollections } from '../../redux/shop/shop.selector';
const ShopPage = ({ collections }) => {
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
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
