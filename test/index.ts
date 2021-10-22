/* eslint-disable no-undef */

import assert from 'assert';
import { fromPokeAPI, getGeneration1, getGeneration8 } from '../src/index.js';

console.log();

describe('Dot Notation', () => {
  describe('Return Pikachu front facing default sprite', () => {
    it('Should return the url', () => {
      assert.equal(getGeneration1().pikachu.front?.default, 'https://projectpokemon.org/images/normal-sprite/pikachu.gif');
    });
  });

  describe('Return Pikachu back facing default sprite', () => {
    it('Should return the url', () => {
      assert.equal(getGeneration1().pikachu.back?.default, 'https://projectpokemon.org/images/sprites-models/normal-back/pikachu.gif');
    });
  });

  describe('Return Pikachu front facing shiny sprite', () => {
    it('Should return the url', () => {
      assert.equal(getGeneration1().pikachu.front?.shiny, 'https://projectpokemon.org/images/shiny-sprite/pikachu.gif');
    });
  });

  describe('Return Pikachu back facing shiny sprite', () => {
    it('Should return the url', () => {
      assert.equal(getGeneration1().pikachu.back?.shiny, 'https://projectpokemon.org/images/sprites-models/shiny-back/pikachu.gif');
    });
  });
});

/* eslint-disable dot-notation */
describe('Index Notation', () => {
  describe('Return Pikachu front facing default sprite', () => {
    it('Should return the url', () => {
      assert.equal(getGeneration1()['pikachu'].front?.default, 'https://projectpokemon.org/images/normal-sprite/pikachu.gif');
    });
  });

  describe('Return Pikachu back facing default sprite', () => {
    it('Should return the url', () => {
      assert.equal(getGeneration1()['pikachu'].back?.default, 'https://projectpokemon.org/images/sprites-models/normal-back/pikachu.gif');
    });
  });

  describe('Return Pikachu front facing shiny sprite', () => {
    it('Should return the url', () => {
      assert.equal(getGeneration1()['pikachu'].front?.shiny, 'https://projectpokemon.org/images/shiny-sprite/pikachu.gif');
    });
  });

  describe('Return Pikachu back facing shiny sprite', () => {
    it('Should return the url', () => {
      assert.equal(getGeneration1()['pikachu'].back?.shiny, 'https://projectpokemon.org/images/sprites-models/shiny-back/pikachu.gif');
    });
  });
});
/* eslint-enable dot-notation */

describe('PokeAPI Sanitization', () => {
  describe('Return a "Pikachu  Rockstar" Project Pokemon valid name', () => {
    it('Should return the sanitized name', () => {
      assert.equal(fromPokeAPI('pikachu-rock-star'), 'pikachu-rockstar');
    });
  });

  describe('Return a "Pikachu Kanto Cap" Project Pokemon valid name', () => {
    it('Should return the sanitized name', () => {
      assert.equal(fromPokeAPI('pikachu-original-cap'), 'pikachu-kantocap');
    });
  });

  describe('Return a "Pikachu Hoenn Cap" Project Pokemon valid name', () => {
    it('Should return the sanitized name', () => {
      assert.equal(fromPokeAPI('pikachu-hoenn-cap'), 'pikachu-hoenncap');
    });
  });

  describe('Return a "Gigantamax Pikachu" Project Pokemon valid name', () => {
    it('Should return the sanitized name', () => {
      assert.equal(fromPokeAPI('pikachu-gmax'), 'pikachu-gigantamax');
    });
  });

  describe('Return a "Totem Alolan Raticate" Project Pokemon valid name', () => {
    it('Should return the sanitized name', () => {
      assert.equal(fromPokeAPI('raticate-totem-alola'), 'raticate-totem');
    });
  });

  describe('Return "Pikachu  Rockstar" front facing shiny sprite', () => {
    it('Should return the url', () => {
      assert.equal(getGeneration1()[fromPokeAPI('pikachu-rock-star')].front?.shiny,
        'https://projectpokemon.org/images/shiny-sprite/pikachu-rockstar.gif');
    });
  });

  describe('Return "Gigantamax Pikachu" front facing shiny sprite', () => {
    it('Should return the url', () => {
      assert.equal(getGeneration8()[fromPokeAPI('pikachu-gmax')].front?.shiny,
        'https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/pikachu-gigantamax.gif');
    });
  });

  describe('Return "Totem Alolan Raticate" front facing shiny sprite', () => {
    it('Should return the url', () => {
      assert.equal(getGeneration1()[fromPokeAPI('raticate-totem-alola')].front?.shiny,
        'https://projectpokemon.org/images/shiny-sprite/raticate-totem.gif');
    });
  });
});
