import app from './app'    
import { config } from './config';

app.listen(config.port, () => {
    console.log(`** App env ${config.environment} **\n`);
    console.log(`** 🚀 App running at http://localhost:${config.port}/api/v1/ **`);
});