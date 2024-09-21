
# Node.js Logger with Daily Rotation

A flexible and efficient logging solution for Node.js applications, built using `winston`, offering daily log rotation, compression, custom log levels, and more.

## Features

- **Daily Log Rotation**: Automatically rotates log files daily.
- **Compression**: Compresses old log files to save disk space.
- **Custom Log Levels**: Supports multiple log levels (`info`, `error`, `warn`, `debug`, etc.).
- **Console Logging**: Optionally logs to both files and the console.
- **Environment Variables Support**: Control logging behavior (log level, file size, retention) via environment variables.
- **Supports ES6 and CommonJS**: Works with both `import` (ES6) and `require` (CommonJS).

---

## Installation

To install the logger package, run:

```bash
npm install super-logger-winston
npm i super-logger-winston
```

---

## Usage

### 1. ES6 Modules (Using `import`)

```javascript
import Logs from 'super-logger-winston';

const loggingConsole = true  // default false
const loggingPath = './logs/application'
const logger = new Logs( loggingPath , loggingConsole);

// Log info
logger.info('Application started');
logger.info({server:'Server started successfuly'});     // it accept both string and object

// Log errors
logger.error({ error: 'Unhandled exception', stackTrace: 'stack trace here' });
```

### 2. CommonJS Modules (Using `require`)

```javascript
const Logs = require('super-logger-winston');

const loggingConsole = true  // default false
const loggingPath = './logs/application'
const logger = new Logs( loggingPath , loggingConsole);

// Log info
logger.info('Application started');
logger.info({server:'Server started successfuly'});     // it accept both string and object


// Log errors
logger.error({ error: 'Unhandled exception', stackTrace: 'stack trace here' });
```

---

## Constructor Parameters

- **`filePath`**: Base path for storing log files (e.g., `./logs/application`). Log files will be named with the pattern `application-YYYY-MM-DD.log`.
- **`loggingConsole`**: (Optional) If `true`, logs will be output to both files and the console.

### Example

```javascript
const logger = new Logs('./logs/app', true);

logger.info('Server started successfully');
logger.info({Server:'Server started successfully'});
logger.warn('Low disk space');
logger.error('Failed to connect to database');
```

---

## Log Levels

The logger supports the following log levels:

- **info**: General operational messages (e.g., "Server started").
- **error**: Critical issues that require immediate attention.
- **warn**: Non-critical issues, potential problems (e.g., "Low disk space").
- **debug**: Detailed debugging information for development.

### Example Usage

```javascript
logger.info('Application started');
logger.warn('User has low storage space');
logger.error('Failed to connect to database');
logger.debug('Database query executed successfully');

// Json format

logger.info({server:'Application started'});
logger.warn({DiskStorage:'User has low storage space'});
logger.error({DBConnection:'Failed to connect to database'});
logger.debug({DBConnection:'Database query executed successfully'});

```

---

## Log Rotation and File Management

- **Log Rotation**: Logs are rotated daily and saved with a timestamped filename, e.g., `application-2024-09-21.log`.
- **Compression**: Old logs are compressed into `.gz` format, e.g., `application-2024-09-20.log.gz`.
- **Retention**: Configure how long to keep old log files using the `maxFiles` option.

---

## Environment Variables

You can control various logger behaviors using environment variables:

| Variable       | Description                                         | Default Value |
|----------------|-----------------------------------------------------|---------------|
| `LOGGING_LEVEL`  | Sets the log level (`info`, `warn`, `error`, `debug`) | `'debug'`      |
| `MAX_FILE_SIZE`     | Maximum size for each log file before rotation       | `'200m'`       |
| `FILE_ROTATION_PERIOD`    | Maximum number of days to retain old log files       | `'14d'`       |

### Example:

```bash
LOGGING_LEVEL=debug MAX_FILE_SIZE=5m FILE_ROTATION_PERIOD=7d node your-app.js
```

### Code with Environment Variables

```javascript
const loggingConsole= true
const logger = new Logs('./logs/app', loggingConsole);

logger.info('Server started in debug mode');
```

---


## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
