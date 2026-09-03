declare const gameIdBrand: unique symbol;
declare const gameSessionIdBrand: unique symbol;
declare const gameVoteIdBrand: unique symbol;
declare const gameServerIdBrand: unique symbol;
declare const gameServerOperationIdBrand: unique symbol;

export type GameId = string & {
    readonly [gameIdBrand]: true;
};

export type GameSessionId = string & {
    readonly [gameSessionIdBrand]: true;
};

export type GameVoteId = string & {
    readonly [gameVoteIdBrand]: true;
};

export type GameServerId = string & {
    readonly [gameServerIdBrand]: true;
};

export type GameServerOperationId = string & {
    readonly [gameServerOperationIdBrand]: true;
};