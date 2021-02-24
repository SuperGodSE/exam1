From registry.access.redhat.com/redhat-openjdk-18/openjdk18-openshift

EXPOSE 9000

USER 1001

RUN echo "hello this is my app" && \
    mkdir -p /myapp && \
    COPY *.jar /myapp

WORKDIR /myapp

RUN chgrp -R 0 /myapp && \
    chmod -R g=u /myapp

CMD java -jar /myapp/*.jar 
