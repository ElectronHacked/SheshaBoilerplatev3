import ConfigManager from 'utils/configManager';

export const APP_BASE_URL = new ConfigManager().getConfig().baseUrl;

export const BASE_URL = APP_BASE_URL || 'https://sheshabackend-demo.boxfusion.co.za';

export const ISSUE_API_BASE_URL = `${BASE_URL}/api/issueapi`;
