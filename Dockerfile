FROM denoland/deno:2.6.3

RUN apt update && \
    apt -y upgrade  

WORKDIR /usr/src/app

