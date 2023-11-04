const NextAuthConfig = {
  github: {
    clientId: String(process.env.GITHUB_CLIENT_ID),
    clientSecret: String(process.env.GITHUB_CLIENT_SECRET),
  },
};

export default NextAuthConfig;
