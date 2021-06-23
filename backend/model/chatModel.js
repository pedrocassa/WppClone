import db from '../database/dbConfig.js';

export function getMsgs(callback) {
    db.execute(`SELECT idMensagem, login, mensagem, data FROM mensagens INNER JOIN usuarios ON mensagens.idRemetente = usuarios.id`, async (error, result) => {
        await callback(error, result);
    });
}
export function postMsgs(id, msg, callback) {
    db.query(`INSERT INTO mensagens(idRemetente, idDestinatario, mensagem, data) VALUES (${id}, 1, '${msg}', '${new Date().toISOString().slice(0, 19).replace('T', ' ')}')`, async (error, result) => {
        await callback(error, result);
    });
}