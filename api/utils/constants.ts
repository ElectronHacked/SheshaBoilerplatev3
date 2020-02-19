import getConfig from 'next/config'

export const BASE_URL = (getConfig().publicRuntimeConfig || {}).ETHEKWINIBACKEND_URL || 'https://ethekwinibackend.boxfusion.co.za';
export const ISSUE_API_BASE_URL = `${BASE_URL}/api/issueapi`;