import { Db } from "mongodb";

module.exports = {
    async up( db: Db ) {
        console.log('In Migration script...')
        await db.collection('users').createIndex({email: 1}, {unique: true});
    },
};