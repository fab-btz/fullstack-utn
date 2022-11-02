var pool = require('./db');

async function getProjects() {
    var query = 'SELECT * FROM projects ORDER BY id DESC';
    var rows = await pool.query(query);
    return rows;
}

async function insertProject(obj) {
    try {
        var query = 'INSERT INTO projects set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteProject(id) {
    try {
        var query = 'DELETE FROM projects WHERE  id = ?';
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getProjects, insertProject, deleteProject }