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

// msgTypes
export const CAP_MSGTYPE_ALERT = 'Alert';
export const CAP_MSGTYPE_UPDATE = 'Update';
export const CAP_MSGTYPE_CANCEL = 'Cancel';
export const CAP_MSGTYPE_ACK = 'Ack';
export const CAP_MSGTYPE_ERROR = 'Error';
export const CAP_MSGTYPES = getStringSet('CAP_MSGTYPES', [
  CAP_DEFAULT_MSGTYPE,
  CAP_MSGTYPE_ALERT,
  CAP_MSGTYPE_UPDATE,
  CAP_MSGTYPE_CANCEL,
  CAP_MSGTYPE_ACK,
  CAP_MSGTYPE_ERROR,
]);

// scopes
export const CAP_SCOPE_PUBLIC = 'Public';
export const CAP_SCOPE_RESTRICTED = 'Restricted';
export const CAP_SCOPE_PRIVATE = 'Private';
export const CAP_SCOPES = getStringSet('CAP_SCOPES', [
  CAP_DEFAULT_SCOPE,
  CAP_SCOPE_PUBLIC,
  CAP_SCOPE_RESTRICTED,
  CAP_SCOPE_PRIVATE,
]);

// categories
export const CAP_CATEGORY_GEO = 'Geo';
export const CAP_CATEGORY_MET = 'Met';
export const CAP_CATEGORY_SAFETY = 'Safety';
export const CAP_CATEGORY_SECURITY = 'Security';
export const CAP_CATEGORY_RESCUE = 'Rescue';
export const CAP_CATEGORY_FIRE = 'Fire';
export const CAP_CATEGORY_HEALTH = 'Health';
export const CAP_CATEGORY_ENV = 'Env';
export const CAP_CATEGORY_TRANSPORT = 'Transport';
export const CAP_CATEGORY_INFRA = 'Infra';
export const CAP_CATEGORY_CBRNE = 'CBRNE';
export const CAP_CATEGORY_OTHER = 'Other';
export const CAP_CATEGORIES = getStringSet('CAP_CATEGORIES', [
  CAP_DEFAULT_CATEGORY,
  CAP_CATEGORY_GEO,
  CAP_CATEGORY_MET,
  CAP_CATEGORY_SAFETY,
  CAP_CATEGORY_SECURITY,
  CAP_CATEGORY_RESCUE,
  CAP_CATEGORY_FIRE,
  CAP_CATEGORY_HEALTH,
  CAP_CATEGORY_ENV,
  CAP_CATEGORY_TRANSPORT,
  CAP_CATEGORY_INFRA,
  CAP_CATEGORY_CBRNE,
  CAP_CATEGORY_OTHER,
]);

// responseTypes
export const CAP_RESPONSETYPE_SHELTER = 'Shelter';
export const CAP_RESPONSETYPE_EVACUATE = 'Evacuate';
export const CAP_RESPONSETYPE_PREPARE = 'Prepare';
export const CAP_RESPONSETYPE_EXECUTE = 'Execute';
export const CAP_RESPONSETYPE_AVOID = 'Avoid';
export const CAP_RESPONSETYPE_MONITOR = 'Monitor';
export const CAP_RESPONSETYPE_ASSESS = 'Assess';
export const CAP_RESPONSETYPE_ALLCLEAR = 'AllClear';
export const CAP_RESPONSETYPE_NONE = 'None';
export const CAP_RESPONSETYPES = getStringSet('CAP_RESPONSETYPES', [
  CAP_DEFAULT_RESPONSETYPE,
  CAP_RESPONSETYPE_SHELTER,
  CAP_RESPONSETYPE_EVACUATE,
  CAP_RESPONSETYPE_PREPARE,
  CAP_RESPONSETYPE_EXECUTE,
  CAP_RESPONSETYPE_AVOID,
  CAP_RESPONSETYPE_MONITOR,
  CAP_RESPONSETYPE_ASSESS,
  CAP_RESPONSETYPE_ALLCLEAR,
  CAP_RESPONSETYPE_NONE,
]);

// urgencies
export const CAP_URGENCY_IMMEDIATE = 'Immediate';
export const CAP_URGENCY_EXPECTED = 'Expected';
export const CAP_URGENCY_FUTURE = 'Future';
export const CAP_URGENCY_PAST = 'Past';
export const CAP_URGENCY_UNKNOWN = 'Unknown';
export const CAP_URGENCIES = getStringSet('CAP_URGENCIES', [
  CAP_DEFAULT_URGENCY,
  CAP_URGENCY_IMMEDIATE,
  CAP_URGENCY_EXPECTED,
  CAP_URGENCY_FUTURE,
  CAP_URGENCY_PAST,
  CAP_URGENCY_UNKNOWN,
]);
