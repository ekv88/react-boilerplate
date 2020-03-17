export const CALL_RESULT = {
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL'
};

export const isTypeFromCall = (type, call) =>
    type === call || type === createSuccessForCall(call) || type === createFailForCall(call);

export const extractCallFromType = (type, CALLS) => {
    const callName = Object.getOwnPropertyNames(CALLS).find(call => isTypeFromCall(type, CALLS[call]));
    return CALLS[callName];
};

export const createFromCall = (call, sufix) => call + "_" + sufix;

export const createSuccessForCall = (call) => call + "SUCCESS";

export const createFailForCall = (call) => call + "_FAIL";

export default {
    CALL_RESULT,
    extractCallFromType,
    createFromCall,
    createSuccessForCall,
    createFailForCall
}