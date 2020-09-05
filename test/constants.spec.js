import { expect } from '@lykmapipo/test-helpers';

import {
  CAP_DEFAULT_STATUS,
  CAP_DEFAULT_MSGTYPE,
  CAP_DEFAULT_SCOPE,
  CAP_DEFAULT_LANGUAGE,
  CAP_DEFAULT_CATEGORY,
  CAP_DEFAULT_EVENT,
  CAP_DEFAULT_LEVEL,
  CAP_DEFAULT_RESPONSETYPE,
  CAP_DEFAULT_URGENCY,
  CAP_DEFAULT_SEVERITY,
  CAP_DEFAULT_CERTAINTY,
  CAP_DEFAULT_AREADESC,
  CAP_STATUS_ACTUAL,
  CAP_STATUS_EXERCISE,
  CAP_STATUS_SYSTEM,
  CAP_STATUS_TEST,
  CAP_STATUS_DRAFT,
  CAP_STATUSES,
  CAP_MSGTYPE_ALERT,
  CAP_MSGTYPE_ACK,
  CAP_MSGTYPE_CANCEL,
  CAP_MSGTYPE_ERROR,
  CAP_MSGTYPE_UPDATE,
  CAP_MSGTYPES,
  CAP_SCOPE_PUBLIC,
  CAP_SCOPE_PRIVATE,
  CAP_SCOPE_RESTRICTED,
  CAP_SCOPES,
  CAP_CATEGORY_CBRNE,
  CAP_CATEGORY_ENV,
  CAP_CATEGORY_FIRE,
  CAP_CATEGORY_GEO,
  CAP_CATEGORY_HEALTH,
  CAP_CATEGORY_INFRA,
  CAP_CATEGORY_MET,
  CAP_CATEGORY_OTHER,
  CAP_CATEGORY_RESCUE,
  CAP_CATEGORY_SAFETY,
  CAP_CATEGORY_SECURITY,
  CAP_CATEGORY_TRANSPORT,
  CAP_CATEGORIES,
  CAP_RESPONSETYPE_ALLCLEAR,
  CAP_RESPONSETYPE_ASSESS,
  CAP_RESPONSETYPE_AVOID,
  CAP_RESPONSETYPE_EVACUATE,
  CAP_RESPONSETYPE_EXECUTE,
  CAP_RESPONSETYPE_MONITOR,
  CAP_RESPONSETYPE_NONE,
  CAP_RESPONSETYPE_PREPARE,
  CAP_RESPONSETYPE_SHELTER,
  CAP_RESPONSETYPES,
  CAP_URGENCY_EXPECTED,
  CAP_URGENCY_FUTURE,
  CAP_URGENCY_IMMEDIATE,
  CAP_URGENCY_PAST,
  CAP_URGENCY_UNKNOWN,
  CAP_URGENCIES,
  CAP_SEVERITY_EXTREME,
  CAP_SEVERITY_MINOR,
  CAP_SEVERITY_MODERATE,
  CAP_SEVERITY_SEVERE,
  CAP_SEVERITY_UNKNOWN,
  CAP_SEVERITIES,
} from '../src/constants';

