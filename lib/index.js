const env = require('@lykmapipo/env');

/**
 * @file Common ALert Protocol constants
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 */

// defaults
const CAP_DEFAULT_STATUS = env.getString('CAP_DEFAULT_STATUS', 'Draft');
const CAP_DEFAULT_MSGTYPE = env.getString('CAP_DEFAULT_MSGTYPE', 'Unknown');
const CAP_DEFAULT_SCOPE = env.getString('CAP_DEFAULT_SCOPE', 'Private');
const CAP_DEFAULT_LANGUAGE = env.getString('CAP_DEFAULT_LANGUAGE', 'en');
const CAP_DEFAULT_CATEGORY = env.getString('CAP_DEFAULT_CATEGORY', 'Other');
const CAP_DEFAULT_EVENT = env.getString('CAP_DEFAULT_EVENT', 'Unknown');
const CAP_DEFAULT_LEVEL = env.getString('CAP_DEFAULT_LEVEL', 'White');
const CAP_DEFAULT_RESPONSETYPE = env.getString(
  'CAP_DEFAULT_RESPONSETYPE',
  'None'
);
const CAP_DEFAULT_URGENCY = env.getString('CAP_DEFAULT_URGENCY', 'Unknown');
const CAP_DEFAULT_SEVERITY = env.getString('CAP_DEFAULT_SEVERITY', 'Unknown');
const CAP_DEFAULT_CERTAINTY = env.getString('CAP_DEFAULT_CERTAINTY', 'Unknown');
const CAP_DEFAULT_AREADESC = env.getString('CAP_DEFAULT_AREADESC', 'Unknown');

// statuses
const CAP_STATUS_ACTUAL = 'Actual';
const CAP_STATUS_EXERCISE = 'Exercise';
const CAP_STATUS_SYSTEM = 'System';
const CAP_STATUS_TEST = 'Test';
const CAP_STATUS_DRAFT = 'Draft';
const CAP_STATUSES = env.getStringSet('CAP_STATUSES', [
  CAP_DEFAULT_STATUS,
  CAP_STATUS_ACTUAL,
  CAP_STATUS_EXERCISE,
  CAP_STATUS_SYSTEM,
  CAP_STATUS_TEST,
  CAP_STATUS_DRAFT,
]);

// msgTypes
const CAP_MSGTYPE_ALERT = 'Alert';
const CAP_MSGTYPE_UPDATE = 'Update';
const CAP_MSGTYPE_CANCEL = 'Cancel';
const CAP_MSGTYPE_ACK = 'Ack';
const CAP_MSGTYPE_ERROR = 'Error';
const CAP_MSGTYPES = env.getStringSet('CAP_MSGTYPES', [
  CAP_DEFAULT_MSGTYPE,
  CAP_MSGTYPE_ALERT,
  CAP_MSGTYPE_UPDATE,
  CAP_MSGTYPE_CANCEL,
  CAP_MSGTYPE_ACK,
  CAP_MSGTYPE_ERROR,
]);

// scopes
const CAP_SCOPE_PUBLIC = 'Public';
const CAP_SCOPE_RESTRICTED = 'Restricted';
const CAP_SCOPE_PRIVATE = 'Private';
const CAP_SCOPES = env.getStringSet('CAP_SCOPES', [
  CAP_DEFAULT_SCOPE,
  CAP_SCOPE_PUBLIC,
  CAP_SCOPE_RESTRICTED,
  CAP_SCOPE_PRIVATE,
]);

