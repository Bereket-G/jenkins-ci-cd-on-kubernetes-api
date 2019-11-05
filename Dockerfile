# Dockerfile for users service
# Hook Test two
FROM node:8.9.1

ADD . /home/users
WORKDIR /home/users
RUN npm install
EXPOSE 9000
ENTRYPOINT ["npm", "start"] 