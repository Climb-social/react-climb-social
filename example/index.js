// Demo features of the react-climb-social

import React from 'react';
import ReactDOM from 'react-dom';
import { ListView, ColumnView, RegularSquareView, ClimbView, StackedCard } from '../src';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './style.css';

const COLLECTION_ID = '57308c212af2e605f81e53e2';
const API_DOMAIN = 'http://curate.vm-08.graph.uk';

const App = () => {
  return (
    <div className='clearfix'>

      <h1>
        React Climb Social
      </h1>

      <Tabs>

        <TabList>
          <Tab>List View (Default)</Tab>
          <Tab>Square View</Tab>
          <Tab>Column view</Tab>
          <Tab>Custom formatting</Tab>
          <Tab>HTML embed</Tab>
        </TabList>

        <TabPanel>
          <h2>Default</h2>
          <ClimbView
            collectionId={ COLLECTION_ID }
            Card={ StackedCard }
            domain={ API_DOMAIN }
          />
        </TabPanel>

        <TabPanel>
          <h2>Square View</h2>
          <ClimbView
            collectionId={ COLLECTION_ID }
            View={ RegularSquareView }
            domain={ API_DOMAIN }
          />
        </TabPanel>

        <TabPanel>
          <h2>Column View</h2>
          <ClimbView
            collectionId={ COLLECTION_ID }
            View={ ColumnView }
            domain={ API_DOMAIN }
          />
        </TabPanel>

        <TabPanel>
          <h2>List View</h2>
          <p>TBC</p>
          <ClimbView
            collectionId={ COLLECTION_ID }
            View={ ListView }
            domain={ API_DOMAIN }
          />
        </TabPanel>

        <TabPanel>
          <h2>HTML Embed</h2>
          <p>TBC</p>
          <div
            className="Climb"
            data-collection-id={ COLLECTION_ID }
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
