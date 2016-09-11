import React, { PropTypes, Component } from 'react';
import placesAutocompleteDataset from 'places.js/autocompleteDataset.js';
import algoliasearch from 'algoliasearch';
import autocomplete from 'autocomplete.js';

export default class PlacesInput extends Component {
  static propTypes = {
    client : PropTypes.object.isRequired,
    index : PropTypes.string.isRequired,
    onSelect : PropTypes.func.isRequired,
    displayKey : PropTypes.string.isRequired,
    customHeader : PropTypes.string.isRequired,
    placesHeader : PropTypes.string.isRequired,
    customHitsPerPage : PropTypes.number.isRequired,
    placesHitsPerPage : PropTypes.number.isRequired,
    customClass : PropTypes.string
  }
  constructor (props) {
    super(props);

    this.index = this.props.client.initIndex(this.props.index);

    this.customDataset = {
      source : autocomplete.sources.hits(this.index, { hitsPerPage : this.props.customHitsPerPage }),
      displayKey : this.props.displayKey,
      templates : {
        header : this.props.customHeader
      }
    }

    this.placesDataset = placesAutocompleteDataset({
      algoliasearch : algoliasearch,
      templates : {
        header : this.props.placesHeader
      },
      hitsPerPage : this.props.placesHitsPerPage
    });

  }
  componentDidMount () {
    autocomplete(document.querySelector('#alg-places-input'), {
      cssClasses : { prefix : 'alg-places' }
    }, [
      this.placesDataset,
      this.customDataset
    ]).on('autocomplete:selected', (event, suggestion, dataset) => {
      if (suggestion) {
        this.props.onSelect(event, suggestion, dataset);
      }
    });
  }
  render () {
    return (
      <div>
        <input type='search' id='alg-places-input' className={this.props.customClass}/>
      </div>
    )
  }
}
