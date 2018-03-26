import React, { Component } from 'react';
import filterMethod from './filter';

export default class SearchApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchField: '',
            offersInput: false,
            maxPrice: '',
            minRating: '',
        }
    }

    render() {
        const results = filterMethod(this.state);

        return (
            <div>
                <h1>Book tickets for top attractions around the world</h1>
                
                <div>
                    <label htmlFor="search-field">Search</label>
                    <input
                        id="search-field"
                        name="search-field"
                        type="text"
                        value={ this.state.searchField }
                        onChange={ e => this.setState({ searchField: e.target.value }) }
                    />
                </div>

                <div>
                    <label htmlFor="offers">Best offers</label>
                    <input
                        type="checkbox"
                        id="offers"
                        name="offers"
                        checked={ this.state.offersInput }
                        onChange={ () => this.setState({ offersInput: !this.state.offersInput }) }
                    />
                </div>
                
                <div>
                    <label htmlFor="max-price">Maximum price</label>
                    
                    <input
                        type="number"
                        id="max-price"
                        name="max-price"
                        value={ this.state.maxPrice }
                        onChange={ e => this.setState({ maxPrice: e.target.value }) }                        
                    />
                </div>
                
                <div>
                    <label htmlFor="">Minimum rating</label>
                    
                    <input
                        type="number"
                        id="min-rating"
                        name="min-rating"
                        value={ this.state.minRating }
                        onChange={ e => this.setState({ minRating: e.target.value }) }
                        max={5}
                        min={0}
                        step={0.1}
                    />
                </div>

                <div>
                    {results.map(item => {
                        return (<div>
                            <hr/>
                            <p>{item.title}</p>
                            <p>$ {item.price}</p>
                            <p>rating {item.rating}</p>
                        </div>)
                    })}
                </div>

            </div>
        )
    }
}
