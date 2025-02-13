import debug from 'debug';

export const logger = {
  api: debug('app:api'),
  db: debug('app:db'),
  error: debug('app:error')
}; 