
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', table => {
        table.increments();
        table.string('title').notNullable();
        table.text('body').notNullable();
        table.integer('likes');
        table.timestamps(true, true);
        table.integer('creator_id').notNullable();
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts');
};
