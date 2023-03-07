import {HttpStatusCode} from 'axios';

export enum AxiosErrorCode {
  ERR_FR_TOO_MANY_REDIRECTS,
  ERR_BAD_OPTION_VALUE,
  ERR_BAD_OPTION,
  ERR_NETWORK,
  ERR_DEPRECATED,
  ERR_BAD_RESPONSE,
  ERR_BAD_REQUEST,
  ERR_NOT_SUPPORT,
  ERR_INVALID_URL,
  ERR_CANCELED,
  ECONNABORTED,
  ETIMEDOUT,
}

export const errorIconMap = new Map<number, Icon>([
  [
    HttpStatusCode.BadRequest,
    {type: 'font-awesome-5', name: 'triangle-exclamation'},
  ],
  [
    HttpStatusCode.InternalServerError,
    {type: 'font-awesome-5', name: 'wifi-slash'},
  ],
  [HttpStatusCode.Unauthorized, {type: 'font-awesome-5', name: 'user-slash'}],
  [HttpStatusCode.Forbidden, {type: 'font-awesome-5', name: 'ban'}],
  [
    HttpStatusCode.UnprocessableEntity,
    {type: 'font-awesome-5', name: 'triangle-exclamation'},
  ],
]);
