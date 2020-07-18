import queryString from 'query-string'
let rootUrl = 'https://www.fastmock.site/mock/0c652f4d46e039ad17cabdc001c488c1/api'
let myFetch = {
    get(url, queryParams) {
        url = rootUrl + url
        if (queryParams) {
            url += "?" + queryString.stringify(queryParams);
        }
        console.log(url)
        return fetch(url)
            .then(res => res.json())
    },
    post(url, body) {
        return fetch(rootUrl + url, {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
    }
}

export { myFetch };