FROM tutum/mysql
# Add MySQL configuration
COPY init.sql /tmp/
COPY init.sh /
RUN chmod +x /init.sh
VOLUME  ["/etc/mysql", "/var/lib/mysql"]
EXPOSE 3306

CMD ["/init.sh"]
