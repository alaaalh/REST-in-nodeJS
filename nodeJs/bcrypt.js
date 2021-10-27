const bcrypt = require('bcrypt');

const password = '11111';

bcrypt.hash(password , 10).then(console.log);

const hash = "$2b$10$NfJDxAv9aRxV2xswj2lPqO53.t9qHo0.ufiejKQUwGxK7I5HXY5.K"

bcrypt.compare(password ,hash).then(console.log)
