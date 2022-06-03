export const parseEnv = () => {
  const allEnvVars = process.env;
  const rssEnvVars = Object.entries(allEnvVars)
    .filter(([k, v]) => k.substring(0,4) === 'RSS_')
    .map(([k, v]) => `${k}=${v}`)
  console.log(rssEnvVars.join('; '));
};
