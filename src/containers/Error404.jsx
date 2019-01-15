import React from 'react';

// node modules
import PropTypes from 'prop-types';

// components
import { ColumnContainer } from './components/ContainerStyles';
import { Image } from './components/ImageStyles';
import { ParaText } from './components/TextStyles';

export default class Error404 extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  componentDidMount() {
    switch (this.props.location.pathname) {
      case '/apply':
        this.props.history.replace('/app');
        break;
      default:
        this.error404 = setTimeout(
          function() {
            this.props.history.replace('/');
          }.bind(this),
          3000
        );
        break;
    }
  }

  render() {
    document.title = 'Error :( - Pi Sigma Epsilon | Zeta Chi Chapter';

    return (
      <ColumnContainer className="py-1q px-0">
        <ParaText>Sorry, that page does not exist. Enjoy our site!</ParaText>
        <Image
          src="https://res.cloudinary.com/berkeleypse-tech/image/upload/v1547520282/error404.png"
          alt="Page not found."
          height="500px"
          width="500px"
        />
      </ColumnContainer>
    );
  }
}
