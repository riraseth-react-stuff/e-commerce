import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`}>
        <CollectionsOverview></CollectionsOverview>
      </Route>
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      ></Route>
    </div>
  );
};

export default withRouter(ShopPage);

// used component={} so don't have to use withRouter in CategoryPage
