FROM openjdk:11
VOLUME /tmp
EXPOSE 8080
ADD ./target/dsdeliver-0.0.1-SNAPSHOT.jar dsdeliver.jar
ENTRYPOINT ["java","-jar","/dsdeliver.jar"]