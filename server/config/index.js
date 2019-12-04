
  export const getDbConnectionString = () => {
    return process.env.MONGO_CONNECTION_STRING;
  }

  export const getSecret = () => {
    return process.env.HASH_SECRET || 'FAKE-SECRET';
  }

  export const getEnv = () => {
    return process.env.NODE_ENV || "production";
  }

export default {
  getDbConnectionString,
  getSecret
}
