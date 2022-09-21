    import dotenv from 'dotenv'
    dotenv.config();

    const config ={
        development:{
            database:process.env.DB_NAME,
            username:process.env.DB_USERNAME,
            password:process.env.DB_PASSWORD,
            host:process.env.HOST,
            dialect:process.env.DB_DIALECT
        },
        production:{
            database:process.env.DB_NAME,
            username:process.env.DB_USERNAME,
            password:process.env.DB_PASSWORD,
            host:process.env.HOST,
            dialect:process.env.DB_DIALECT
        },
    }
export default {
    config
}