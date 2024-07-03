import {afterEach, beforeEach, describe, expect, test} from '@jest/globals';
import { Storage } from "./Storage";

// создаём экземпляр хранилища
const storage = new Storage();

// инициализируем пустое хранилище перед каждым тестом
beforeEach(() => {
    storage.init();
})

// очищаем хранилище после каждого теста
afterEach(() => {
    storage.clear();
})

describe('[Storage] Тесты хранилища ключ-значение', () => {
    test('добавление элемента', () => {
        storage.add('0', 'Kevin');

        const storageLength = storage.getStorageLength();
        expect(storageLength).toBe(1);
    })

    test('удаление элемента', () => {
        storage.add('1', 'Jim');
        storage.add('2', 'Pam');

        storage.remove('2');

        const storageLength = storage.getStorageLength();
        expect(storageLength).toBe(1);
    })
})