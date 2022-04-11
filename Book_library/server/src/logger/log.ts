import winston from 'winston';
import path from 'path';

const LOGS_DIR = path.join(__dirname, '../logs');

const Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] })
  ),
  transports: [
    new winston.transports.File({
      filename: `${LOGS_DIR}/booking.log`,
      format: winston.format.combine(
        winston.format.json()
      )
    })
  ],
  exitOnError: false
})

export default Logger;