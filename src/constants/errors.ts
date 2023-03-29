import {HttpStatusCode} from 'axios';

export enum AxiosErrorCode {
  ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS',
  ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE',
  ERR_BAD_OPTION = 'ERR_BAD_OPTION',
  ERR_NETWORK = 'ERR_NETWORK',
  ERR_DEPRECATED = 'ERR_DEPRECATED',
  ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE',
  ERR_BAD_REQUEST = 'ERR_BAD_REQUEST',
  ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT',
  ERR_INVALID_URL = 'ERR_INVALID_URL',
  ERR_CANCELED = 'ERR_CANCELED',
  ECONNABORTED = 'ECONNABORTED',
  ETIMEDOUT = 'ETIMEDOUT',
}

export const errorStatusMap = new Map<AxiosErrorCode, HttpStatusCode>([
  [AxiosErrorCode.ERR_FR_TOO_MANY_REDIRECTS, HttpStatusCode.TooManyRequests],
  [AxiosErrorCode.ERR_BAD_OPTION_VALUE, HttpStatusCode.BadRequest],
  [AxiosErrorCode.ERR_BAD_OPTION, HttpStatusCode.BadRequest],
  [AxiosErrorCode.ERR_NETWORK, HttpStatusCode.InternalServerError],
  [AxiosErrorCode.ECONNABORTED, HttpStatusCode.RequestTimeout],
  [AxiosErrorCode.ETIMEDOUT, HttpStatusCode.RequestTimeout],
  [AxiosErrorCode.ERR_DEPRECATED, HttpStatusCode.BadRequest],
  [AxiosErrorCode.ERR_BAD_REQUEST, HttpStatusCode.BadRequest],
  [AxiosErrorCode.ERR_BAD_RESPONSE, HttpStatusCode.BadRequest],
  [AxiosErrorCode.ERR_NOT_SUPPORT, HttpStatusCode.UnsupportedMediaType],
  [AxiosErrorCode.ERR_INVALID_URL, HttpStatusCode.UriTooLong],
  [AxiosErrorCode.ERR_CANCELED, HttpStatusCode.ExpectationFailed],
]);

export const errorIconMap = new Map<number, Icon>([
  [
    HttpStatusCode.TooManyRequests,
    {type: 'material-community', name: 'arrow-decision-outline'},
  ],
  [HttpStatusCode.InternalServerError, {type: 'material', name: 'wifi-off'}],
  [HttpStatusCode.Unauthorized, {type: 'simple-line-icon', name: 'lock'}],
  [HttpStatusCode.Forbidden, {type: 'simple-line-icon', name: 'ban'}],
  [HttpStatusCode.BadRequest, {type: 'simple-line-icon', name: 'close'}],
  [HttpStatusCode.UnprocessableEntity, {type: 'material', name: 'close'}],
  [HttpStatusCode.UnprocessableEntity, {type: 'material', name: 'close'}],
  [HttpStatusCode.NotFound, {type: 'material', name: 'search-off'}],
  [
    HttpStatusCode.RequestTimeout,
    {type: 'material-community', name: 'web-clock'},
  ],
  [
    HttpStatusCode.UnsupportedMediaType,
    {type: 'material-community', name: 'cellphone-remove'},
  ],
  [
    HttpStatusCode.UriTooLong,
    {type: 'material-community', name: 'link-variant-off'},
  ],
  [HttpStatusCode.ExpectationFailed, {type: 'simple-line-icon', name: 'ban'}],
]);
