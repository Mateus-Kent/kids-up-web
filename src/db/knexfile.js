// Update with your config settings.

module.exports = {

  development: {
    client: 'mssql',
    connection: {
      filename: './dev.mssql'
    }
  },

  staging: {
    client: 'mssql',
    connection: {
      database: 'kids_up_db',
      user:     'kids_up',
      password: null
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
