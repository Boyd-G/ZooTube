import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken'

import config from '../../config'
import DB from '../../db/queries/users';

export const CreateToken = async (payload: IPayload) => {
    let tokenid: any = await DB.tokens.insert(payload.userid);
    payload.accesstokenid = tokenid.insertId;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload.accesstokenid,config.auth.secret)
};

export interface IPayload {
    [key: string]: any;
    userid: number;
    unique?: string;
}