import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PageMain.module.scss';

const propsTypes = {
  fixed: PropTypes.bool,
};

const defaultProps = {
  fixed: false,
};

const cx = classNames.bind(styles);

function PageMain(props) {
  const {fixed, children} = props;

  return (
    <main className={cx('main', {'main--fixed-nav': fixed})} role="main">
      {children}
    </main>
  );
}

PageMain.propsTypes = propsTypes;
PageMain.defaultProps = defaultProps;

export default PageMain;
