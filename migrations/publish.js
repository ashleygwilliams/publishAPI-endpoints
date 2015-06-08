exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (t) {
      t.text('id');
      t.text('name').notNullable().unique();
    })
    .createTable('projects', function (t) {
      t.text('id');
      t.text('user_name').notNullable().references('name').inTable('users');
      t.text('title').unique().notNullable();
    })
    .createTable('files', function (t) {
      t.text('id');
      t.text('project_title').notNullable().references('title').inTable('projects');
      t.text('path').unique().notNullable();
      t.text('type');
    })
}; 


exports.down = function (knex) {
  return knex.schema
    .dropTable('users')
    .dropTable('projects')
    .dropTable('files');
};
