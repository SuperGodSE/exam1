From registry.access.redhat.com/redhat-openjdk-18/openjdk18-openshift

ARG SERVER_PORT=9500

EXPOSE $SERVER_PORT

USER root

RUN echo "hello this is my app" && \
    mkdir -p /myapp 

ADD ./*.jar /myapp/myservice.jar

WORKDIR /myapp


RUN chgrp -R 0 /myapp && \
    chmod -R g=u /myapp

USER 1001

CMD java -jar /myapp/*.jar 
