const jwt = require('jsonwebtoken');

let secretOrPrivateKey = 'abcdefg';

function getToken(content, params) { 
    return jwt.sign(content, secretOrPrivateKey, params);
}

function checkToken(token, callback) {
    jwt.verify(token, secretOrPrivateKey, (err, decode)=> {
        if (err) {
            // console.log(err);
            let jsonData = {
                status: -1,
                message: 'err',
                data: {
                    name: err.name,
                    message: err.message
                }
            }
            callback(jsonData);
        } else {
            // console.log(decode);
            let jsonData = {
                status: 0,
                message: 'OK',
                data: decode
            }
            callback(jsonData);
        }
    })
}

// let tokenContent = {
//     uid: 2
// };
// let params = {
//     expiresIn: 60 * 60 * 24 * 31  // 31天过期
// }

// let token = getToken(tokenContent, params);
// // console.log(token);
// var aatoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTU3NTI0NjQzMywiZXhwIjoxNTc3OTI0ODMzfQ.PQBPsgaV3mMnA7znHxxBerj_3Oq7HrfpWi8XtK9dJXs';

// checkToken(aatoken,(r)=>{
//     console.log(r);
// })

module.exports = { getToken, checkToken };
