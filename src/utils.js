import { isValue, mergeObjects } from '@lykmapipo/common';

import {
  CAP_DEFAULT_STATUS,
  CAP_DEFAULT_MSGTYPE,
  CAP_DEFAULT_SCOPE,
  CAP_DEFAULT_LANGUAGE,
  CAP_DEFAULT_CATEGORY,
  CAP_DEFAULT_EVENT,
  CAP_DEFAULT_RESPONSETYPE,
  CAP_DEFAULT_URGENCY,
  CAP_DEFAULT_SEVERITY,
  CAP_DEFAULT_CERTAINTY,
  CAP_DEFAULT_AREADESC,
} from './constants';

// constants
const EMPTY_ALERT = { info: { area: {} } };
const DEFAULT_ALERT_AREA = { areaDesc: CAP_DEFAULT_AREADESC };
const DEFAULT_ALERT_INFO = {
  language: CAP_DEFAULT_LANGUAGE,
  category: CAP_DEFAULT_CATEGORY,
  event: CAP_DEFAULT_EVENT,
  responseType: CAP_DEFAULT_RESPONSETYPE,
  urgency: CAP_DEFAULT_URGENCY,
  severity: CAP_DEFAULT_SEVERITY,
  certainty: CAP_DEFAULT_CERTAINTY,
  area: DEFAULT_ALERT_AREA,
};
const DEFAULT_ALERT = {
  status: CAP_DEFAULT_STATUS,
  msgType: CAP_DEFAULT_MSGTYPE,
  scope: CAP_DEFAULT_SCOPE,
  info: DEFAULT_ALERT_INFO,
};

/**
 * @function normalizeAlertDates
 * @name normalizeAlertDates
 * @description Normalize alert dates and applying defaults
 * @param {object} alert valid alert in json format.
 * @returns {object} normalize alert.
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.2.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * normalizeAlertDates(alert);
 * //=> { sent: '2020-08-09T12:48:58.000Z', ... }
 */
export const normalizeAlertDates = (alert) => {
  // ensure alert info
  const normalizedAlert = mergeObjects(EMPTY_ALERT, alert);

  // normalize sent date
  normalizedAlert.sent = isValue(normalizedAlert.sent)
    ? new Date(normalizedAlert.sent)
    : undefined;

  // normalize effective date
  normalizedAlert.info.effective = isValue(normalizedAlert.info.effective)
    ? new Date(normalizedAlert.info.effective)
    : normalizedAlert.sent;

  // normalize onset date
  normalizedAlert.info.onset = isValue(normalizedAlert.info.onset)
    ? new Date(normalizedAlert.info.onset)
    : normalizedAlert.info.effective;

  // normalize expires date
  normalizedAlert.info.expires = isValue(normalizedAlert.info.expires)
    ? new Date(normalizedAlert.info.expires)
    : undefined;

  // return normalized alert
  return normalizedAlert;
};

/**
 * @function normalizeAlert
 * @name normalizeAlert
 * @description Normalize a given alert by applying defaults
 * @param {object} alert valid alert in json format.
 * @returns {object} normalize alert.
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.2.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * normalizeAlert(alert);
 * //=> { status: 'Draft', ... }
 */
export const normalizeAlert = (alert) => {
  // merge defaults
  let normalized = mergeObjects(DEFAULT_ALERT, alert);

  // normalize dates
  normalized = normalizeAlertDates(normalized);

  // return normalized alert
  return normalized;
};

export const isValidAlert = (/* alert */) => {
  return true;
};
