# ############################################################################# #

FROM node as build-stage

RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client

COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install

COPY . ./
RUN npm run build:prod

FROM nginx
COPY --from=build-stage /usr/src/app/client/dist/localhost/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# ############################################################################# #

# ;-------------;
# ; Build stage ;
# ;-------------;
FROM node:20-alpine as builder

WORKDIR /app

RUN npm i -g pnpm

COPY . .

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile && \
    pnpm build

# ;---------------;
# ; Runtime stage ;
# ;---------------;
FROM nginx:stable-alpine as runtime

COPY --from=builder /app/dist/angular-boilerplate /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# ############################################################################# #
