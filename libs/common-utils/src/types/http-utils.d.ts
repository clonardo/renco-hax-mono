import type { HttpStatus } from '@nestjs/common';
export {};

declare global {
  namespace HttpUtils {
    /**
     * Return value of a redirect
     */
    interface Redirection {
      url?: string;
      statusCode?: HttpStatus;
    }
  }
}
