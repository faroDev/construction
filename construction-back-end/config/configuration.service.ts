import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigurationService {
  private readonly envConfig: { [key: string]: string };
  
  constructor(){
    const isDevEnvironment = process.env.NODE_ENV !== 'production';
  
    if(isDevEnvironment){
      const envFilePath = `${__dirname}/../../.env`;
      const existPath = fs.existsSync(envFilePath);
      
      if(!existPath){
        console.log('.env file doesn\'t exist');
        process.exit(0)
      }

      this.envConfig = parse(fs.readFileSync(envFilePath));
    }else {
      this.envConfig = {
        PORT: process.env.PORT,
      }
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}