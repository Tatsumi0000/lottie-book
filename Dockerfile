FROM denoland/deno:2.9.7

RUN apt update && \
    apt -y upgrade  

WORKDIR /usr/src/app

