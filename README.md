# react-custom-places-input
An ES6 react component for combining custom Algolia results with Algolia Places. This component allows you to use results from an Algolia Index along with Algolia Places results.

## Installation
```
npm install react-custom-places-input --save
```

## Usage
```javascript
import React, { Component } from 'react';
import PlacesInput from 'react-custom-places-input';
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

## Props
* client: an instantiation of the algoliasearch client
* index: the index you want to include in the places results
* onSelect: the function that will be ran upon a result being selected
* displayKey: the field in your index you want displayed in the results
* customHeader: header text you want displayed above your list of results
* placesHeader: header text you want displayed above the places results
* customHitsPerPage: number of your custom hits you want shown per query
* placesHitsPerPage: number of places hits you want shown per query
* customClass: a class to apply to the <input> field generated

## Dependencies
* react
* algoliasearch
* places.js
* autocomplete.js
