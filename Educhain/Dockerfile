# Backend setup with Hardhat
FROM node:18 AS build-backend

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy backend files and compile smart contracts
COPY ./contracts ./contracts
COPY ./scripts ./scripts
COPY hardhat.config.js ./
RUN npx hardhat compile

# Frontend setup with React
FROM node:18 AS build-frontend

WORKDIR /app/src

# Install frontend dependencies
COPY ./src/package*.json ./
RUN npm install

# Copy frontend files and build React app
COPY ./src .
RUN npm run build

# Final stage: Running the application
FROM node:18

WORKDIR /app

# Copy compiled backend and built frontend
COPY --from=build-backend /app .
COPY --from=build-frontend /app/src/build ./src/build

# Expose necessary ports
EXPOSE 3000
EXPOSE 8545

# Run both the Hardhat node and React app
CMD ["sh", "-c", "npx hardhat node & npm start --prefix src"]
