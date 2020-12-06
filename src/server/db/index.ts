import config from "../config/dbconfig"
import * as mysql from "mysql"
import Streams from "./streams"
import authConfig from '../config'

//auth table query imports
import Users from './queries/users';
import AccessTokens from './queries/accesstokens';


export const Connection = mysql.createConnection(config.mysql)

Connection.connect(err =>{
    if(err) console.log(err);
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};


export default {
    Streams, 
    // auth exports
    Users,
    AccessTokens
}