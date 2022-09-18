import * as React from 'react';

export const SearchContext = React.createContext({});
export const SearchTextProvider = SearchContext.Provider;
export const SerachTextConsumer = SearchContext.Consumer;