'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        knex('projects').del(), 

        // Inserts seed entries
        knex('projects').insert({
          user_name: 'ag_dubs',
          title: 'spacecats-API'
        }),
        knex('projects').insert({
          user_name: 'ag_dubs',
          title: 'sinatra-contrib'
        }),
        knex('projects').insert({
          user_name: 'k88hudson',
          title: 'webmaker-android'
        }),
        knex('projects').insert({
          user_name: 'jbuckca',
          title: 'makedrive'
        })
    );
};
