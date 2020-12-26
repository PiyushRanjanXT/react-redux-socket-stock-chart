const apiCall = {
    post: async ({ endpoint, data }) => {

        const origin = 'http://kaboom.rksv.net/api/';
        const url = `${origin}${endpoint}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept-Encoding': 'gzip'
            },
            body: JSON.stringify(data)
        });
        return response.json(); // parses JSON response into native JavaScript objects

    },

    get: async ({ endpoint }) => {

        const origin = 'http://kaboom.rksv.net/api/';
        const url = `${origin}${endpoint}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept-Encoding': 'gzip'
            },
        });
        return response.json(); // parses JSON response into native JavaScript objects

    }

};
export default apiCall;