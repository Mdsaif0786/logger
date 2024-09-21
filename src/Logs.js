import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
const { LOGGING_LEVEL, MAX_FILE_SIZE, FILE_ROTATION_PERIOD } = process.env

class Logs {
  constructor (filePath, loggingConsole = false) {
    const myTransPort = [
      new DailyRotateFile({
        filename: `${filePath}-%DATE%.log`, // Log file pattern
        datePattern: 'YYYY-MM-DD', // Rotate daily based on this pattern
        zippedArchive: true, // Compress the rotated log files
        maxSize: MAX_FILE_SIZE || '200m', // File Size to write in single file m = mb, g =gb, k=kb
        maxFiles: FILE_ROTATION_PERIOD || '14d' // Time period to rotate file h =hour, d= day, w= weak, m= month, y= year
      })
    ]
    if (loggingConsole === 'true' || loggingConsole === true) {
      myTransPort.push(new transports.Console({
        format: format.combine(
          format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
          }),
          format.colorize(),
          format.printf(({ timestamp, level, message }) => {
            return `${timestamp}-${level}-${message}`
          })
        )
      }))
    }
    this.logger = createLogger({
      level: LOGGING_LEVEL || 'debug',
      transports: myTransPort
    })
  }

  info (msg) {
    if (typeof msg === 'object') {
      msg = JSON.stringify(msg)
    }
    this.logger.info(msg)
  }

  error (msg) {
    if (typeof msg === 'object') {
      msg = JSON.stringify(msg)
    }
    this.logger.error(msg)
  }

  warn (msg) {
    if (typeof msg === 'object') {
      msg = JSON.stringify(msg)
    }
    this.logger.warn(msg)
  }

  debug (msg) {
    if (typeof msg === 'object') {
      msg = JSON.stringify(msg)
    }
    this.logger.debug(msg)
  }
}

export default Logs
