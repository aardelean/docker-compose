FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD target/app.jar app.jar
#RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]