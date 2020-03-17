export const createApiType = (apiActionType, apiResult) => {
    return apiActionType + '_' + apiResult;
};

export const withType = (type, data = {}) => {
    data.type = type;
    return data;
};

export default {
    createApiType,
    withType
}