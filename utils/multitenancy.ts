const TENANT_KEY = 'TENANT';

export const setTenantId = function (tenantId) {
    if (tenantId) {
        localStorage.setItem(TENANT_KEY, tenantId);
    } else {
        localStorage.removeItem(TENANT_KEY);
    }
};

export const getTenantId = function () {
    var value = localStorage.getItem(TENANT_KEY);
    if (!value) {
        return null;
    }

    return parseInt(value);
}