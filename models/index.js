// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'NULL',
});

// Products belongToMany Tags (through ProductTag) https://sequelize.org/master/class/lib/associations/belongs-to-many.js~BelongsToMany.html
Product.belongsToMany(Tag, {
  through: ProductTag,
  //  modelName: 'product_tag',
  foreignKey: 'product_id',
  
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  //  modelName: 'product_tag',
  foreignKey: 'tag_id',
  
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};