----------------------------------------
              Database
----------------------------------------

1. Use setup_db.sh to create new database

Usage: ./setup_db.sh dbname dbuser dbpass

dbname should be "www-data" to allow apache access to database


2. Insert tables into database

To insert forum_tables.sql into Mysql database type the following in command line:

mysql --user=dbuser -p dbname < forum_tables.sql


3. Backup and restore tables and database

The following command stores database into a backup file

mysqldump --user=dbname -p dbname > backup.sql

The following command restores the backup data into database

mysql --user=dbuser -p dbname < backup.sql







