FROM mysql:5.7

COPY server.cnf /etc/mysql/mysql.conf.d/server.cnf

EXPOSE 3306

COPY titanic.sql /tmp/titanic.sql
RUN cat /tmp/titanic.sql >> /docker-entrypoint-initdb.d/init.sql
RUN rm /tmp/titanic.sql

RUN echo "\
  CREATE USER apiuser@'%'; \
  CREATE DATABASE IF NOT EXISTS titanic DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_unicode_ci; \
  GRANT ALL ON titanic.* TO apiuser@'%'; \
  ALTER USER apiuser@'%' IDENTIFIED BY 'apipassword'; \
  FLUSH PRIVILEGES; \
  " \
>> /docker-entrypoint-initdb.d/init.sql
