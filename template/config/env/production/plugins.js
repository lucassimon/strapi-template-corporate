module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      endpoint: "sfo2.digitaloceanspaces.com",
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: env("AWS_REGION"),
      params: {
        Bucket: env("AWS_BUCKET"),
      },
    },
  },
});
