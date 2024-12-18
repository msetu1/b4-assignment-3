import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function service() {
  try {
    await mongoose.connect(config.database_Url as string);
    app.listen(config.port, () => {
      console.log(`Blog Project on port ${config.port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

service();
