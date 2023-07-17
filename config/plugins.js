module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  sentry: {
    enabled: true,
    config: {
      // Only set `dsn` property in production
      dsn: env('SENTRY_DSN'),
    },
  },
  email: {
    config: {
      provider: '@ventsislavnikolov/strapi-provider-email-sendinblue',
      providerOptions: {
        sendinblue_api_key: env('SIB_API_KEY', 'key'),
        sendinblue_default_replyto: env('SIB_DEFAULT_REPLY_TO', 'contact@boilerplate.com'),
        sendinblue_default_from: env('SIB_DEFAULT_FROM', 'no-reply@boilerplate.com'),
        sendinblue_default_from_name: env('SIB_DEFAULT_FROM_NAME', 'Boilerplate'),
      },
    },
  },
});
