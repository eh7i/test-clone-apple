import React from 'react';
import PropTypes from 'prop-types';
import PageNav from './PageNav';
import PageMain from './PageMain';

const propsTypes = {
  fixed: PropTypes.bool,
};

const defaultProps = {
  fixed: false,
};

function Page(props) {
  const {fixed, children} = props;

  return (
    <React.Fragment>
      <PageNav fixed={fixed} />
      <PageMain fixed={fixed}>{children}</PageMain>
    </React.Fragment>
  );
}

Page.propsTypes = propsTypes;
Page.defaultProps = defaultProps;

export default Page;
