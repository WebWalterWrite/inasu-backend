import { expect } from 'chai';
import { isEmpty, isMinChar, isMaxChar, isOnlyLetters, isEmail } from '../app/services/validation/fn.validation.';

describe('Testing unit input', () => {
  describe('test if empty', () => {
    it('return true', () => {
      expect(isEmpty('')).to.be.true;
    })
  });

  describe('test if min length', () => {
    it('return true', () => {
      expect(isMinChar('sammy')).to.be.true;
    })
  });

  describe('test if max length', () => {
    it('return true', () => {
      expect(isMaxChar('el dueno')).to.be.true;
    })
  });

  describe('test is only letters', () => {
    it('return true', () => {
      expect(isOnlyLetters('sammy')).to.be.true;
    })
  });

  describe('test is a valid email format', () => {
    it('returns true', () => {
      expect(isEmail('Sammy@gmail.com')).to.be.true;
    } )
  });


});

