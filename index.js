module.exports = {
    randomQuotePromise: function () {
        return new Promise((resolve, reject) => {
            fetch('https://graphql-api-backend.herokuapp.com/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                query {
                    randomQuote {
                        id
                        text
                        author
                    }
                }
            `
                })
            })
                .then(res => res.json())
                .then(({data}) => data.randomQuote[0])
                .then(q => resolve(
                    {
                        text: q.text,
                        author: q.author
                    }))
                .catch(err => reject(err));
        })
    }
};

