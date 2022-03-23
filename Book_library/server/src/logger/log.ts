import winston from 'winston';
import path from 'path';

const LOGS_DIR = path.join(__dirname, '../logs');

// const logFormat = winston.format.printf(info => `${info['timestamp']} ${info.level} [${info['label']}]: ${info.message}`);

const Logger = winston.createLogger({
  // level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  level: 'info',
  format: winston.format.combine(
    // winston.format.label({ label: path.basename(process.mainModule.filename) }),
    // winston.format.label({ label: 'hi all' }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    // Format the metadata object
    winston.format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] })
  ),
  transports: [
    // new winston.transports.Console({
    //   format: winston.format.combine(
    //     winston.format.colorize(),
    //     logFormat
    //   )
    // }),
    new winston.transports.File({
      filename: `${LOGS_DIR}/booking.log`,
      format: winston.format.combine(
     
        // winston.format.splat(),
        winston.format.json()
      )
    })
  ],
  exitOnError: false
})

export default Logger;