'use client';

import React from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectionsVsActualsData } from "@/lib/mock-data";
import { ParentSize } from '@visx/responsive';

interface DailyDatum {
  date: string;
  Projections: number;
  Actuals: number;
}

const getMonth = (d: DailyDatum) => d.date;

const Chart = ({ margin = { top: 20, right: 20, bottom: 30, left: 40 } }) => {
  return (
    <ParentSize>
      {({ width, height }) => {
        const xMax = width - margin.left - margin.right;
        const yMax = height - margin.top - margin.bottom;

        const xScale = scaleBand<string>({
          range: [0, xMax],
          domain: projectionsVsActualsData.map(getMonth),
          padding: 0.4,
        });

        const yScale = scaleLinear<number>({
          range: [yMax, 0],
          domain: [0, Math.max(...projectionsVsActualsData.map(d => Math.max(d.Projections, d.Actuals))) + 5],
        });

        const barWidth = xScale.bandwidth() / 2;

        return (
          <svg width={width} height={height}>
            <Group top={margin.top} left={margin.left}>
              {projectionsVsActualsData.map((d, i) => (
                <Group key={`bar-group-${i}`} left={xScale(getMonth(d))}>
                  <Bar
                    x={0}
                    y={yScale(d.Projections)}
                    height={yMax - yScale(d.Projections)}
                    width={barWidth}
                    fill="#a8dadc"
                  />
                  <Bar
                    x={barWidth}
                    y={yScale(d.Actuals)}
                    height={yMax - yScale(d.Actuals)}
                    width={barWidth}
                    fill="#457b9d"
                  />
                </Group>
              ))}

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
        );
      }}
    </ParentSize>
  );
};

const ProjectionsVsActualsChart = () => {
    return (
        <Card className="h-[320px] p-6 rounded-[16px] gap-4">
            <CardHeader>
                <CardTitle>Projections vs Actuals</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <Chart />
            </CardContent>
        </Card>
    )
}

export default ProjectionsVsActualsChart;