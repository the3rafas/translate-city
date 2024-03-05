const fs = require('fs');

const enData = require('./translated_products.js');
const translatte = require('translatte');

const newCityNames = [];
new Promise(async (resolve, reject) => {
  for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(enData))) {
    console.log('>', key);
    try {
      if (!descriptor.value.ar[2]) continue;
      await translatte(descriptor.value.ar[2], {
        from: 'ar',
        to: 'en',
      })
        .then((res) => {
          newCityNames.push({ 'en-title': res.text, id: key });
        })
        .catch((err) => {
          console.error('>', err);
          newCityNames.push({ 'en-title': '', id: key });
        });
    } catch (error) {
      console.log('wow');
    }
  }
  fs.writeFileSync('product-title.json', JSON.stringify(newCityNames, null, 4));
}).then(() => {});
