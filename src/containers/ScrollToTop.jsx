import { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  static propTypes = {
    children: PropTypes.element,
    location: PropTypes.object
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
