import { mergeObjects } from '@lykmapipo/common';
import { expect } from '@lykmapipo/test-helpers';
import { isGeometry, isPoint } from '@lykmapipo/geo-tools';

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
import {
  EMPTY_ALERT,
  DEFAULT_ALERT,
  normalizeAlertDates,
  normalizeAlertGeos,
  normalizeAlert,
  isValidAlert,
} from '../src/utils';

import sampleAlert from './fixtures/alert.json';

describe.only('utils', () => {
  it('should normalize alert dates with no info', () => {
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

  it('should normalize alert dates with expires specified', () => {
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

  it('should normalize alert dates with all dates specified', () => {
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

  it('should normalize alert polygon to geometry', () => {
    const alert = {
      info: {
        area: {
          polygon:
            '-4.7,39.3 -5.2,38.6 -6.1,38.5 -6.9,39.3 -7.6,39.1 -8.4,39 -9.4,39.3 -10.4,39.7 -10.6,40.2 -10.1,40.6 -9.7,40.8 -9,40.3 -8.4,40 -6.8,40.2 -6.1,40.1 -5.2,39.9 -4.9,39.8 -4.7,39.3',
        },
      },
    };
    const normalized = normalizeAlertGeos(alert);

    expect(normalized.info.area.geometry).to.exist.an.be.an('object');
    expect(isGeometry(normalized.info.area.geometry)).to.be.true;
    expect(normalized.info.area.centroid).to.exist.and.be.an('object');
    expect(isPoint(normalized.info.area.centroid)).to.be.true;
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
    expect(normalized.hash).to.exist;
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
    expect(normalized.hash).to.exist;
  });

  it('should normalize full alert', () => {
    const alert = mergeObjects(sampleAlert);
    const normalized = normalizeAlert(alert);

    expect(normalized).to.exist.and.be.an('object');
    expect(normalized.info).to.exist.and.be.an('object');
    expect(normalized.info.area).to.exist.and.be.an('object');
    expect(normalized.status).to.be.equal(alert.status);
    expect(normalized.msgType).to.be.equal(alert.msgType);
    expect(normalized.scope).to.be.equal(alert.scope);
    expect(normalized.info.language).to.be.equal(alert.info.language);
    expect(normalized.info.category).to.be.equal(alert.info.category);
    expect(normalized.info.event).to.be.equal(alert.info.event);
    expect(normalized.info.responseType).to.be.equal(alert.info.responseType);
    expect(normalized.info.urgency).to.be.equal(alert.info.urgency);
    expect(normalized.info.severity).to.be.equal(alert.info.severity);
    expect(normalized.info.certainty).to.be.equal(alert.info.certainty);
    expect(normalized.info.area.areaDesc).to.be.equal(alert.info.area.areaDesc);

    expect(normalized.sent).to.be.an.instanceof(Date);
    expect(normalized.sent).to.be.eql(new Date(alert.sent));

    expect(normalized.info.effective).to.be.an.instanceof(Date);
    expect(normalized.info.effective).to.be.eql(
      new Date(alert.info.effective || alert.sent)
    );

    expect(normalized.info.onset).to.be.an.instanceof(Date);
    expect(normalized.info.onset).to.be.eql(new Date(alert.info.onset));

    expect(normalized.info.expires).to.be.an.instanceof(Date);
    expect(normalized.info.expires).to.be.eql(new Date(alert.info.expires));

    expect(normalized.info.area.geometry).to.exist.an.be.an('object');
    expect(isGeometry(normalized.info.area.geometry)).to.be.true;
    expect(normalized.info.area.centroid).to.exist.and.be.an('object');
    expect(isPoint(normalized.info.area.centroid)).to.be.true;

    expect(normalized.hash).to.exist;
  });

  it('should validate alert partially', () => {
    expect(isValidAlert({}, { partial: true })).to.be.false;
    expect(isValidAlert(EMPTY_ALERT, { partial: true })).to.be.false;
    expect(isValidAlert(DEFAULT_ALERT, { partial: true })).to.be.false;
    expect(isValidAlert(normalizeAlert(DEFAULT_ALERT), { partial: true })).to.be
      .false;
    expect(isValidAlert(normalizeAlert(sampleAlert), { partial: true })).to.be
      .true;
  });

  it('should validate alert fully', () => {
    expect(isValidAlert({})).to.be.false;
    expect(isValidAlert(EMPTY_ALERT)).to.be.false;
    expect(isValidAlert(DEFAULT_ALERT)).to.be.false;
    expect(isValidAlert(normalizeAlert(DEFAULT_ALERT))).to.be.false;
    expect(isValidAlert(normalizeAlert(sampleAlert))).to.be.true;
  });
});
