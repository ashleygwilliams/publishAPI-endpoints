'use strict';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(), 

    knex('users').insert({ name: 'ag_dubs' }),
    knex('users').insert({ name: 'k88hudson' }),
    knex('users').insert({ name: 'jbuckca' })
  );
};
