From registry.access.redhat.com/redhat-openjdk-18/openjdk18-openshift

EXPOSE 9500

RUN echo "hello this is my app" 
RUN mkdir -p /myapp 

ADD ./*.jar /myapp/myservice.jar

WORKDIR /myapp

RUN chgrp -R 0 /myapp && \
    chmod -R g=u /myapp

USER 1001

CMD java -jar /myapp/*.jar 
