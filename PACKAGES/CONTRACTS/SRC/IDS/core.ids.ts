declare const userIdBrand: unique symbol;
declare const discordAccountIdBrand: unique symbol;
declare const guildIdBrand: unique symbol;
declare const guildMembershipIdBrand: unique symbol;
declare const roleIdBrand: unique symbol;
declare const permissionIdBrand: unique symbol;
declare const auditEntryIdBrand: unique symbol;

export type UserId = string & {
    readonly [userIdBrand]: true;
};

export type DiscordAccountId = string & {
    readonly [discordAccountIdBrand]: true;
};

export type GuildId = string & {
    readonly [guildIdBrand]: true;
};

export type GuildMembershipId = string & {
    readonly [guildMembershipIdBrand]: true;
};

export type RoleId = string & {
    readonly [roleIdBrand]: true;
};

export type PermissionId = string & {
    readonly [permissionIdBrand]: true;
};

export type AuditEntryId = string & {
    readonly [auditEntryIdBrand]: true;
};