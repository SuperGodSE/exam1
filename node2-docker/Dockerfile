FROM registry.access.redhat.com/rhscl/nodejs-8-rhel7 

EXPOSE 9000

RUN mkdir -p /opt/app-root

ADD ./package.json /opt/app-root/package.json
ADD ./app.js /opt/app-root/app.js

WORKDIR /opt/app-root

CMD node app.js



