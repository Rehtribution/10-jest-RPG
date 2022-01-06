const Potion = require('../lib/Potion');
const Enemy = require('../lib/enemy');

jest.mock('../lib/Potion');


test('creates a enemy object', () => {
    const enemy = new Enemy('boo');

    expect(enemy.name).toBe('boo');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

test("gets enemy's stats as an object", () => {
    const enemy = new Enemy('Dave');

    expect(enemy.getStats()).toHaveProperty('potions');
    expect(enemy.getStats()).toHaveProperty('health');
    expect(enemy.getStats()).toHaveProperty('strength');
    expect(enemy.getStats()).toHaveProperty('agility');
});

test('gets inventory from enemy or returns false', () => {
    const enemy = new Enemy('Dave');

    expect(enemy.getInventory()).toEqual(expect.any(Array));

    enemy.inventory = [];

    expect(enemy.getInventory()).toEqual(false);
});

test("gets enemy's health value", () => {
    const enemy = new Enemy('Dave');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('Dave');

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;

    expect(enemy.isAlive()).toBeFalsy();
});

test("subtracts from enemy's health", () => {
    const enemy = new Enemy('Dave');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(99999);

    expect(enemy.health).toBe(0);
});

test("gets enemy's attack value", () => {
    const enemy = new Enemy('Dave');
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test('adds a potion to the inventory', () => {
    const enemy = new Enemy('Dave');
    const oldCount = enemy.inventory.length;

    enemy.addPotion(new Potion());

    expect(enemy.inventory.length).toBeGreaterThan(oldCount);
});

test('uses a potion from inventory', () => {
    const enemy = new Enemy('Dave');
    enemy.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = enemy.inventory.length;

    enemy.usePotion(1);

    expect(enemy.inventory.length).toBeLessThan(oldCount);
});