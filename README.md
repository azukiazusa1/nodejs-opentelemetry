# nodejs-opentelemetry-example

This is a simple example of using the [OpenTelemetry](https://opentelemetry.io/) Node.js API to instrument a simple Node.js application.

## Getting Started

### Prerequisites

- Node.js
- Docker

### Running the example

Start the Node.js application:

```bash
npm install
node main.js
```

Start the Prometheus server and OpenTelemetry Collector:

```bash
docker-compose up
```
