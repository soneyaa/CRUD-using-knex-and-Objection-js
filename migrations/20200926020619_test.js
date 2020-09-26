
exports.up = function(knex) {
    return knex.schema.createTable("user",function(table){
        table.increments("id");
        table.string("Name");
        table.string("Email");
        table.string("Mobile no.");
    })

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user");
};
