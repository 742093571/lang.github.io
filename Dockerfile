FROM node:14.21.3-slim as base

LABEL "com.github.actions.name"="lang.github.io"
LABEL "com.github.actions.description"="A GitHub Action to build and deploy Vuepress sites to GitHub Pages"
LABEL "com.github.actions.icon"="upload-cloud"
LABEL "com.github.actions.color"="gray-dark"

LABEL "repository"="https://github.com/742093571/lang.github.io"
LABEL "homepage"="https://github.com/742093571/lang.github.io"
LABEL "maintainer"="742093571 <742093571@qq.com>"

RUN apt-get update && apt-get install -y git jq

COPY deploy.sh /deploy.sh
ENTRYPOINT ["/deploy.sh"]