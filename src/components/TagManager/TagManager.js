import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import gtmParts from 'react-google-tag-manager';

// BUG: Too many Google script tags are written to the DOM

class GoogleTagManager extends React.Component {

  componentDidMount() {
    this.evaluate();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) this.evaluate();
  }

  evaluate() {
    const { dataLayer, dataLayerName } = this.props;
    window[dataLayerName] = dataLayer;
    const node = ReactDOM.findDOMNode(this).childNodes[1];
    eval(node.textContent); // eslint-disable-line no-eval
  }

  render() {
    const { gtmId: id, dataLayerName, additionalEvents } = this.props;
    const gtm = gtmParts({ id, dataLayerName, additionalEvents });

    return (
      <div>
        {gtm.noScriptAsReact()}
        {gtm.scriptAsReact()}
      </div>
    );
  }
}

GoogleTagManager.defaultProps = {
  gtmId: 'GTM-NVT6ZP',
  additionalEvents: {},
  dataLayer: [],
  dataLayerName: 'dataLayer',
};

GoogleTagManager.propTypes = {
  gtmId: PropTypes.string.isRequired,
  dataLayerName: PropTypes.string,
  additionalEvents: PropTypes.object,
  dataLayer: PropTypes.array,
};

export default GoogleTagManager;
