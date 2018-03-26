import React, { Component } from 'react';
import filterMethod from './utils/filter';

import Wrapper from './components/Wrapper';
import {
    FormWrapper,
    TextInput,
    ControlGroup,
    FieldWrapper,
    SubmitButton,
    Label,
} from './components/Form/';

import { ResultsWrapper, ResultItem } from './components/ResultsList';

import { H1 } from './components/Text/';

export default class SearchApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchField: '',
            offersInput: false,
            maxPrice: '',
            minRating: '',
            results: [],
        }
    }

    filterResultsOnSubmit = (e) => {
        e.preventDefault();
        const results = filterMethod(this.state);

        this.setState({
            results: [ ...results ],
        });
    }

    render() {
        return (
            <Wrapper>
                <FormWrapper onSubmit={ this.filterResultsOnSubmit }>
                    <H1>Book tickets for top attractions around the world</H1>
                    <ControlGroup>
                        <Label htmlFor="search-field">Search for attractions:</Label>
                        <TextInput
                            id="search-field"
                            name="search-field"
                            type="text"
                            value={ this.state.searchField }
                            onChange={ e => this.setState({ searchField: e.target.value }) }
                        />
                    </ControlGroup>

                    <ControlGroup direction="row">
                        <FieldWrapper isFirst>
                            <Label htmlFor="max-price">Maximum price</Label>
                            
                            <TextInput
                                type="number"
                                id="max-price"
                                name="max-price"
                                value={ this.state.maxPrice }
                                onChange={ e => this.setState({ maxPrice: e.target.value }) }                        
                            />
                        </FieldWrapper>
                        <FieldWrapper>
                            <Label htmlFor="min-rating">Minimum rating</Label>
                            
                            <TextInput
                                type="number"
                                id="min-rating"
                                name="min-rating"
                                value={ this.state.minRating }
                                onChange={ e => this.setState({ minRating: e.target.value }) }
                                max={5}
                                min={0}
                                step={0.1}
                            />
                        </FieldWrapper>
                    </ControlGroup>
                    
                    <ControlGroup>
                        <Label htmlFor="offers">Show only special offers</Label>
                        <input
                            type="checkbox"
                            id="offers"
                            name="offers"
                            checked={ this.state.offersInput }
                            onChange={ () => this.setState({ offersInput: !this.state.offersInput }) }
                        />
                    </ControlGroup>
                    
                    <SubmitButton type="submit">
                        Search
                    </SubmitButton>
                </FormWrapper>
                <ResultsWrapper>
                    {this.state.results.map(item => {
                        return (
                            <ResultItem 
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        )
                    })}
                </ResultsWrapper>

            </Wrapper>
        )
    }
}
