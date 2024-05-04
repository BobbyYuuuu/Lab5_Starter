// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber test
test('check is 4151234567 a valid phone number', () => {
  expect(isPhoneNumber('4151234567')).toBe(false);
});
test('check is 415-123-4567 a valid phone number', () => {
  expect(isPhoneNumber('415-123-4567')).toBe(true);
});
test('check is (415)1234567 a valid phone number', () => {
  expect(isPhoneNumber('(415)1234567')).toBe(false);
});
test('check is (415) 123-4567 a valid phone number', () => {
  expect(isPhoneNumber('(415) 123-4567')).toBe(true);
});
// isEmail test
test('check is hoy@ucsd.edu a valid email', () => {
  expect(isEmail('hoy@ucsd.edu')).toBe(true);
});
test('check is hoy@gmail.com a valid email', () => {
  expect(isEmail('hoy@gmail.com')).toBe(true);
});
test('check is hoygmail.com a valid email', () => {
  expect(isEmail('hoygmail.com')).toBe(false);
});
test('check is hoy@ucsd.eduu a valid email', () => {
  expect(isEmail('hoy@ucsd.eduu')).toBe(false);
});
// isStrongPassword tests
test('correct format 1', () => {
  let password = "a1432423423";
  expect(isStrongPassword(password)).toBe(true);
});

test('correct format 2', () => {
  let password = "abbb";
  expect(isStrongPassword(password)).toBe(true);
});

test('wrong format 3', () => {
  let password = "123456789";
  expect(isStrongPassword(password)).toBe(false);
});

test('wrong format 4', () => {
  let password = "ab";
  expect(isStrongPassword(password)).toBe(false);
});

// isDate tests
test('correct format 1', () => {
  let date = "12/12/2020";
  expect(isDate(date)).toBe(true);
});

test('correct format 2', () => {
  let date = "1/1/2020";
  expect(isDate(date)).toBe(true);
});

test('wrong format 3', () => {
  let date = "12/12/20";
  expect(isDate(date)).toBe(false);
});

test('wrong format 4', () => {
  let date = "12/12/202";
  expect(isDate(date)).toBe(false);
});

// isHexColor tests
test('correct format 1', () => {
  let color = "#fff";
  expect(isHexColor(color)).toBe(true);
});

test('correct format 2', () => {
  let color = "#ffffff";
  expect(isHexColor(color)).toBe(true);
});

test('wrong format 3', () => {
  let color = "#ff";
  expect(isHexColor(color)).toBe(false);
});

test('wrong format 4', () => {
  let color = "#fffff";
  expect(isHexColor(color)).toBe(false);
});
