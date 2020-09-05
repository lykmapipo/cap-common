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

  it('should have msgtypes', () => {
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
});
