
type errorHashes = Record<string, { code: number, message: string }>;

export const errorHash: errorHashes = {
    NOT_AUTHORIZED: {
        code: 403,
        message: "User does not have the correct credentials to "
    },
    INVALID_PARAM: {
        code: 400,
        message: "URL parameter is invalid or missing."
    },
    DEFAULT: {
        code: 500,
        message: 'Unknown Server Error'
    }
}