export {}; //force this file to be a module

declare global {
  namespace NodeJS {
    /**
     * Environment var names for third-party credentials/setup
     */
    type ThirdPartyCreds = {
      /**
       * Twilio account/subaccount SID
       */
      TWILIO_ACCOUNT_SID: string;

      /**
       * Twilio account/subaccount auth token
       */
      TWILIO_AUTH_TOKEN: string;

      /**
       * Root of Supabase backend URL
       */
      SUPABASE_URL: string;

      /**
       * Supabase public/anon key
       */
      SUPABASE_ANON_KEY: string;
    };

    /**
     * Debug-related flags
     */
    type DebugEnvVars = {
      /**
       * Whether to show the react-query devtools. Set to 1 to show.
       */
      NX_CUSTOM_VAR_DEBUG_REACT_QUERY: string;
    };

    /**
     * Assorted environment vars unrelated to third-party services
     */
    type MiscEnvVars = {
      /**
       * Root of main API base (excluding trailing slash)
       */
      NX_CUSTOM_VAR_CLIENT_API_BASE_URL: string;
      /**
       * Auth server URL
       */
      NX_CUSTOM_VAR_KEYCLOAK_CLIENT_AUTH_SERVER_URL: string;
      /**
       * Name of realm to use in client
       */
      NX_CUSTOM_VAR_KEYCLOAK_CLIENT_REALM: string;
      /**
       * Whether SSL is required
       */
      NX_CUSTOM_VAR_KEYCLOAK_CLIENT_SSL_REQUIRED: string;
      /**
       * Whether the client is public (treat as boolean- value will be 'true' or 'false')
       */
      NX_CUSTOM_VAR_KEYCLOAK_CLIENT_PUBLIC_CLIENT: string;
      /**
       * Whether to use a confidential port
       */
      NX_CUSTOM_VAR_KEYCLOAK_CLIENT_CONFIDENTIAL_PORT: string;
      /**
       * Keycloak Client to use
       */
      NX_CUSTOM_VAR_KEYCLOAK_CLIENT_ID: string;
      /**
       * For the API gateway, this is the secret credential
       */
      KEYCLOAK_GATEWAY_SECRET: string;
      /**
       * For the API gateway, this is the client ID
       */
      KEYCLOAK_GATEWAY_CLIENT_ID: string;

      /**
       * DigitalOcean Storage Spaces: API Key
       */
      DO_STORAGE_KEY: string;
      /**
       * DigitalOcean Storage Spaces: Client Secret
       */
      DO_STORAGE_SECRET: string;
      /**
       * DigitalOcean Storage Spaces: Region + domain- e.g., nyc3.digitaloceanspaces.com
       */
      DO_STORAGE_ENDPOINT: string;
      /**
       * DigitalOcean Storage Spaces: bucket name (e.g., 1smdumps)
       */
      DO_STORAGE_BUCKET: string;

      // Postgres configs:
      /**
       * DB hostname/URL
       */
      APP_PG_URL: string;
      /**
       * DB port number
       */
      APP_PG_PORT: number;
      /**
       * DB username
       */
      APP_PG_USER: string;
      /**
       * DB password
       */
      APP_PG_PW: string;
      /**
       * DB name
       */
      APP_PG_DB: string;

      CLICKHOUSE_HOST: string;
      CLICKHOUSE_USER: string;
      CLICKHOUSE_PASSWORD?: string;
      CLICKHOUSE_PORT?: string;
      CLICKHOUSE_DB: string;
      CLICKHOUSE_DEBUG?: string;

      /**
       * Cube.js setup.
       * All env vars here: https://cube.dev/docs/reference/environment-variables
       */

      /**
       * Enable/disable dev mode
       */
      CUBEJS_DEV_MODE: string;
      /**
       * API key
       */
      CUBEJS_API_SECRET: string;
      /**
       * Enable/disable remote telemetry
       */
      CUBEJS_TELEMETRY: string;
      /**
       * DB user
       */
      CUBEJS_DB_USER: string;
      /**
       * DB password
       */
      CUBEJS_DB_PASS: string;

      /**
       * Port to connect to DB on (as string)
       */
      CUBEJS_DB_PORT: string;

      /**
       * DB name to connect to
       */
      CUBEJS_DB_NAME: string;
      /**
       * DB hostname
       */
      CUBEJS_DB_HOST: string;
      /**
       * DB type (e.g., clickhouse, postgres)
       */
      CUBEJS_DB_TYPE: string;
    };

    /**
     * Union type for all environment vars
     */
    type CombinedEnvVars = MiscEnvVars & ThirdPartyCreds & DebugEnvVars;
    
    /**
     * Extend types for process.env
     */
    interface ProcessEnv extends CombinedEnvVars {}

    /**
     * Get an object made of true/false values from the keys of some input object
     */
    type FlaggableKeys<T extends object> = {
      [P in keyof T]: boolean;
    };
  }
}
