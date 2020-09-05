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
});
