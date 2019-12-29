require('dotenv/config')

const env = process.env.NODE_ENV;

const config = () => {
    switch (env) {
        case 'dev':
            return {
                db_connection_string: process.env.DB_CONNECTION_URL_DEV,
                port: process.env.PORT_DEV || null,
                jwt_secret_key: process.env.SECRET_KEY_JWT_DEV || 'KEY',
                jwt_expires: '7d'
            }
        case 'hml':
            return {
                db_connection_string: process.env.DB_CONNECTION_URL_HML,
                port: process.env.PORT_HML,
                jwt_secret_key: process.env.SECRET_KEY_JWT_HML,
                jwt_expires: process.env.EXP_JWT_TOKEN_HML
            }
        case 'prod':
            return {
                db_connection_string: process.env.DB_CONNECTION_URL_PROD,
                port: process.env.PORT_PROD,
                jwt_secret_key: process.env.SECRET_KEY_JWT_PROD,
                jwt_expires: process.env.EXP_JWT_TOKEN_PROD
            }
    }
};

console.log(`Executando API em modo ${env}`);


module.exports = config();