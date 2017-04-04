const colorMap = {
    1: {
        1: 0,
        0: 0
    },
};

const processCustomer = (customer) => {
    customer.forEach((colorObj) => {
        colorMap[colorObj.color] = 1 || colorMap[colorObj.color]++;
    })
}

const processor = (customerArray) => {


    customerArray.forEach((customer) => {
        console.log("Color Num", customer);
        processCustomer(customer)
    });
}

module.exports = processor;
