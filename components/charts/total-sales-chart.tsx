'use client';

import React from 'react';
import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie';
import { scaleOrdinal } from '@visx/scale';
import { Group } from '@visx/group';
import { animated, useTransition, interpolate, SpringValue } from '@react-spring/web';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { totalSalesData } from "@/lib/mock-data";

interface SalesDatum {
  label: string;
  value: number;
  amount: string;
}

const totalSales = totalSalesData;

const salesValue = (d: SalesDatum) => d.value;

// color scales
const getSalesColor = scaleOrdinal({
  domain: totalSales.map((d) => d.label),
  range: [
    '#2A2A2A',
    '#87D173',
    '#A2ADFF',
    '#B3E0FF',
  ],
});


const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

type PieProps = {
  width: number;
  height: number;
  margin?: typeof defaultMargin;
  animate?: boolean;
};

function PieChart({
  width,
  height,
  margin = defaultMargin,
  animate = true,
}: PieProps) {
  
  if (width < 10) {
    return null;
  }

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const donutThickness = 30; // Adjusted donut thickness

  return (
    <svg width={width} height={height} className="overflow-visible">
      {/* Removed GradientPinkBlue and rect fill */}
      <Group top={centerY + margin.top} left={centerX + margin.left}>
        <Pie
          data={totalSales}
          pieValue={salesValue}
          outerRadius={radius}
          innerRadius={radius - donutThickness}
          cornerRadius={3}
          padAngle={0.02} // Adjusted padAngle for better separation
        >
          {(pie) => (
            <AnimatedPie<SalesDatum>
              {...pie}
              animate={animate}
              getKey={(arc) => arc.data.label}
              onClickDatum={() => { /* No-op for static display */ }}
              getColor={(arc) => getSalesColor(arc.data.label)}
            />
          )}
        </Pie>
        {/* Central percentage text */}
      </Group>
      {/* Legend outside SVG for better control and matching image */}
    </svg>
  );
}

// react-spring transition definitions
type AnimatedStyles = { startAngle: number; endAngle: number; opacity: number };

type SpringAnimatedStyles = {
  startAngle: SpringValue<number>;
  endAngle: SpringValue<number>;
  opacity: SpringValue<number>;
};

const fromLeaveTransition = <Datum,>({ endAngle }: PieArcDatum<Datum>) => ({
  // enter from 360° if end angle is > 180°
  startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  opacity: 0,
});
const enterUpdateTransition = <Datum,>({ startAngle, endAngle }: PieArcDatum<Datum>) => ({
  startAngle,
  endAngle,
  opacity: 1,
});

type AnimatedPieProps<Datum> = ProvidedProps<Datum> & {
  animate?: boolean;
  getKey: (d: PieArcDatum<Datum>) => string;
  getColor: (d: PieArcDatum<Datum>) => string;
  onClickDatum: (d: PieArcDatum<Datum>) => void;
  delay?: number;
};

function AnimatedPie<Datum>({
  animate,
  arcs,
  path,
  getKey,
  getColor,
  onClickDatum,
}: AnimatedPieProps<Datum>) {
  const transitions = useTransition<PieArcDatum<Datum>, AnimatedStyles>(arcs, {
    from: animate ? fromLeaveTransition : enterUpdateTransition,
    enter: enterUpdateTransition,
    update: enterUpdateTransition,
    leave: animate ? fromLeaveTransition : enterUpdateTransition,
    keys: getKey,
  });
  return transitions((props: SpringAnimatedStyles, arc: PieArcDatum<Datum>, { key }: { key: string }) => {
    const [centroidX, centroidY] = path.centroid(arc);
    const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

    return (
      <g key={key}>
        <animated.path
          // compute interpolated path d attribute from intermediate angle values
          d={interpolate([props.startAngle, props.endAngle], (startAngle: number, endAngle: number) =>
            path({
              ...arc,
              startAngle,
              endAngle,
            }),
          )}
          fill={getColor(arc)}
          onClick={() => onClickDatum(arc)}
          onTouchStart={() => onClickDatum(arc)}
        />
        {hasSpaceForLabel && (
          <animated.g style={{ opacity: props.opacity }}>
            <text
              fill="white"
              x={centroidX}
              y={centroidY}
              dy=".33em"
              fontSize={9}
              textAnchor="middle"
              pointerEvents="none"
            >
              {getKey(arc)}
            </text>
          </animated.g>
        )}
      </g>
    );
  });
}

export default function TotalSalesChart() {
  const totalValue = totalSalesData.reduce((acc, curr) => acc + curr.value, 0);
  const directSales = totalSalesData.find(item => item.label === "Direct")?.value || 0;
  const directPercentage = totalValue > 0 ? ((directSales / totalValue) * 100).toFixed(1) : "0.0";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Sales</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative w-[200px] h-[200px]">
          <PieChart width={200} height={200} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-800">{directPercentage}%</span>
          </div>
        </div>
        <div className="space-y-1 w-full pl-8">
          {totalSalesData.map((data, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: getSalesColor(data.label) }}
                ></span>
                <span>{data.label}</span>
              </div>
              <span className="font-medium">{data.amount}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}