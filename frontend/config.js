const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    env,
    baseurl: 'http://localhost:3000/api',
    domain: 'http://localhost:3000',
  },
};

export default config[env];
