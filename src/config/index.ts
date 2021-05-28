import dotenv from 'dotenv';
import { Dialect, IConfig } from '../interface/config';

const environment = dotenv.config();

if (!environment) {
    throw new Error('Couldn\'t find env file!');
}

export const config: IConfig = {
    port: process.env.PORT || 3000,
    dbName: process.env.DB_NAME || 'node-docker',
    dbUsername: process.env.DB_USERNAME || 'root',
    dbPassword: process.env.DB_PASSWORD || '',
    dbHost: process.env.DB_HOST || 'localhost',
    dbDialect: Dialect.MY_SQL,
    jwtSecret: process.env.JWT_SECRET || 'coolcatsecrets',
    sentryKey: process.env.RAVEN || '',
    environment: process.env.NODE_ENV || 'development'
};