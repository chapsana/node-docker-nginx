import express, {
    Application,
    Request,
    Response,
    NextFunction
} from 'express';

import { router } from './api/routes';
import { config } from './config';
import { User } from './models/user';
import { sequelize } from './config/sequelize';
import Raven = require('raven-js');
import { handleError } from './api/middlewares/error.middleware';

const app: Application = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

sequelize.addModels([User]);

// Configuring Sentry for capturing errors on production
Raven.config(config.sentryKey).install();

// Test routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ status: 'This is public test route' })
});


app.use('/api', router);

// Express-Error middleware
app.use(handleError);

export default app;