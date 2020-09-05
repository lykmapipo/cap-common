/**
 * @file Common ALert Protocol constants
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 */

import { getString, getStringSet } from '@lykmapipo/env';

// defaults
export const CAP_DEFAULT_STATUS = getString('CAP_DEFAULT_STATUS', 'Draft');
export const CAP_DEFAULT_MSGTYPE = getString('CAP_DEFAULT_MSGTYPE', 'Unknown');
export const CAP_DEFAULT_SCOPE = getString('CAP_DEFAULT_SCOPE', 'Private');
export const CAP_DEFAULT_LANGUAGE = getString('CAP_DEFAULT_LANGUAGE', 'en');
export const CAP_DEFAULT_CATEGORY = getString('CAP_DEFAULT_CATEGORY', 'Other');
export const CAP_DEFAULT_EVENT = getString('CAP_DEFAULT_EVENT', 'Unknown');
export const CAP_DEFAULT_LEVEL = getString('CAP_DEFAULT_LEVEL', 'White');
export const CAP_DEFAULT_RESPONSETYPE = getString(
  'CAP_DEFAULT_RESPONSETYPE',
  'None'
);
export const CAP_DEFAULT_URGENCY = getString('CAP_DEFAULT_URGENCY', 'Unknown');
export const CAP_DEFAULT_SEVERITY = getString(
  'CAP_DEFAULT_SEVERITY',
  'Unknown'
);
export const CAP_DEFAULT_CERTAINTY = getString(
  'CAP_DEFAULT_CERTAINTY',
  'Unknown'
);
export const CAP_DEFAULT_AREADESC = getString(
  'CAP_DEFAULT_AREADESC',
  'Unknown'
);

// statuses
export const CAP_STATUS_ACTUAL = 'Actual';
export const CAP_STATUS_EXERCISE = 'Exercise';
export const CAP_STATUS_SYSTEM = 'System';
export const CAP_STATUS_TEST = 'Test';
export const CAP_STATUS_DRAFT = 'Draft';
export const CAP_STATUSES = getStringSet('CAP_STATUSES', [
  CAP_DEFAULT_STATUS,
  CAP_STATUS_ACTUAL,
  CAP_STATUS_EXERCISE,
  CAP_STATUS_SYSTEM,
  CAP_STATUS_TEST,
  CAP_STATUS_DRAFT,
]);
