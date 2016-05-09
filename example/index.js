// Demo features of the react-climb-social

import React from 'react';
import ReactDOM from 'react-dom';
import { ColumnView, RegularSquareView, ClimbView } from 'react-climb-social';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './style.css';

const collectionId = process.env.COLLECTION_ID;
const domain = process.env.API_DOMAIN;

const App = () => {
  return (
    <div className='clearfix'>

      <h1>React Climb Social</h1>

      <Tabs>
        <TabList>
          <Tab>List View (Default)</Tab>
          <Tab>Column View</Tab>
          <Tab>Square View</Tab>
          <Tab>Custom Card</Tab>
          <Tab>HTML embed</Tab>
        </TabList>

        <TabPanel>
          <h2>Default</h2>
          <ClimbView
            collectionId={collectionId}
            domain={domain}
          />
        </TabPanel>

        <TabPanel>
          <h2>Column View</h2>
          <ClimbView
            collectionId={collectionId}
            domain={domain}
            View={ColumnView}
          />
        </TabPanel>

        <TabPanel>
          <h2>Square View</h2>
          <ClimbView
            collectionId={collectionId}
            domain={domain}
            View={RegularSquareView}
          />
        </TabPanel>

        <TabPanel>
          <h2>Custom Card</h2>
          <p>TBC</p>
          <ClimbView
            collectionId={collectionId}
            domain={domain}
            Card={() => <div />}
          />
        </TabPanel>

        <TabPanel>
          <h2>HTML Embed</h2>
          <p>TBC</p>
          <div
            className="Climb"
            data-collection-id={collectionId}
            data-limit="3"
            data-view="columnView"
          />
        </TabPanel>

      </Tabs>

    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
