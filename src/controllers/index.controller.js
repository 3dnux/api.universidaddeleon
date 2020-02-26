const { Pool } = require('pg');


const pool = new Pool({
    user: 'udl',
    host: '170.80.28.217',
    password: 'H0lA!kQu3h4cE',
    database: 'universidaddeleon',
    port: '8888'
});


const getMaestros = async (req, res) => {
    if(!req.headers.authorization) {
        let error = {'Error':'-1','Mensaje':'Falta el token de Autorización'}
        res.status(404).json(error)
    }else{
        if(req.headers.authorization === '018BgZ83b!Hol7239ns78kmaidbs7632ib783f7f874gf78') {
            const response = await pool.query('SELECT * FROM maestros');
            res.status(200).json(response.rows);
        }else{
            let error = {'Error':'-0','Mensaje':'El token de Autorización no es correcto'}
            res.status(404).json(error)
        }
    }
};

/*
const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

const createUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {name, email}
        }
    })
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const response =await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    res.json('User Updated Successfully');
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};
*/
module.exports = {
    getMaestros,

};
