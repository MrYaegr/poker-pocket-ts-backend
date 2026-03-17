import fs from 'fs';
import path from 'path';
import {
  asciiCardToStringCard,
  asciiToStringCardsArray,
  getRandomBotName,
  stringToAsciiCardsArray
} from './utils';

describe('Utils', () => {
  it('should return correct card string', () => {
    expect(asciiCardToStringCard('A♠')).toBe('As');
  });

  it('should convert ascii cards array to string cards array', () => {
    expect(asciiToStringCardsArray(['A♠', '10♣'])).toEqual(['As', 'Tc']);
  });

  it('should convert string cards array to ascii cards array', () => {
    expect(stringToAsciiCardsArray([
      {value: 'A', suit: 's'},
      {value: 'T', suit: 'c'}
    ])).toEqual(['A♠', '10♣']);
  });

  it('should return random bot name', () => {
    expect(getRandomBotName(['Isaac', 'Reynolds']).length).toBeGreaterThan(2);
  });

  it('should return Bot fallback when all names are already in use', () => {
    const namesFilePath = path.join(__dirname, 'assets', 'names.txt');
    const usedNames = fs.readFileSync(namesFilePath, 'utf-8').split('\n');
    expect(getRandomBotName(usedNames)).toBe('Bot');
  });
});
