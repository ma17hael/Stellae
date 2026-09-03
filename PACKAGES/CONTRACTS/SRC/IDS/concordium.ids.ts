declare const communityProfileIdBrand: unique symbol;
declare const deityIdBrand: unique symbol;
declare const deityRankIdBrand: unique symbol;
declare const domainIdBrand: unique symbol;
declare const universeIdBrand: unique symbol;
declare const characterIdBrand: unique symbol;
declare const quoteIdBrand: unique symbol;
declare const communityEventIdBrand: unique symbol;

export type CommunityProfileId = string & {
    readonly [communityProfileIdBrand]: true;
};

export type DeityId = string & {
    readonly [deityIdBrand]: true;
};

export type DeityRankId = string & {
    readonly [deityRankIdBrand]: true;
};

export type DomainId = string & {
    readonly [domainIdBrand]: true;
};

export type UniverseId = string & {
    readonly [universeIdBrand]: true;
};

export type CharacterId = string & {
    readonly [characterIdBrand]: true;
};

export type QuoteId = string & {
    readonly [quoteIdBrand]: true;
};

export type CommunityEventId = string & {
    readonly [communityEventIdBrand]: true;
};