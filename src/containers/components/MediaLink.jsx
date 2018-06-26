import React from 'react';

// node modules
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MediaLink = props => {
  return (
    <Anchor
      className="my-0 mx-0h"
      href={`${ICON_MAP[props.iconKey].href}${props.href}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={ICON_MAP[props.iconKey].class} aria-hidden="true" />
    </Anchor>
  );
};

const ICON_MAP = {
  linkedin: {
    href: 'https://linkedin.com/in/',
    class: 'fab fa-linkedin-in'
  },
  github: {
    href: 'https://github.com/',
    class: 'fab fa-github'
  },
  medium: {
    href: 'https://medium.com/@',
    class: 'fab fa-medium-m'
  },
  website: {
    href: '',
    class: 'fas fa-link'
  },
  twitter: {
    href: 'https://twitter.com/',
    class: 'fab fa-twitter'
  }
};

export default MediaLink;

const Anchor = styled.a`
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #895fad;
  border-radius: 3px;
  color: #895fad;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  height: 30px;
  width: 30px;
  padding: 0.3125rem;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background-color: #895fad;
    color: #fff;
  }
`;

MediaLink.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired
};
