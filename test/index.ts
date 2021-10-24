/* eslint-disable no-undef */

import assert from 'assert';
import { getPokemonSprite, loadGeneration } from '../src/index.js';

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

describe('getPokemonSprite method', () => {
  describe('Project Pokemon Name', () => {
    describe('Load generation using the number', () => {
      it('Should return the url of the Pikachu front facing default sprite', () => {
        assert.equal(getPokemonSprite('pikachu', 1).front?.default, 'https://projectpokemon.org/images/normal-sprite/pikachu.gif');
      });
    });

    describe('Load generation using the PokeAPI generation', () => {
      it('Should return the url of the Pikachu front facing shiny sprite', () => {
        assert.equal(getPokemonSprite('pikachu', 'generation-i').front?.shiny, 'https://projectpokemon.org/images/shiny-sprite/pikachu.gif');
      });
    });
  });

  describe('PokeAPI ID', () => {
    describe('Load generation using the number', () => {
      it('Should return the url of the Pikachu front facing default sprite', () => {
        assert.equal(getPokemonSprite(25, 1).front?.default, 'https://projectpokemon.org/images/normal-sprite/pikachu.gif');
      });

      it('Should return the url of the Pikachu back facing default sprite', () => {
        assert.equal(getPokemonSprite(25, 1).back?.default, 'https://projectpokemon.org/images/sprites-models/normal-back/pikachu.gif');
      });
    });

    describe('Load generation using the PokeAPI generation', () => {
      it('Should return the url of the Pikachu front facing shiny sprite', () => {
        assert.equal(getPokemonSprite(25, 'generation-i').front?.shiny, 'https://projectpokemon.org/images/shiny-sprite/pikachu.gif');
      });

      it('Should return the url of the Pikachu back facing shiny sprite', () => {
        assert.equal(getPokemonSprite(25, 'generation-i').back?.shiny, 'https://projectpokemon.org/images/sprites-models/shiny-back/pikachu.gif');
      });
    });
  });
});
