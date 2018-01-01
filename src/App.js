import React, { Component } from 'react';
import {
  InstantSearch,
  SearchBox,
  Highlight,
  SortBy,
  Hits,
  Pagination,
  RefinementList
} from 'react-instantsearch/dom';

const Hit = ({hit}) =>
<div className='hit'>
    <div className='hit-image'>
      <img src={hit.image}/>
    </div>
    <div className='hit-content'>
      <div className='hit-name'>
        <Highlight attributeName="name" hit={hit}/>
      </div>
      <div className='hit-description'>
        <Highlight attributeName="description" hit={hit}/>
      </div>
    </div>
</div>


const Content = () =>
<div className="content">
  <div className='info'>
  </div>

<Hits hitComponent={Hit}/>
<div className='Pagination'>
  <Pagination showLast/>
</div>
</div>

class App extends Component {
  render() {
    return (
    <InstantSearch
      appId="latency"
apiKey="6be0576ff61c053d5f9a3225e2a90f76"
indexName="ikea">
<img src='hype.png' id='logo'/>
    <header className="header">
    <br/>
    <SearchBox translations={{placeholder:'Search'}}/>
    </header>

    <main>
      <Content/>
    </main>

    </InstantSearch>
    );
  }
}

export default App;
