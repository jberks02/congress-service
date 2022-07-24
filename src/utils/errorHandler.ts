import { Response } from "express";
import { errorHash } from "./ErrorMessages";

const { DEFAULT } = errorHash;

export function handleError(error: any, res: Response): void {

    if (!(error instanceof Error)) error = new Error('DEFAULT')

    const message = error.message;

    if (errorHash[message]) res.status(errorHash[message].code).send(errorHash[message].message);

    else res.status(DEFAULT.code).send(DEFAULT.message);

}