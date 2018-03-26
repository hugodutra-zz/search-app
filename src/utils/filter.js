import data from '../api/data.json';

function containsText(item, term) {
    const filterText = term.toUpperCase();
    const tourTitle = item.title.toUpperCase();

    return tourTitle.includes(filterText);
}

function filterByText(item, terms) {
    const cleanSearchText = terms.replace(/[-'`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    const searchTextArray = cleanSearchText.split(' ');
    
    const containsAllTerms = searchTextArray.map(term => containsText(item, term));

    return !containsAllTerms.includes(false);
}

function filterForOffer(item) {
    return item.isSpecialOffer;
}

function filterByPrice(item, maxPrice) {
    return Number(item.price) <= Number(maxPrice);
}

function filterByRating(item, minRating) {
    return Number(item.rating) >= Number(minRating);
}

export default function filter(filters) {
    let results = data.tours;

    if (filters.searchField) {
        results = results.filter(item => filterByText(item, filters.searchField));
    }
    
    if (filters.offersInput) {
        results = results.filter(filterForOffer)
    }

    if (filters.maxPrice) {
        results = results.filter(item => filterByPrice(item, filters.maxPrice))
    }

    if (filters.minRating) {
        results = results.filter(item => filterByRating(item, filters.minRating))
    }

    return results;
}