import React from 'react';
import ReactDOM from 'react-dom';
import { ListView, ColumnView, RegularSquareView, ClimbView, StackedCard } from 'react-climb-social';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-climb-social/styles/main.css';
import './style.css';

const App = () => {
  return (
    <div className='clearfix'>

      <h1>
        React Climb Social
      </h1>

      <Tabs>

        <TabList>
          <Tab>Default</Tab>
          <Tab>RegularSquareView</Tab>
          <Tab>Custom formatting</Tab>
          <Tab>ColumnView</Tab>
          <Tab>HTML</Tab>
        </TabList>

        <TabPanel>
          <ClimbView collectionId='56b4b06908216f0cac62a86b' Card={ StackedCard } />
        </TabPanel>

        <TabPanel>
          <ClimbView collectionId='56b4b06908216f0cac62a86b'
                     View={ RegularSquareView } />
        </TabPanel>

        <TabPanel>
          <h2>List View</h2>

          <ClimbView collectionId='56b4b06908216f0cac62a86b'
                     View={ ListView } />


        </TabPanel>

        <TabPanel>
          <h2>Column View</h2>
          <ClimbView collectionId='56b4b06908216f0cac62a86b'
                     View={ ColumnView } />

        </TabPanel>

        <TabPanel>
          <div className="Climb"
               data-collection-id="56b4b06908216f0cac62a86b"
               data-limit="3"
               data-view="columnView"></div>
        </TabPanel>

      </Tabs>


    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('container')
);