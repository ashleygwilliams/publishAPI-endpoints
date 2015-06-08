'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        knex('files').del(), 

        knex('files').insert({
          id: 1,
          project_title: 'spacecats-API',
          path: 'index.js',
          type: 'text'
        }),
        knex('files').insert({
          id: 2,
          project_title: 'spacecats-API',
          path: 'package.json',
          type: 'text'
        }),
        knex('files').insert({
          id: 3,
          project_title: 'spacecats-API',
          path: 'public/img/sagan.jpg',
          type: 'image'
        }),
        knex('files').insert({
          id: 4,
          project_title: 'sinatra-contrib',
          path: 'Gemfile',
          type: 'text'
        }),
        knex('files').insert({
          id: 5,
          project_title: 'webmaker-android',
          path: 'logo.png',
          type: 'image'
        }),
        knex('files').insert({
          id: 6,
          project_title: 'makedrive',
          path: '.gitignore',
          type: 'text'
        })
    );
};
