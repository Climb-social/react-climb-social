// Demo features of the react-climb-social

import React from 'react';
import ReactDOM from 'react-dom';
import { ColumnLayout, SquareLayout, ClimbView } from '../src';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// import './style.css';

const collectionId = process.env.COLLECTION_ID;
const domain = process.env.API_DOMAIN;

const App = () => (
  <div className="clearfix">

    <h1>React Climb Social</h1>

    <Tabs>
      <TabList>
        <Tab>List View (Default)</Tab>
        <Tab>List View (Styled)</Tab>
        <Tab>Column View</Tab>
        <Tab>Square View</Tab>
        <Tab>Custom Card</Tab>
        <Tab>HTML embed</Tab>
      </TabList>


      <TabPanel
        className="Example"
      >
        <h2>List View (Default)</h2>
        <p><code>.Example</code></p>
        <ClimbView
          collectionId={collectionId}
          domain={domain}
        />
      </TabPanel>

      <TabPanel
        className="Example Example--listStyled"
      >
        <h2>List View (Styled)</h2>
        <p><code>.Example.Example--listStyled</code></p>
        <ClimbView
          collectionId={collectionId}
          domain={domain}
        />
      </TabPanel>

      <TabPanel
        className="Example Example--column"
      >
        <h2>Column View</h2>
        <p><code>.Example.Example--column</code></p>
        <ClimbView
          collectionId={collectionId}
          domain={domain}
          View={ColumnLayout}
        />
      </TabPanel>


      <TabPanel
        className="Example Example--square"
      >
        <h2>Square View</h2>
        <p><code>.Example.Example--square</code></p>
        <ClimbView
          collectionId={collectionId}
          domain={domain}
          View={SquareLayout}
        />
      </TabPanel>


      <TabPanel
        className="Example Example--customCard"
      >
        <h2>Custom Card</h2>
        <p><code>.Example.Example--customCard</code></p>
        <p><strong>TBC</strong></p>
        <ClimbView
          collectionId={collectionId}
          domain={domain}
          Card={() => <div />}
        />
      </TabPanel>


      <TabPanel
        className="Example Example--embed"
      >
        <h2>HTML Embed</h2>
        <p><code>.Example.Example--embed</code></p>
        <p><strong>TBC</strong></p>
        <div
          className="Climb"
          data-collection-id={collectionId}
          data-limit="3"
          data-view="ColumnLayout"
        />
      </TabPanel>

    </Tabs>

  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
