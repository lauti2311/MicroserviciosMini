FROM node:14
WORKDIR /microservicio2   
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 3002
CMD ["npm", "start"]