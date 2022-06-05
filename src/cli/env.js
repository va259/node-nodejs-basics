export const parseEnv = () => {
  const env = Object.entries(process.env)
    .filter(([k, v]) => k.substring(0,4) === 'RSS_')
    .map(([k, v]) => `${k}=${v}`)
    .join('; ');
  console.log(env);
};

parseEnv();
