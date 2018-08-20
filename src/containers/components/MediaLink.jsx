import React from 'react';

// node modules
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MediaLink = ({ iconKey, href }) => {
  return (
    <Anchor
      className="my-0 mx-0h"
      href={`${ICON_MAP[iconKey].url}${href}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={ICON_MAP[iconKey].class} aria-hidden="true" />
    </Anchor>
  );
};

export default MediaLink;

const ICON_MAP = {
  linkedin: {
    url: 'https://linkedin.com/in/',
    class: 'fab fa-linkedin-in'
  },
  github: {
    url: 'https://github.com/',
    class: 'fab fa-github'
  },
  medium: {
    url: 'https://medium.com/@',
    class: 'fab fa-medium-m'
  },
  website: {
    url: '',
    class: 'fas fa-link'
  },
  twitter: {
    url: 'https://twitter.com/',
    class: 'fab fa-twitter'
  }
};

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
  href: PropTypes.string.isRequired,
  iconKey: PropTypes.string.isRequired
};
