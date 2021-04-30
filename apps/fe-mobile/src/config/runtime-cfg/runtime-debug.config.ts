import { ResolveRuntimeBooleanConfig } from '@renco-hax/common-utils';
require('dotenv').config();

/**
 * Get a map of DebugEnvVars showing which flags are/aren't active
 */
export const GetRuntimeDebugConfig = (): NodeJS.FlaggableKeys<NodeJS.DebugEnvVars> => {
  const rawDebugConfig: NodeJS.DebugEnvVars = {
    NX_CUSTOM_VAR_DEBUG_REACT_QUERY: process.env.NX_CUSTOM_VAR_DEBUG_REACT_QUERY
  };
  console.log(
    `GetRuntimeDebug:: raw config: ${
      rawDebugConfig ? JSON.stringify(rawDebugConfig, null, 2) : 'Not set'
    }`
  );
  const parsed = ResolveRuntimeBooleanConfig(rawDebugConfig);
  console.log(
    ` -- GetRuntimeDebug:: parsed config: ${
      parsed ? JSON.stringify(parsed, null, 2) : 'Not set'
    }`
  );
  return parsed;
};
