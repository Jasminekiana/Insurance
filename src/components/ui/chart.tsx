import * as React from "react";

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
    theme?: Record<string, string>;
  };
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

function ChartContainer({
  id,
  className = "",
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={`flex aspect-video justify-center text-xs ${className}`}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <div className="w-full h-full">{children}</div>
      </div>
    </ChartContext.Provider>
  );
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, itemConfig]) => itemConfig.color
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
[data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .filter(Boolean)
  .join("\n")}
}
`,
      }}
    />
  );
};

const ChartTooltip = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="chart-tooltip"
    className={`rounded-md border bg-popover p-2 text-popover-foreground shadow-md ${className}`}
    {...props}
  />
);

function ChartTooltipContent({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="chart-tooltip-content"
      className={`grid gap-1.5 ${className}`}
      {...props}
    />
  );
}

const ChartLegend = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="chart-legend"
    className={`flex items-center justify-center gap-4 pt-3 ${className}`}
    {...props}
  />
);

function ChartLegendContent({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="chart-legend-content"
      className={`flex items-center gap-1.5 ${className}`}
      {...props}
    />
  );
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
