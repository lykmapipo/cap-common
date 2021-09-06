import { firstValue, hashOf, isValue, mergeObjects } from '@lykmapipo/common';
import { parseCoordinateString, centroidOf } from '@lykmapipo/geo-tools';

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
export const EMPTY_ALERT = { info: { area: {} } };
export const DEFAULT_ALERT_AREA = { areaDesc: CAP_DEFAULT_AREADESC };
export const DEFAULT_ALERT_INFO = {
  language: CAP_DEFAULT_LANGUAGE,
  category: CAP_DEFAULT_CATEGORY,
  event: CAP_DEFAULT_EVENT,
  responseType: CAP_DEFAULT_RESPONSETYPE,
  urgency: CAP_DEFAULT_URGENCY,
  severity: CAP_DEFAULT_SEVERITY,
  certainty: CAP_DEFAULT_CERTAINTY,
  area: DEFAULT_ALERT_AREA,
};
export const DEFAULT_ALERT = {
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
 * @function normalizeAlertGeos
 * @name normalizeAlertGeos
 * @description Normalize alert geo fields and applying defaults
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
 * normalizeAlertGeos(alert);
 * //=> { info: { area: { geometry: ..., centroid: ... } }, ... }
 */
export const normalizeAlertGeos = (alert) => {
  // ensure alert info
  const normalizedAlert = mergeObjects(EMPTY_ALERT, alert);

  // parse circle and polygon to geojson geometry
  const coordinateString = firstValue(
    normalizedAlert.info.area.polygon,
    normalizedAlert.info.area.circle
  );
  const hasGeoFields = isValue(coordinateString);

  if (hasGeoFields) {
    const geometry = parseCoordinateString(coordinateString);
    const centroid = centroidOf(geometry);
    normalizedAlert.info.area.geometry = geometry;
    normalizedAlert.info.area.centroid = centroid;
  }

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
  let normalizedAlert = mergeObjects(DEFAULT_ALERT, alert);

  // normalize dates
  normalizedAlert = normalizeAlertDates(normalizedAlert);

  // normalize geo fields
  normalizedAlert = normalizeAlertGeos(normalizedAlert);

  // compute hash
  normalizedAlert.hash = hashOf(normalizedAlert);

  // return normalize alert
  return normalizedAlert;
};

/**
 * @function isValid
 * @name isValid
 * @description Check validity of given alert after normalize
 *
 * Note: A valid alert should answer these key questions:
 * - What is happening?
 * - When is it happening?
 * - What should people do?
 * - Where do alerts go?
 * @param {object} alert valid alert in json format.
 * @param {object} [optns] validation options.
 * @param {boolean} [optns.partial=false] whether to perform partial validation
 * @returns {boolean} true if valid else false
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.2.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * isValid(alert);
 * //=> true
 */
export const isValidAlert = (alert, optns) => {
  // ensure alert
  const copyOfAlert = mergeObjects(EMPTY_ALERT, alert);

  // ensure options
  const { partial = false } = mergeObjects(optns);

  // parform partial validation
  // same as google
  if (partial) {
    const isPartialAlert =
      isValue(copyOfAlert.info) &&
      isValue(copyOfAlert.info.event) &&
      isValue(copyOfAlert.info.effective) &&
      isValue(copyOfAlert.info.expires) &&
      isValue(copyOfAlert.info.instruction) &&
      isValue(copyOfAlert.info.area) &&
      isValue(copyOfAlert.info.area.areaDesc);
    return isPartialAlert;
  }

  // peform full validation
  // same as specs
  const isFullAlert =
    isValue(copyOfAlert.identifier) &&
    isValue(copyOfAlert.sender) &&
    isValue(copyOfAlert.sent) &&
    isValue(copyOfAlert.status) &&
    isValue(copyOfAlert.msgType) &&
    isValue(copyOfAlert.scope) &&
    isValue(copyOfAlert.info) &&
    isValue(copyOfAlert.info.category) &&
    isValue(copyOfAlert.info.event) &&
    isValue(copyOfAlert.info.urgency) &&
    isValue(copyOfAlert.info.severity) &&
    isValue(copyOfAlert.info.certainty) &&
    isValue(copyOfAlert.info.effective) &&
    isValue(copyOfAlert.info.expires) &&
    isValue(copyOfAlert.info.instruction) &&
    isValue(copyOfAlert.info.area) &&
    isValue(copyOfAlert.info.area.areaDesc);
  return isFullAlert;
};

// TODO: convertAlertToFeature
// TODO: convertAlertToGeoJSON
// TODO: simplifyAlert
