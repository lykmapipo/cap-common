import { expect } from '@lykmapipo/test-helpers';

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
  CAP_STATUS_ACTUAL,
  CAP_SEVERITY_EXTREME,
} from '../src/constants';
import { normalizeAlert } from '../src/utils';

describe('utils', () => {
  it('should normalize given alert with defaults', () => {
    const alert = {};
    const normalized = normalizeAlert(alert);
    expect(normalized).to.exist.and.be.an('object');
    expect(normalized.info).to.exist.and.be.an('object');
    expect(normalized.info.area).to.exist.and.be.an('object');
    expect(normalized.status).to.be.equal(CAP_DEFAULT_STATUS);
    expect(normalized.msgType).to.be.equal(CAP_DEFAULT_MSGTYPE);
    expect(normalized.scope).to.be.equal(CAP_DEFAULT_SCOPE);
    expect(normalized.info.language).to.be.equal(CAP_DEFAULT_LANGUAGE);
    expect(normalized.info.category).to.be.equal(CAP_DEFAULT_CATEGORY);
    expect(normalized.info.event).to.be.equal(CAP_DEFAULT_EVENT);
    expect(normalized.info.responseType).to.be.equal(CAP_DEFAULT_RESPONSETYPE);
    expect(normalized.info.urgency).to.be.equal(CAP_DEFAULT_URGENCY);
    expect(normalized.info.severity).to.be.equal(CAP_DEFAULT_SEVERITY);
    expect(normalized.info.certainty).to.be.equal(CAP_DEFAULT_CERTAINTY);
    expect(normalized.info.area.areaDesc).to.be.equal(CAP_DEFAULT_AREADESC);
  });

  it('should normalize alert and ignore defaults', () => {
    const alert = {
      status: CAP_STATUS_ACTUAL,
      info: { severity: CAP_SEVERITY_EXTREME },
    };
    const normalized = normalizeAlert(alert);
    expect(normalized).to.exist.and.be.an('object');
    expect(normalized.info).to.exist.and.be.an('object');
    expect(normalized.info.area).to.exist.and.be.an('object');
    expect(normalized.status).to.not.be.equal(CAP_DEFAULT_STATUS);
    expect(normalized.status).to.be.equal(CAP_STATUS_ACTUAL);
    expect(normalized.msgType).to.be.equal(CAP_DEFAULT_MSGTYPE);
    expect(normalized.scope).to.be.equal(CAP_DEFAULT_SCOPE);
    expect(normalized.info.language).to.be.equal(CAP_DEFAULT_LANGUAGE);
    expect(normalized.info.category).to.be.equal(CAP_DEFAULT_CATEGORY);
    expect(normalized.info.event).to.be.equal(CAP_DEFAULT_EVENT);
    expect(normalized.info.responseType).to.be.equal(CAP_DEFAULT_RESPONSETYPE);
    expect(normalized.info.urgency).to.be.equal(CAP_DEFAULT_URGENCY);
    expect(normalized.info.severity).to.not.be.equal(CAP_DEFAULT_SEVERITY);
    expect(normalized.info.severity).to.be.equal(CAP_SEVERITY_EXTREME);
    expect(normalized.info.certainty).to.be.equal(CAP_DEFAULT_CERTAINTY);
    expect(normalized.info.area.areaDesc).to.be.equal(CAP_DEFAULT_AREADESC);
  });
});
