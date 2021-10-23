/* eslint-disable no-undef */

import assert from 'assert';
import {
  fromPokeAPI, getPokemonSprite, loadFromPokeAPI, loadGeneration,
} from '../src/index.js';

console.log();

describe('Get Pokemon Sprite Method', () => {
  describe('Load generation using the number', () => {
    it('Should return the url of the Pikachu front facing default sprite', () => {
      assert.equal(getPokemonSprite('pikachu', 1).front?.default, 'https://projectpokemon.org/images/normal-sprite/pikachu.gif');
    });

    it('Should return the url of the Pikachu back facing default sprite', () => {
      assert.equal(getPokemonSprite('pikachu', 1).back?.default, 'https://projectpokemon.org/images/sprites-models/normal-back/pikachu.gif');
    });
  });

  describe('Load generation using the PokeAPI generation', () => {
    it('Should return the url of the Pikachu front facing shiny sprite', () => {
      assert.equal(getPokemonSprite('pikachu', 'generation-i').front?.shiny, 'https://projectpokemon.org/images/shiny-sprite/pikachu.gif');
    });

    it('Should return the url of the Pikachu back facing shiny sprite', () => {
      assert.equal(getPokemonSprite('pikachu', 'generation-i').back?.shiny, 'https://projectpokemon.org/images/sprites-models/shiny-back/pikachu.gif');
    });
  });
});

/* eslint-disable dot-notation */
describe('Load Generation Method', () => {
  describe('Dot notation', () => {
    describe('Load generation using the number', () => {
      it('Should return the url of the Pikachu front facing default sprite', () => {
        assert.equal(loadGeneration(1).pikachu.front?.default, 'https://projectpokemon.org/images/normal-sprite/pikachu.gif');
      });

      it('Should return the url of the Pikachu back facing default sprite', () => {
        assert.equal(loadGeneration(1).pikachu.back?.default, 'https://projectpokemon.org/images/sprites-models/normal-back/pikachu.gif');
      });
    });

    describe('Load generation using the PokeAPI generation', () => {
      it('Should return the url of the Pikachu front facing shiny sprite', () => {
        assert.equal(loadGeneration('generation-i').pikachu.front?.shiny, 'https://projectpokemon.org/images/shiny-sprite/pikachu.gif');
      });

      it('Should return the url of the Pikachu back facing shiny sprite', () => {
        assert.equal(loadGeneration('generation-i').pikachu.back?.shiny, 'https://projectpokemon.org/images/sprites-models/shiny-back/pikachu.gif');
      });
    });
  });

  describe('Index Notation', () => {
    describe('Load generation using the number', () => {
      it('Should return the url of the Pikachu front facing default sprite', () => {
        assert.equal(loadGeneration(1)['pikachu'].front?.default, 'https://projectpokemon.org/images/normal-sprite/pikachu.gif');
      });

      it('Should return the url of the Pikachu back facing default sprite', () => {
        assert.equal(loadGeneration(1)['pikachu'].back?.default, 'https://projectpokemon.org/images/sprites-models/normal-back/pikachu.gif');
      });
    });

    describe('Load generation using the PokeAPI generation', () => {
      it('Should return the url of the Pikachu front facing shiny sprite', () => {
        assert.equal(loadGeneration('generation-i')['pikachu'].front?.shiny, 'https://projectpokemon.org/images/shiny-sprite/pikachu.gif');
      });

      it('Should return the url of the Pikachu back facing shiny sprite', () => {
        assert.equal(loadGeneration('generation-i')['pikachu'].back?.shiny, 'https://projectpokemon.org/images/sprites-models/shiny-back/pikachu.gif');
      });
    });
  });
});
/* eslint-enable dot-notation */

describe('PokeAPI Sanitization', () => {
  describe('Convert the names coming from PokeAPI', () => {
    it('Should return the Project Pokemon valid name of the "Pikachu  Rockstar"', () => {
      assert.equal(fromPokeAPI('pikachu-rock-star'), 'pikachu-rockstar');
    });

    it('Should return the Project Pokemon valid name of the "Pikachu Kanto Cap"', () => {
      assert.equal(fromPokeAPI('pikachu-original-cap'), 'pikachu-kantocap');
    });

    it('Should return the Project Pokemon valid name of the "Pikachu Hoenn Cap"', () => {
      assert.equal(fromPokeAPI('pikachu-hoenn-cap'), 'pikachu-hoenncap');
    });

    it('Should return the Project Pokemon valid name of the "Gigantamax Pikachu"', () => {
      assert.equal(fromPokeAPI('pikachu-gmax'), 'pikachu-gigantamax');
    });

    it('Should return the Project Pokemon valid name of the "Totem Alolan Raticate"', () => {
      assert.equal(fromPokeAPI('raticate-totem-alola'), 'raticate-totem');
    });
  });

  describe('Load from PokeAPI number generation', () => {
    it('Should return the url of the "Pikachu  Rockstar" front facing shiny sprite', () => {
      assert.equal(loadFromPokeAPI('pikachu-rock-star', 1).front?.shiny,
        'https://projectpokemon.org/images/shiny-sprite/pikachu-rockstar.gif');
    });

    it('Should return the url of the "Gigantamax Pikachu" front facing shiny sprite', () => {
      assert.equal(loadFromPokeAPI('pikachu-gmax', 8).front?.shiny,
        'https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/pikachu-gigantamax.gif');
    });
  });

  describe('Load from PokeAPI string generation', () => {
    it('Should return the url of the "Totem Alolan Raticate" front facing shiny sprite', () => {
      assert.equal(loadFromPokeAPI('raticate-totem-alola', 'generation-i').front?.shiny,
        'https://projectpokemon.org/images/shiny-sprite/raticate-totem.gif');
    });
  });
});
