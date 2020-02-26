const { Router } = require('express');
const router = Router();

const { getMaestros } = require('../controllers/index.controller');

router.get('/maestros', getMaestros);
/*
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser);
*/
module.exports = router;
