FROM node:lts-alpine

RUN npm install -g @vscode/vsce

WORKDIR /app
