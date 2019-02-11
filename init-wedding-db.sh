#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER wedding;
    ALTER USER wedding WITH PASSWORD 'wedding';
    CREATE DATABASE open-marriage;
    GRANT ALL PRIVILEGES ON DATABASE open-marriage TO wedding;
EOSQL