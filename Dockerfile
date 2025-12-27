FROM denoland/deno:2.6.3

# Create working directory
WORKDIR /app

# Copy source
COPY . .
