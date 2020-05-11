import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';
import '../../components/menu-item/MenuItem.scss';
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((section) => {
        return <MenuItem key={section.id} {...section}></MenuItem>;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
