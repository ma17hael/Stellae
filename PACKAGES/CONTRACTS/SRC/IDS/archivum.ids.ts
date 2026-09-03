declare const mediaItemIdBrand: unique symbol;
declare const screeningIdBrand: unique symbol;
declare const mediaSuggestionIdBrand: unique symbol;
declare const mediaVoteIdBrand: unique symbol;

export type MediaItemId = string & {
    readonly [mediaItemIdBrand]: true;
};

export type ScreeningId = string & {
    readonly [screeningIdBrand]: true;
};

export type MediaSuggestionId = string & {
    readonly [mediaSuggestionIdBrand]: true;
};

export type MediaVoteId = string & {
    readonly [mediaVoteIdBrand]: true;
};