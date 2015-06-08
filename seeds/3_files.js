'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        knex('files').del(), 

        knex('files').insert({
          project_title: 'spacecats-API',
          path: 'index.js',
          type: 'text'
        }),
        knex('files').insert({
          project_title: 'spacecats-API',
          path: 'package.json',
          type: 'text'
        }),
        knex('files').insert({
          project_title: 'spacecats-API',
          path: 'public/img/sagan.jpg',
          type: 'image'
        }),
        knex('files').insert({
          project_title: 'sinatra-contrib',
          path: 'Gemfile',
          type: 'text'
        }),
        knex('files').insert({
          project_title: 'webmaker-android',
          path: 'logo.png',
          type: 'image'
        }),
        knex('files').insert({
          project_title: 'makedrive',
          path: '.gitignore',
          type: 'text'
        })
    );
};
