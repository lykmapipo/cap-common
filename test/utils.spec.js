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
import { normalizeAlertDates, normalizeAlert } from '../src/utils';

describe.only('utils', () => {
  it('should normalize aler dates with no info', () => {
    const alert = {
      sent: '2020-08-09T12:48:58.000Z',
    };
    const normalized = normalizeAlertDates(alert);

    expect(normalized).to.exist.and.be.an('object');
    expect(normalized.sent).to.be.an.instanceof(Date);
    expect(normalized.sent).to.be.eql(new Date(alert.sent));

    expect(normalized.info.effective).to.be.an.instanceof(Date);
    expect(normalized.info.effective).to.be.eql(new Date(alert.sent));
    expect(normalized.info.effective).to.be.eql(normalized.sent);

    expect(normalized.info.onset).to.be.an.instanceof(Date);
    expect(normalized.info.onset).to.be.eql(new Date(alert.sent));
    expect(normalized.info.onset).to.be.eql(normalized.sent);
    expect(normalized.info.onset).to.be.eql(normalized.info.onset);

    expect(normalized.info.expires).to.be.undefined;
  });

  it('should normalize aler dates with expires specified', () => {
    const alert = {
      sent: '2020-08-09T12:48:58.000Z',
      info: { expires: '2020-08-10T12:48:58.000Z' },
    };
    const normalized = normalizeAlertDates(alert);

    expect(normalized).to.exist.and.be.an('object');
    expect(normalized.sent).to.be.an.instanceof(Date);
    expect(normalized.sent).to.be.eql(new Date(alert.sent));

    expect(normalized.info.effective).to.be.an.instanceof(Date);
    expect(normalized.info.effective).to.be.eql(new Date(alert.sent));
    expect(normalized.info.effective).to.be.eql(normalized.sent);

    expect(normalized.info.onset).to.be.an.instanceof(Date);
    expect(normalized.info.onset).to.be.eql(new Date(alert.sent));
    expect(normalized.info.onset).to.be.eql(normalized.sent);
    expect(normalized.info.onset).to.be.eql(normalized.info.onset);

    expect(normalized.info.expires).to.be.an.instanceof(Date);
    expect(normalized.info.expires).to.be.eql(new Date(alert.info.expires));
  });

  it('should normalize aler dates with all dates specified', () => {
    const alert = {
      sent: '2020-08-09T12:48:58.000Z',
      info: {
        effective: '2020-08-09T12:48:58.000Z',
        onset: '2020-08-09T13:48:58.000Z',
        expires: '2020-08-10T12:48:58.000Z',
      },
    };
    const normalized = normalizeAlertDates(alert);
    expect(normalized).to.exist.and.be.an('object');
    expect(normalized.sent).to.be.an.instanceof(Date);
    expect(normalized.sent).to.be.eql(new Date(alert.sent));

    expect(normalized.info.effective).to.be.an.instanceof(Date);
    expect(normalized.info.effective).to.be.eql(new Date(alert.info.effective));

    expect(normalized.info.onset).to.be.an.instanceof(Date);
    expect(normalized.info.onset).to.be.eql(new Date(alert.info.onset));

    expect(normalized.info.expires).to.be.an.instanceof(Date);
    expect(normalized.info.expires).to.be.eql(new Date(alert.info.expires));
  });

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
