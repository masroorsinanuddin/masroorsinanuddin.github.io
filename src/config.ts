export const SITE = {
  name: 'Masroor Uddin',
  shortName: 'MU',
  title: 'Masroor Uddin — Systems Notebook',
  description: 'Notes and projects about computer systems, distributed systems, databases, GPU programming, and ML infrastructure.',
  email: 'mailto:masroor.uddin@berkeley.edu',
  github: 'https://github.com/masroorsinanuddin',
  linkedin: 'https://www.linkedin.com/in/masroor-uddin-96b115218/',
};

export const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
