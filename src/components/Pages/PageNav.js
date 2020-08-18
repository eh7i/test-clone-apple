import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PageNav.module.scss';

const propsTypes = {
  fixed: PropTypes.bool,
};

const defaultProps = {
  fixed: false,
};

const cx = classNames.bind(styles);
const classNameLink = 'nav-item__link';

const navItems = [
  {
    className: cx(classNameLink, {
      [classNameLink + '--hidden']: true,
      [classNameLink + '--home']: true,
    }),
    href: 'https://www.apple.com',
    children: 'Apple Home',
    title: 'Apple Home',
  },
  {
    className: cx(classNameLink),
    href: 'https://www.apple.com/mac',
    children: 'Mac',
    title: 'Mac',
  },
  {
    className: cx(classNameLink),
    href: 'https://www.apple.com/iPad',
    children: 'iPad',
    title: 'iPad',
  },
  {
    className: cx(classNameLink),
    href: 'https://www.apple.com/iPad',
    children: 'iPhone',
    title: 'iPhone',
  },
  {
    className: cx(classNameLink),
    href: 'https://www.apple.com/watch',
    children: 'Watch',
    title: 'Watch',
  },
  {
    className: cx(classNameLink),
    href: 'https://www.apple.com/tv',
    children: 'TV',
    title: 'TV',
  },
  {
    className: cx(classNameLink),
    href: 'https://www.apple.com/music',
    children: 'Music',
    title: 'Music',
  },
  {
    className: cx(classNameLink),
    href: 'https://www.apple.com/support',
    children: 'Support',
    title: 'Support',
  },
  {
    className: cx(classNameLink, {
      [classNameLink + '--hidden']: true,
      [classNameLink + '--search']: true,
    }),
    href: 'https://www.apple.com/search',
    children: 'Search',
    title: 'Search',
  },
  {
    className: cx(classNameLink, {
      [classNameLink + '--hidden']: true,
      [classNameLink + '--bag']: true,
    }),
    href: 'https://www.apple.com/shop/goto/bag',
    children: 'Shopping Bag',
    title: 'Shopping Bag',
  },
];

function PageNav(props) {
  const {fixed} = props;

  return (
    <nav
      className={cx('nav', {
        'nav--fixed': fixed,
      })}
    >
      <div className={cx('nav-inner')}>
        <ul className={cx('nav-list')}>
          {navItems.map((item) => {
            const {title, children, ...rest} = item;
            return (
              <li key={title} className={cx('nav-list__item')}>
                {React.createElement(
                  'a',
                  {title: title, ...rest},
                  <span>{children}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

PageNav.propTypes = propsTypes;
PageNav.defaultProps = defaultProps;

export default PageNav;
