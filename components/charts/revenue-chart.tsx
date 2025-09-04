import React from 'react';
import { LinePath } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleTime, scaleLinear } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { curveBasis } from '@visx/curve';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { revenueData } from "@/lib/mock-data";

interface RevenueDatum {
  date: string;
  currentWeek: number;
  previousWeek: number;
}

const getDate = (d: RevenueDatum) => new Date(d.date);
const getCurrentWeekRevenue = (d: RevenueDatum) => d.currentWeek;
const getPreviousWeekRevenue = (d: RevenueDatum) => d.previousWeek;

const RevenueChart = ({ width = 600, height = 300, margin = { top: 20, right: 20, bottom: 30, left: 40 } }) => {
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = scaleTime<number>({  // Change type to number
    range: [0, xMax],
    domain: [Math.min(...revenueData.map(d => getDate(d).getTime())), Math.max(...revenueData.map(d => getDate(d).getTime()))], // Convert Date to number
  });

  const yScale = scaleLinear<number>({
    range: [yMax, 0],
    domain: [0, Math.max(...revenueData.map(d => Math.max(d.currentWeek, d.previousWeek))) + 5],
  });

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span className="flex items-center">
            <span className="mr-1 h-2 w-2 rounded-full bg-blue-400"></span> Current Week $58,211
          </span>
          <span className="flex items-center">
            <span className="mr-1 h-2 w-2 rounded-full bg-gray-400"></span> Previous Week $68,768
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <svg width={width} height={height}>
          <Group top={margin.top} left={margin.left}>
            <LinePath
              data={revenueData}
              x={d => xScale(getDate(d).getTime())}
              y={d => yScale(getCurrentWeekRevenue(d))}
              stroke="#a8dadc"
              strokeWidth={2}
              curve={curveBasis}
            />
            <LinePath
              data={revenueData}
              x={d => xScale(getDate(d).getTime())}
              y={d => yScale(getPreviousWeekRevenue(d))}
              stroke="#457b9d"
              strokeDasharray="5,5"
              strokeWidth={2}
              curve={curveBasis}
            />
            <AxisBottom
              top={yMax}
              scale={xScale}
              stroke="#e0e0e0"
              tickStroke="#e0e0e0"
              tickLabelProps={() => ({
                fill: '#617489',
                fontSize: 10,
                textAnchor: 'middle',
              })}
            />
            <AxisLeft
              scale={yScale}
              stroke="#e0e0e0"
              tickStroke="#e0e0e0"
              tickLabelProps={() => ({
                fill: '#617489',
                fontSize: 10,
                textAnchor: 'end',
              })}
            />
          </Group>
        </svg>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
