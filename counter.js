import {
  PeriodicExportingMetricReader,
  MeterProvider,
} from "@opentelemetry/sdk-metrics";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-grpc";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { Resource } from "@opentelemetry/resources";

const meterProvider = new MeterProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "basic-metric-service",
  }),
});

meterProvider.addMetricReader(
  new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter(),
    exportIntervalMillis: 1000,
  })
);

const meter = meterProvider.getMeter("example-exporter-collector");

export const diceRollCounter = meter.createCounter("dice", {
  description: "Dice roll counter",
});
