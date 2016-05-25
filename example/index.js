// Demo features of the react-climb-social

import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { ClimbView, ColumnLayout, SquareLayout, SlideshowLayout } from '../src';

const collectionId = process.env.COLLECTION_ID;
const hostname = process.env.API_HOSTNAME;


const App = () => (
  <div className="clearfix">
    <h1>React Climb Social</h1>

    <Tabs>
      <TabList>
        <Tab>List View (Default)</Tab>
        <Tab>List View (Styled)</Tab>
        <Tab>Column View</Tab>
        <Tab>Slideshow</Tab>
        <Tab>Square View</Tab>
        <Tab>Custom Card</Tab>
      </TabList>


      <TabPanel
        className="Example"
      >
        <h2>List View (Default)</h2>
        <p><code>.Example</code></p>
        <ClimbView
          collectionId={collectionId}
          hostname={hostname}
        />
      </TabPanel>

      <TabPanel
        className="Example Example--listStyled"
      >
        <h2>List View (Styled)</h2>
        <p><code>.Example.Example--listStyled</code></p>
        <ClimbView
          collectionId={collectionId}
          hostname={hostname}
        />
      </TabPanel>

      <TabPanel
        className="Example Example--column"
      >
        <h2>Column View</h2>
        <p><code>.Example.Example--column</code></p>
        <ClimbView
          collectionId={collectionId}
          hostname={hostname}
          View={ColumnLayout}
        />
      </TabPanel>

      <TabPanel
        className="Example Example--slideShow"
      >
        <h2>Slideshow</h2>
        <p><code>.Example.Example--slideShow</code></p>
        <ClimbView
          collectionId={collectionId}
          hostname={hostname}
          duration={2000}
          View={SlideshowLayout}
        />
      </TabPanel>


      <TabPanel
        className="Example Example--square"
      >
        <h2>Square View</h2>
        <p><code>.Example.Example--square</code></p>
        <ClimbView
          collectionId={collectionId}
          hostname={hostname}
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
          hostname={hostname}
          Card={() => <div />}
        />
      </TabPanel>

    </Tabs>
  </div>
);

const containerRoot = document.getElementById('container');

if (containerRoot) {
  ReactDOM.render(<App />, containerRoot);
}