// categories
const CAP_CATEGORY_GEO = 'Geo';
const CAP_CATEGORY_MET = 'Met';
const CAP_CATEGORY_SAFETY = 'Safety';
const CAP_CATEGORY_SECURITY = 'Security';
const CAP_CATEGORY_RESCUE = 'Rescue';
const CAP_CATEGORY_FIRE = 'Fire';
const CAP_CATEGORY_HEALTH = 'Health';
const CAP_CATEGORY_ENV = 'Env';
const CAP_CATEGORY_TRANSPORT = 'Transport';
const CAP_CATEGORY_INFRA = 'Infra';
const CAP_CATEGORY_CBRNE = 'CBRNE';
const CAP_CATEGORY_OTHER = 'Other';
const CAP_CATEGORIES = env.getStringSet('CAP_CATEGORIES', [
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
const CAP_RESPONSETYPE_SHELTER = 'Shelter';
const CAP_RESPONSETYPE_EVACUATE = 'Evacuate';
const CAP_RESPONSETYPE_PREPARE = 'Prepare';
const CAP_RESPONSETYPE_EXECUTE = 'Execute';
const CAP_RESPONSETYPE_AVOID = 'Avoid';
const CAP_RESPONSETYPE_MONITOR = 'Monitor';
const CAP_RESPONSETYPE_ASSESS = 'Assess';
const CAP_RESPONSETYPE_ALLCLEAR = 'AllClear';
const CAP_RESPONSETYPE_NONE = 'None';
const CAP_RESPONSETYPES = env.getStringSet('CAP_RESPONSETYPES', [
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
const CAP_URGENCY_IMMEDIATE = 'Immediate';
const CAP_URGENCY_EXPECTED = 'Expected';
const CAP_URGENCY_FUTURE = 'Future';
const CAP_URGENCY_PAST = 'Past';
const CAP_URGENCY_UNKNOWN = 'Unknown';
const CAP_URGENCIES = env.getStringSet('CAP_URGENCIES', [
  CAP_DEFAULT_URGENCY,
  CAP_URGENCY_IMMEDIATE,
  CAP_URGENCY_EXPECTED,
  CAP_URGENCY_FUTURE,
  CAP_URGENCY_PAST,
  CAP_URGENCY_UNKNOWN,
]);

// severities
const CAP_SEVERITY_EXTREME = 'Extreme';
const CAP_SEVERITY_SEVERE = 'Severe';
const CAP_SEVERITY_MODERATE = 'Moderate';
const CAP_SEVERITY_MINOR = 'Minor';
const CAP_SEVERITY_UNKNOWN = 'Unknown';
const CAP_SEVERITIES = env.getStringSet('CAP_SEVERITIES', [
  CAP_DEFAULT_SEVERITY,
  CAP_SEVERITY_EXTREME,
  CAP_SEVERITY_SEVERE,
  CAP_SEVERITY_MODERATE,
  CAP_SEVERITY_MINOR,
  CAP_SEVERITY_UNKNOWN,
]);

// certainties
const CAP_CERTAINTY_OBSERVED = 'Observed';
const CAP_CERTAINTY_LIKELY = 'Likely';
const CAP_CERTAINTY_POSSIBLE = 'Possible';
const CAP_CERTAINTY_UNLIKELY = 'Unlikely';
const CAP_CERTAINTY_UNKNOWN = 'Unknown';
const CAP_CERTAINTIES = env.getStringSet('CAP_CERTAINTIES', [
  CAP_DEFAULT_CERTAINTY,
  CAP_CERTAINTY_OBSERVED,
  CAP_CERTAINTY_LIKELY,
  CAP_CERTAINTY_POSSIBLE,
  CAP_CERTAINTY_UNLIKELY,
  CAP_CERTAINTY_UNKNOWN,
]);

exports.CAP_CATEGORIES = CAP_CATEGORIES;
exports.CAP_CATEGORY_CBRNE = CAP_CATEGORY_CBRNE;
exports.CAP_CATEGORY_ENV = CAP_CATEGORY_ENV;
exports.CAP_CATEGORY_FIRE = CAP_CATEGORY_FIRE;
exports.CAP_CATEGORY_GEO = CAP_CATEGORY_GEO;
exports.CAP_CATEGORY_HEALTH = CAP_CATEGORY_HEALTH;
exports.CAP_CATEGORY_INFRA = CAP_CATEGORY_INFRA;
exports.CAP_CATEGORY_MET = CAP_CATEGORY_MET;
exports.CAP_CATEGORY_OTHER = CAP_CATEGORY_OTHER;
exports.CAP_CATEGORY_RESCUE = CAP_CATEGORY_RESCUE;
exports.CAP_CATEGORY_SAFETY = CAP_CATEGORY_SAFETY;
exports.CAP_CATEGORY_SECURITY = CAP_CATEGORY_SECURITY;
exports.CAP_CATEGORY_TRANSPORT = CAP_CATEGORY_TRANSPORT;
exports.CAP_CERTAINTIES = CAP_CERTAINTIES;
exports.CAP_CERTAINTY_LIKELY = CAP_CERTAINTY_LIKELY;
exports.CAP_CERTAINTY_OBSERVED = CAP_CERTAINTY_OBSERVED;
exports.CAP_CERTAINTY_POSSIBLE = CAP_CERTAINTY_POSSIBLE;
exports.CAP_CERTAINTY_UNKNOWN = CAP_CERTAINTY_UNKNOWN;
exports.CAP_CERTAINTY_UNLIKELY = CAP_CERTAINTY_UNLIKELY;
exports.CAP_DEFAULT_AREADESC = CAP_DEFAULT_AREADESC;
exports.CAP_DEFAULT_CATEGORY = CAP_DEFAULT_CATEGORY;
exports.CAP_DEFAULT_CERTAINTY = CAP_DEFAULT_CERTAINTY;
exports.CAP_DEFAULT_EVENT = CAP_DEFAULT_EVENT;
exports.CAP_DEFAULT_LANGUAGE = CAP_DEFAULT_LANGUAGE;
exports.CAP_DEFAULT_LEVEL = CAP_DEFAULT_LEVEL;
exports.CAP_DEFAULT_MSGTYPE = CAP_DEFAULT_MSGTYPE;
exports.CAP_DEFAULT_RESPONSETYPE = CAP_DEFAULT_RESPONSETYPE;
exports.CAP_DEFAULT_SCOPE = CAP_DEFAULT_SCOPE;
exports.CAP_DEFAULT_SEVERITY = CAP_DEFAULT_SEVERITY;
exports.CAP_DEFAULT_STATUS = CAP_DEFAULT_STATUS;
exports.CAP_DEFAULT_URGENCY = CAP_DEFAULT_URGENCY;
exports.CAP_MSGTYPES = CAP_MSGTYPES;
exports.CAP_MSGTYPE_ACK = CAP_MSGTYPE_ACK;
exports.CAP_MSGTYPE_ALERT = CAP_MSGTYPE_ALERT;
exports.CAP_MSGTYPE_CANCEL = CAP_MSGTYPE_CANCEL;
exports.CAP_MSGTYPE_ERROR = CAP_MSGTYPE_ERROR;
exports.CAP_MSGTYPE_UPDATE = CAP_MSGTYPE_UPDATE;
exports.CAP_RESPONSETYPES = CAP_RESPONSETYPES;
exports.CAP_RESPONSETYPE_ALLCLEAR = CAP_RESPONSETYPE_ALLCLEAR;
exports.CAP_RESPONSETYPE_ASSESS = CAP_RESPONSETYPE_ASSESS;
exports.CAP_RESPONSETYPE_AVOID = CAP_RESPONSETYPE_AVOID;
exports.CAP_RESPONSETYPE_EVACUATE = CAP_RESPONSETYPE_EVACUATE;
exports.CAP_RESPONSETYPE_EXECUTE = CAP_RESPONSETYPE_EXECUTE;
exports.CAP_RESPONSETYPE_MONITOR = CAP_RESPONSETYPE_MONITOR;
exports.CAP_RESPONSETYPE_NONE = CAP_RESPONSETYPE_NONE;
exports.CAP_RESPONSETYPE_PREPARE = CAP_RESPONSETYPE_PREPARE;
exports.CAP_RESPONSETYPE_SHELTER = CAP_RESPONSETYPE_SHELTER;
exports.CAP_SCOPES = CAP_SCOPES;
exports.CAP_SCOPE_PRIVATE = CAP_SCOPE_PRIVATE;
exports.CAP_SCOPE_PUBLIC = CAP_SCOPE_PUBLIC;
exports.CAP_SCOPE_RESTRICTED = CAP_SCOPE_RESTRICTED;
exports.CAP_SEVERITIES = CAP_SEVERITIES;
exports.CAP_SEVERITY_EXTREME = CAP_SEVERITY_EXTREME;
exports.CAP_SEVERITY_MINOR = CAP_SEVERITY_MINOR;
exports.CAP_SEVERITY_MODERATE = CAP_SEVERITY_MODERATE;
exports.CAP_SEVERITY_SEVERE = CAP_SEVERITY_SEVERE;
exports.CAP_SEVERITY_UNKNOWN = CAP_SEVERITY_UNKNOWN;
exports.CAP_STATUSES = CAP_STATUSES;
exports.CAP_STATUS_ACTUAL = CAP_STATUS_ACTUAL;
exports.CAP_STATUS_DRAFT = CAP_STATUS_DRAFT;
exports.CAP_STATUS_EXERCISE = CAP_STATUS_EXERCISE;
exports.CAP_STATUS_SYSTEM = CAP_STATUS_SYSTEM;
exports.CAP_STATUS_TEST = CAP_STATUS_TEST;
exports.CAP_URGENCIES = CAP_URGENCIES;
exports.CAP_URGENCY_EXPECTED = CAP_URGENCY_EXPECTED;
exports.CAP_URGENCY_FUTURE = CAP_URGENCY_FUTURE;
exports.CAP_URGENCY_IMMEDIATE = CAP_URGENCY_IMMEDIATE;
exports.CAP_URGENCY_PAST = CAP_URGENCY_PAST;
exports.CAP_URGENCY_UNKNOWN = CAP_URGENCY_UNKNOWN;