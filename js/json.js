// javascript object notation
// JSON
const user = {
    id:11,
    name: 'Gorib Amir',
    job:'Actor'
};
const stringigified = JSON.stringify(user);

//console.log(user);
//console.log(stringigified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    products:['laptop', 'mobile', 'pepsi'],
    owner:{
        name: 'Alia Bhat',
        profession: 'actor'
    },
    isExpensive: false
};

const shopStringified = JSON.stringify(shop);
//console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);