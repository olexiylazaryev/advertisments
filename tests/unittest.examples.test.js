const Advertisment = require('../models/advertisement');

describe('Unit Tests for Ads', () => {

    test('Verify Addition', () => {
        expect(4 + 4).toBe(8);
    });

    test('Verify Greater that Sum', () => {
        const Var_1=20;
        const Var_2=10;
        expect(Var_1 * Var_2).toBeGreaterThan(Var_1 + Var_2);
    });

    test('Verify if Null', () => {
        const Var_1=null;
        expect(Var_1).toBeNull();
    });

    test('Verify if Undefined', () => {
        let Var_1;
        expect(Var_1).toBeUndefined();
    });

    test('Verify if Not Null', () => {
        const Var_1=1;
        expect(Var_1).not.toBeNull();
    });
});