export default ({ env }) => ({
  auth: {
    secret: env('STRAPI_ADMIN_STRAPI_JWT_SECRET'),
  },
  apiToken: {
    salt: env('STRAPI_API_TOKEN_SALT'),
  },
});
