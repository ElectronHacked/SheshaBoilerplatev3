export interface IAppConfigManager {
  baseUrl?: string;
  hubUrl?: string;
}

const devConfig: IAppConfigManager = {
  baseUrl: 'http://ethekwinibackend.boxfusion.co.za', // TODO: MAke this configurable
};

export default class ConfigManager {
  public config: IAppConfigManager;

  constructor() {
    try {
      this.config = process.env.NODE_ENV === 'production' ? window['__APP_CONFIG__'] : devConfig;
    } catch (error) {
      this.config = devConfig;
    }
  }
  getConfig(): IAppConfigManager {
    try {
      return process.env.NODE_ENV === 'production' ? window['__APP_CONFIG__'] : devConfig;
    } catch (error) {
      return devConfig;
    }
  }
}
