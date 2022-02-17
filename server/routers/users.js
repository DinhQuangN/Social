import express from 'express';
import { getUser, login, register } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUser);
router.post('/login', login);
router.post('/register', register);

export default router;
