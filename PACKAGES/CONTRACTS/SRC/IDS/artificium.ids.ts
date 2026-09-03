declare const artworkIdBrand: unique symbol;
declare const galleryIdBrand: unique symbol;
declare const artChallengeIdBrand: unique symbol;
declare const mediaAssetIdBrand: unique symbol;

export type ArtworkId = string & {
    readonly [artworkIdBrand]: true;
};

export type GalleryId = string & {
    readonly [galleryIdBrand]: true;
};

export type ArtChallengeId = string & {
    readonly [artChallengeIdBrand]: true;
};

export type MediaAssetId = string & {
    readonly [mediaAssetIdBrand]: true;
};