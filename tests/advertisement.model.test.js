const Advertisment = require('../models/advertisement');

describe('Smoke Tests for Ads', () => {
    test('Adding valid Phone Number', () => {
        const Ad_test = new Advertisment();
        Ad_test.phoneNumber = '+123456789';
        expect(Ad_test._phoneNumber).toBe('+123456789');
    });
    test('Adding invalid Phone Number', () => {
        const Ad_test = new Advertisment();
        Ad_test.phoneNumber = '987654321';
        expect(Ad_test._phoneNumber).toBe('Invalid Number!');
    });
    test.skip('Adding author\'s name', () => {
        const Ad_test = new Advertisment();
        const newAuthor = 'John Smith';
        Ad_test.author = newAuthor;
        expect(Ad_test._author = newAuthor).toBe('John Smith');
    });
    test.todo('Adding Ad\'s text');
});