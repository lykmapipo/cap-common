import { mergeObjects } from '@lykmapipo/common';

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
  // prepare defaults
  const defaults = {
    status: CAP_DEFAULT_STATUS,
    msgType: CAP_DEFAULT_MSGTYPE,
    scope: CAP_DEFAULT_SCOPE,
    info: {
      language: CAP_DEFAULT_LANGUAGE,
      category: CAP_DEFAULT_CATEGORY,
      event: CAP_DEFAULT_EVENT,
      responseType: CAP_DEFAULT_RESPONSETYPE,
      urgency: CAP_DEFAULT_URGENCY,
      severity: CAP_DEFAULT_SEVERITY,
      certainty: CAP_DEFAULT_CERTAINTY,
      area: {
        areaDesc: CAP_DEFAULT_AREADESC,
      },
    },
  };

  // TODO: apply type transformations

  // apply normalizations
  const normalized = mergeObjects(defaults, alert);

  // return normalized alert
  return normalized;
};

export const isValidAlert = (/* alert */) => {
  return true;
};
