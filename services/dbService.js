const db = require('../configs/dbConfig');

exports.query = async (query, params) => {
    return await db.execute(query, params);
};
