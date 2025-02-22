export type DomainDetails = {
    domains?: Domain[];
    oidcDomains?: Domain[];
    accessTokenDomains?: Domain[];
    showAccessToken: boolean;
};
export type Domain = string | RegExp;
export type TrustedDomains = {
    [key: string]: Domain[] | DomainDetails;
} | null;
export type OidcServerConfiguration = {
    revocationEndpoint: string;
    issuer: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userInfoEndpoint: string;
};
export type OidcConfiguration = {
    token_renew_mode: string;
    service_worker_convert_all_requests_to_cors: boolean;
};
export interface FetchHeaders extends Headers {
    keys(): string[];
}
export type Status = 'LOGGED' | 'LOGGED_IN' | 'LOGGED_OUT' | 'NOT_CONNECTED' | 'LOGOUT_FROM_ANOTHER_TAB' | 'SESSION_LOST' | 'REQUIRE_SYNC_TOKENS' | 'FORCE_REFRESH' | null;
export type MessageEventType = 'clear' | 'init' | 'setState' | 'getState' | 'setCodeVerifier' | 'getCodeVerifier' | 'setSessionState' | 'getSessionState' | 'setNonce';
export type MessageData = {
    status: Status;
    oidcServerConfiguration: OidcServerConfiguration;
    oidcConfiguration: OidcConfiguration;
    where: string;
    state: string;
    codeVerifier: string;
    sessionState: string;
    nonce: Nonce;
};
export type MessageEventData = {
    configurationName: string;
    type: MessageEventType;
    data: MessageData;
};
export type Nonce = {
    nonce: string;
} | null;
export type OidcConfig = {
    configurationName: string;
    tokens: Tokens | null;
    status: Status;
    state: string | null;
    codeVerifier: string | null;
    nonce: Nonce;
    oidcServerConfiguration: OidcServerConfiguration | null;
    oidcConfiguration?: OidcConfiguration;
    sessionState?: string | null;
    items?: MessageData;
    hideAccessToken: boolean;
};
export type IdTokenPayload = {
    iss: string;
    /**
     * (Expiration Time) Claim
     */
    exp: number;
    /**
     * (Issued At) Claim
     */
    iat: number;
    nonce: string | null;
};
export type AccessTokenPayload = {
    exp: number;
    sub: string;
};
export type Tokens = {
    issued_at: number;
    access_token: string;
    accessTokenPayload: AccessTokenPayload | null;
    id_token: null | string;
    idTokenPayload: IdTokenPayload;
    refresh_token?: string;
    expiresAt: number;
    expires_in: number;
};
export type Database = {
    [key: string]: OidcConfig;
};
//# sourceMappingURL=types.d.ts.map