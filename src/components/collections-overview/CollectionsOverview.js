import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/CollectionPreview';

import { selectCollections } from '../../redux/shop/shop.selector';

export const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
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

export default connect(mapStateToProps)(CollectionsOverview);
