var pool = require('./bd');


/*para listar novedades*/
async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}


/*para eliminar novedades*/
async function deleteNovedadesbyId(id) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}


/*para insertar novedades*/
async function insertNovedades(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


/*para traer los datos a modificar de una sola novedad*/
async function getNovedadesbyId(id) {
    var query = "select * from novedades where id=?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}


/*para insertar novedades*/
async function modificarNovedadesById(obj, id) {
    try {
        var query = "update novedades set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}






module.exports = { getNovedades, deleteNovedadesbyId, insertNovedades, getNovedadesbyId, modificarNovedadesById }