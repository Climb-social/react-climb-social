import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import gtmParts from 'react-google-tag-manager';

class GoogleTagManager extends Component {

  componentDidMount() {
    this.evaluate(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.evaluate(newProps);
  }

  evaluate(props) {
    const { dataLayer, dataLayerName } = props;
    window[dataLayerName] = dataLayer;
    const node = ReactDOM.findDOMNode(this).childNodes[1];
    eval(node.textContent); // eslint-disable-line no-eval
  }

  render() {
    const { gtmId, dataLayerName, additionalEvents } = this.props;

    const gtm = gtmParts({
      id: gtmId,
      dataLayerName,
      additionalEvents,
    });

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
