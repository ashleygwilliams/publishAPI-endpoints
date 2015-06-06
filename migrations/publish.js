exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (t) {
      t.increments('id');
      t.text('name').notNullable().unique();
    })
    .createTable('projects', function (t) {
      t.increments('id');
      t.integer('user_id').notNullable().references('name').inTable('users');
      t.text('title').notNullable();
    })
    .createTable('files', function (t) {
      t.increments('id');
      t.integer('project_id').notNullable().references('title').inTable('projects');
      t.text('path').notNullable();
    })
}; 


exports.down = function (knex) {
  return knex.schema
    .dropTable('users')
    .dropTable('projects')
    .dropTable('files');
};
