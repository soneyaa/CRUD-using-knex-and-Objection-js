
// User Model 

const { Model } = require('objection');

class Post extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'user';
  }

}

module.exports = Post;