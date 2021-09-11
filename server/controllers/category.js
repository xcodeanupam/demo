const router = require('express').Router();
const Category = require('../models/category');
const amazonPaapi = require('amazon-paapi');
const commonParameters = {
    AccessKey: 'AKIAJL3KIWHQU5SZ3Q4Q',
    SecretKey: 'wvdmyHScxQfYuFr9qtf3Ynxy9hBJ26IDYt0ytYMs',
    PartnerTag: 'reviewstackas-21', // yourtag-20
    PartnerType: 'Associates', // Default value is Associates.
    Marketplace: 'www.amazon.com', // Default value is US. Note: Host and Region are predetermined based on the marketplace value. There is no need for you to add Host and Region as soon as you specify the correct Marketplace value. If your region is not US or .com, please make sure you add the correct Marketplace value.
};

router.post('/listcategory', async (req, res) => {
    try {
        const category = await Category.find()
        res.send(category)
    } catch (error) {
        res.status(500).send()
    }
});

router.post('/amazonpro', async (req, res) => {
    try {
        const requestParameters = {
            ItemIds: ['B00X4WHP5E', 'B00ZV9RDKK'],
            ItemIdType: 'ASIN',
            Condition: 'New',
            Resources: [
              'Images.Primary.Medium',
              'ItemInfo.Title',
              'Offers.Listings.Price',
            ],
          };
          
        /** Promise */
        amazonPaapi
            .GetVariations(commonParameters, requestParameters)
            .then((data) => {
                // do something with the success response.
                console.log(data);
                res.send(category)
            })
            .catch((error) => {
                // catch an error.
                console.log(error);
            });

    } catch (error) {
        res.status(500).send()
    }
});

module.exports = router;
