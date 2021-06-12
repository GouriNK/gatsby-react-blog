import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"

import "./search.css"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div className="search-form">
        <input type="text" value={this.state.query} onChange={this.search} />
        <ul className="search-form-result-list">
          {this.state.results.map(page => (
            <li className="search-form-result-list-item" key={page.id}>
              <Link to={page.path}>{page.title}</Link>
              {/* {": " + page.tags.join(`,`)} */}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}