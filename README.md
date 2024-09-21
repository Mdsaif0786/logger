# Node.js Logger with Daily Rotation

A flexible and efficient logging solution for Node.js applications, utilizing the `winston` library with daily log rotation. This logger supports multiple log levels, file compression, and can output logs in both JSON and human-readable formats.

## Features

- **Daily Log Rotation**: Automatically rotates logs daily based on the date.
- **Compression**: Compresses older logs to save disk space.
- **Multiple Log Levels**: Supports `info`, `error`, `warn`, and `debug` for versatile logging needs.
- **Customizable Output Formats**: Logs can be stored in JSON format or printed in a human-readable format.
- **Console Logging**: Option to enable or disable logging to the console.
- **Log Retention**: Configure how long to retain log files (e.g., keep logs for one month).

## Installation

Install the package via npm:

```bash
npm install super-logger
