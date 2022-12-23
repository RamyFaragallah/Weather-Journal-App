const { json } = require("body-parser");

const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        Headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (err) {
        console.log(err);
    }
};

postData('/addMovie', { movie: 'Avatar', rate: 8.2 });