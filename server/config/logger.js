var winston = require("winston");
// const { WebClient, IncomingWebhook } = require("@slack/client");
// const Slack = require("winston-slack-transport");
const env = process.env.NODE_ENV || "production";
const logDir = "logs";
const fs = require("fs");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const now = new Date();

var logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      name: "error-file",
      filename: "./logs/exceptions.log",
      level: "error",
      json: false
    }),

    new (require("winston-daily-rotate-file"))({
      filename: `${logDir}/-apimodules.log`,
      timestamp: now,
      datePattern: "dd-MM-yyyy",
      prepend: true,
      json: false,
      level: "error"
    })
  ],
  exitOnError: false
});
if (env === "production") {
  // logger.add(Slack, {
  //   level: "error",
  //   webhook_url: process.env.SLACK_WEBHOOK_URL,
  //   channel: "#api-alerts",
  //   username: "API",
  //   handleExceptions: true
  // });
}

module.exports = logger;
module.exports.stream = {
  write: function(message, encoding) {
    logger.info(message);
    console.log("message=", message);
  }
};
