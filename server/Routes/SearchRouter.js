import express from 'express';
import {searchWeather} from '../Controllers/searchWeather.js';

const router = express.Router();

router.get('/search/:query', searchWeather);

export default router