describe('constants', () => {
  it('should have default status', () => {
    expect(CAP_DEFAULT_STATUS).to.be.equal('Draft');
  });

  it('should have default msgtype', () => {
    expect(CAP_DEFAULT_MSGTYPE).to.be.equal('Unknown');
  });

  it('should have default scope', () => {
    expect(CAP_DEFAULT_SCOPE).to.be.equal('Private');
  });

  it('should have default language', () => {
    expect(CAP_DEFAULT_LANGUAGE).to.be.equal('en');
  });

  it('should have default category', () => {
    expect(CAP_DEFAULT_CATEGORY).to.be.equal('Other');
  });

  it('should have default event', () => {
    expect(CAP_DEFAULT_EVENT).to.be.equal('Unknown');
  });

  it('should have default level', () => {
    expect(CAP_DEFAULT_LEVEL).to.be.equal('White');
  });

  it('should have default response type', () => {
    expect(CAP_DEFAULT_RESPONSETYPE).to.be.equal('None');
  });

  it('should have default urgency', () => {
    expect(CAP_DEFAULT_URGENCY).to.be.equal('Unknown');
  });

  it('should have default severity', () => {
    expect(CAP_DEFAULT_SEVERITY).to.be.equal('Unknown');
  });

  it('should have default certainty', () => {
    expect(CAP_DEFAULT_CERTAINTY).to.be.equal('Unknown');
  });

  it('should have default areaDesc', () => {
    expect(CAP_DEFAULT_AREADESC).to.be.equal('Unknown');
  });

  it('should have statuses', () => {
    expect(CAP_STATUS_ACTUAL).to.be.equal('Actual');
    expect(CAP_STATUS_EXERCISE).to.be.equal('Exercise');
    expect(CAP_STATUS_SYSTEM).to.be.equal('System');
    expect(CAP_STATUS_TEST).to.be.equal('Test');
    expect(CAP_STATUS_DRAFT).to.be.equal('Draft');
    expect(CAP_STATUSES).to.be.eql([
      CAP_STATUS_ACTUAL,
      CAP_STATUS_DRAFT,
      CAP_STATUS_EXERCISE,
      CAP_STATUS_SYSTEM,
      CAP_STATUS_TEST,
    ]);
  });

  it('should have msgTypes', () => {
    expect(CAP_MSGTYPE_ALERT).to.be.equal('Alert');
    expect(CAP_MSGTYPE_UPDATE).to.be.equal('Update');
    expect(CAP_MSGTYPE_CANCEL).to.be.equal('Cancel');
    expect(CAP_MSGTYPE_ACK).to.be.equal('Ack');
    expect(CAP_MSGTYPE_ERROR).to.be.equal('Error');
    expect(CAP_MSGTYPES).to.be.eql([
      CAP_MSGTYPE_ACK,
      CAP_MSGTYPE_ALERT,
      CAP_MSGTYPE_CANCEL,
      CAP_MSGTYPE_ERROR,
      CAP_DEFAULT_MSGTYPE,
      CAP_MSGTYPE_UPDATE,
    ]);
  });

  it('should have scopes', () => {
    expect(CAP_SCOPE_PUBLIC).to.be.equal('Public');
    expect(CAP_SCOPE_RESTRICTED).to.be.equal('Restricted');
    expect(CAP_SCOPE_PRIVATE).to.be.equal('Private');
    expect(CAP_SCOPES).to.be.eql([
      CAP_SCOPE_PRIVATE,
      CAP_SCOPE_PUBLIC,
      CAP_SCOPE_RESTRICTED,
    ]);
  });

  it('should have categories', () => {
    expect(CAP_CATEGORY_GEO).to.be.equal('Geo');
    expect(CAP_CATEGORY_MET).to.be.equal('Met');
    expect(CAP_CATEGORY_SAFETY).to.be.equal('Safety');
    expect(CAP_CATEGORY_SECURITY).to.be.equal('Security');
    expect(CAP_CATEGORY_RESCUE).to.be.equal('Rescue');
    expect(CAP_CATEGORY_FIRE).to.be.equal('Fire');
    expect(CAP_CATEGORY_HEALTH).to.be.equal('Health');
    expect(CAP_CATEGORY_ENV).to.be.equal('Env');
    expect(CAP_CATEGORY_TRANSPORT).to.be.equal('Transport');
    expect(CAP_CATEGORY_INFRA).to.be.equal('Infra');
    expect(CAP_CATEGORY_CBRNE).to.be.equal('CBRNE');
    expect(CAP_CATEGORY_OTHER).to.be.equal('Other');
    expect(CAP_CATEGORIES).to.be.eql([
      CAP_CATEGORY_CBRNE,
      CAP_CATEGORY_ENV,
      CAP_CATEGORY_FIRE,
      CAP_CATEGORY_GEO,
      CAP_CATEGORY_HEALTH,
      CAP_CATEGORY_INFRA,
      CAP_CATEGORY_MET,
      CAP_CATEGORY_OTHER,
      CAP_CATEGORY_RESCUE,
      CAP_CATEGORY_SAFETY,
      CAP_CATEGORY_SECURITY,
      CAP_CATEGORY_TRANSPORT,
    ]);
  });

  it('should have responseTypes', () => {
    expect(CAP_RESPONSETYPE_SHELTER).to.be.equal('Shelter');
    expect(CAP_RESPONSETYPE_EVACUATE).to.be.equal('Evacuate');
    expect(CAP_RESPONSETYPE_PREPARE).to.be.equal('Prepare');
    expect(CAP_RESPONSETYPE_EXECUTE).to.be.equal('Execute');
    expect(CAP_RESPONSETYPE_AVOID).to.be.equal('Avoid');
    expect(CAP_RESPONSETYPE_MONITOR).to.be.equal('Monitor');
    expect(CAP_RESPONSETYPE_ASSESS).to.be.equal('Assess');
    expect(CAP_RESPONSETYPE_ALLCLEAR).to.be.equal('AllClear');
    expect(CAP_RESPONSETYPE_NONE).to.be.equal('None');
    expect(CAP_RESPONSETYPES).to.be.eql([
      CAP_RESPONSETYPE_ALLCLEAR,
      CAP_RESPONSETYPE_ASSESS,
      CAP_RESPONSETYPE_AVOID,
      CAP_RESPONSETYPE_EVACUATE,
      CAP_RESPONSETYPE_EXECUTE,
      CAP_RESPONSETYPE_MONITOR,
      CAP_RESPONSETYPE_NONE,
      CAP_RESPONSETYPE_PREPARE,
      CAP_RESPONSETYPE_SHELTER,
    ]);
  });

  it('should have urgencies', () => {
    expect(CAP_URGENCY_IMMEDIATE).to.be.equal('Immediate');
    expect(CAP_URGENCY_EXPECTED).to.be.equal('Expected');
    expect(CAP_URGENCY_FUTURE).to.be.equal('Future');
    expect(CAP_URGENCY_PAST).to.be.equal('Past');
    expect(CAP_URGENCY_UNKNOWN).to.be.equal('Unknown');
    expect(CAP_URGENCIES).to.be.eql([
      CAP_URGENCY_EXPECTED,
      CAP_URGENCY_FUTURE,
      CAP_URGENCY_IMMEDIATE,
      CAP_URGENCY_PAST,
      CAP_URGENCY_UNKNOWN,
    ]);
  });

  it('should have severities', () => {
    expect(CAP_SEVERITY_EXTREME).to.be.equal('Extreme');
    expect(CAP_SEVERITY_SEVERE).to.be.equal('Severe');
    expect(CAP_SEVERITY_MODERATE).to.be.equal('Moderate');
    expect(CAP_SEVERITY_MINOR).to.be.equal('Minor');
    expect(CAP_SEVERITY_UNKNOWN).to.be.equal('Unknown');
    expect(CAP_SEVERITIES).to.be.eql([
      CAP_SEVERITY_EXTREME,
      CAP_SEVERITY_MINOR,
      CAP_SEVERITY_MODERATE,
      CAP_SEVERITY_SEVERE,
      CAP_SEVERITY_UNKNOWN,
    ]);
  });
});
