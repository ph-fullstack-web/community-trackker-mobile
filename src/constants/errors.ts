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
  [HttpStatusCode.InternalServerError, {type: 'material', name: 'wifi-off'}],
  [HttpStatusCode.Unauthorized, {type: 'simple-line-icon', name: 'lock'}],
  [HttpStatusCode.Forbidden, {type: 'simple-line-icon', name: 'ban'}],
  [HttpStatusCode.BadRequest, {type: 'simple-line-icon', name: 'close'}],
  [HttpStatusCode.UnprocessableEntity, {type: 'material', name: 'close'}],
  [HttpStatusCode.UnprocessableEntity, {type: 'material', name: 'close'}],
  [HttpStatusCode.NotFound, {type: 'material', name: 'search-off'}],
]);
