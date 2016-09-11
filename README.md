# react-custom-places-input
An ES6 react component for combining custom Algolia results with Algolia Places. This component allows you to use results from an Algolia Index along with Algolia Places results.

## Installation
```npm install react-custom-places-input --save
```

## Usage
```import React, { Component } from 'react';
import PlacesInput from './PlacesInput';
import algoliasearch from 'algoliasearch';

const algoliaClient = algoliasearch(YOUR_ALGOLIA_APP, YOUR_ALGOLIA_API_KEY);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results : [] }
  }
  newResults = (event, suggestion, dataset) => {
    // Do something with selected suggestion
  }
  render() {
    return (
      <div>
        <PlacesInput
          client={algoliaClient}
          index='MyIndex'
          onSelect={this.newResults}
          displayKey='name'
          customHeader='My Custom Header'
          placesHeader='Algolia Places'
          customHitsPerPage={5}
          placesHitsPerPage={5}
          customClass='my-custom-class'
          />
      </div>
    );
  }
}

export default App;
```

## Dependencies
* react
* algoliasearch
* places.js
* autocomplete.js
