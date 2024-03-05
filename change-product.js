const fs = require('fs');
const product = JSON.parse(fs.readFileSync('product-title.json', 'utf8'));
const enData = require('./translated_products.js');

const mappedProduct = product.map((item) => {
  const arName = enData?.[item.id]?.ar?.[2];
  return { ...item, 'ar-title': arName || '' };
});
fs.writeFileSync('new-product-title.json', JSON.stringify(mappedProduct, null, 4));
