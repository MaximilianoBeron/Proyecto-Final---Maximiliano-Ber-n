var pool = require('./bd');

/*para listar las novedades*/
async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}

async function deleteNovedadesbyId(id) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}






module.exports = { getNovedades, deleteNovedadesbyId }