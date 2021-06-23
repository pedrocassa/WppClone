import db from '../database/dbConfig.js';

export function login(name, password, callback) {
    db.execute(`SELECT * FROM usuarios WHERE login = '${name}' AND senha = ${password}`, async (error, result) => {
        await callback(error, result);
    });
}