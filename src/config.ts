import { config } from 'process';

export default class Config {
  static db_url: string = 'mongodb://172.17.0.2/my_database';
  // static db_url: string = 'mongodb://127.0.0.1/forseti-database';
}
