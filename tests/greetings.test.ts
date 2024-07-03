import { greetings } from "./greetings";

describe('[greetings]', () => {
    test('< 0', () => {
        //const result = greetings(-1);
        expect(() => greetings(-1)).toThrow("Неверное количество часов");
    });
    test('> 23', () => {
        //const result = greetings(24);
        expect(() => greetings(24)).toThrow("Неверное количество часов");
    });
    test('= 0', () => {
        const result = greetings(0);
        expect(result).toBe('Доброй ночи!');
    });
    test('>= 5', () => {
        const result = greetings(5);
        expect(result).toBe('Доброе утро!');
    });
    test('>= 12', () => {
        const result = greetings(12);
        expect(result).toBe('Добрый день!');
    });
    test('>= 18', () => {
        const result = greetings(18);
        expect(result).toBe('Добрый вечер!');
    });
    test('>= 22', () => {
        const result = greetings(22);
        expect(result).toBe('Доброй ночи!');
    });
    test('< 0', () => {
        try {
            greetings(-1);
        }
        catch (error) {
            expect(error.message).toBe("Неверное количество часов");
        }
    });
    test('> 23', () => {
        try {
            greetings(24);
        }
        catch (error) {
            expect(error.message).toBe("Неверное количество часов");
        }
    });
});