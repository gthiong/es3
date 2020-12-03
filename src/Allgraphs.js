import React from 'react';
import { Grid, Image, Dropdown, Button } from 'semantic-ui-react';
import './App.css';
import { Bar, ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';

const mydata = [{ country: "AD", "hot dogs": 13 }, { country: "AE", "hot dogs": 17 }, { country: "AF", "hot dogs": 9 }];
const mydata2 = [{ "country": "AD", "hot dog": 154, "hot dogColor": "hsl(12, 70%, 50%)", "burger": 150, "burgerColor": "hsl(35, 70%, 50%)", "sandwich": 14, "sandwichColor": "hsl(213, 70%, 50%)", "kebab": 62, "kebabColor": "hsl(10, 70%, 50%)", "fries": 107, "friesColor": "hsl(78, 70%, 50%)", "donut": 174, "donutColor": "hsl(172, 70%, 50%)"},
    {"country": "AE", "hot dog": 176, "hot dogColor": "hsl(342, 70%, 50%)", "burger": 23, "burgerColor": "hsl(207, 70%, 50%)", "sandwich": 131, "sandwichColor": "hsl(146, 70%, 50%)", "kebab": 165, "kebabColor": "hsl(338, 70%, 50%)", "fries": 58, "friesColor": "hsl(312, 70%, 50%)", "donut": 93, "donutColor": "hsl(83, 70%, 50%)"},
    {"country": "AF", "hot dog": 120, "hot dogColor": "hsl(12, 70%, 50%)", "burger": 124, "burgerColor": "hsl(191, 70%, 50%)", "sandwich": 113, "sandwichColor": "hsl(199, 70%, 50%)", "kebab": 24, "kebabColor": "hsl(326, 70%, 50%)", "fries": 67, "friesColor": "hsl(88, 70%, 50%)", "donut": 37, "donutColor": "hsl(1, 70%, 50%)"},
    {"country": "AG", "hot dog": 41, "hot dogColor": "hsl(159, 70%, 50%)", "burger": 189, "burgerColor": "hsl(288, 70%, 50%)", "sandwich": 181, "sandwichColor": "hsl(343, 70%, 50%)", "kebab": 86, "kebabColor": "hsl(194, 70%, 50%)", "fries": 111, "friesColor": "hsl(300, 70%, 50%)", "donut": 98, "donutColor": "hsl(288, 70%, 50%)"},
    { "country": "AI", "hot dog": 174, "hot dogColor": "hsl(197, 70%, 50%)", "burger": 86, "burgerColor": "hsl(68, 70%, 50%)", "sandwich": 132, "sandwichColor": "hsl(8, 70%, 50%)", "kebab": 100, "kebabColor": "hsl(227, 70%, 50%)", "fries": 104, "friesColor": "hsl(274, 70%, 50%)", "donut": 1, "donutColor": "hsl(77, 70%, 50%)"},
    { "country": "AL", "hot dog": 105, "hot dogColor": "hsl(173, 70%, 50%)", "burger": 58, "burgerColor": "hsl(39, 70%, 50%)", "sandwich": 182, "sandwichColor": "hsl(27, 70%, 50%)", "kebab": 198, "kebabColor": "hsl(334, 70%, 50%)", "fries": 84, "friesColor": "hsl(309, 70%, 50%)", "donut": 123, "donutColor": "hsl(185, 70%, 50%)"},
    { "country": "AM", "hot dog": 187, "hot dogColor": "hsl(268, 70%, 50%)", "burger": 54, "burgerColor": "hsl(238, 70%, 50%)", "sandwich": 77, "sandwichColor": "hsl(350, 70%, 50%)", "kebab": 126, "kebabColor": "hsl(314, 70%, 50%)", "fries": 78, "friesColor": "hsl(241, 70%, 50%)", "donut": 159, "donutColor": "hsl(92, 70%, 50%)"}]
const mydata3 = [
    {
      "id": "japan",
      "color": "hsl(17, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 38
        },
        {
          "x": "helicopter",
          "y": 67
        },
        {
          "x": "boat",
          "y": 18
        },
        {
          "x": "train",
          "y": 33
        },
        {
          "x": "subway",
          "y": 56
        },
        {
          "x": "bus",
          "y": 208
        },
        {
          "x": "car",
          "y": 137
        },
        {
          "x": "moto",
          "y": 100
        },
        {
          "x": "bicycle",
          "y": 61
        },
        {
          "x": "horse",
          "y": 22
        },
        {
          "x": "skateboard",
          "y": 150
        },
        {
          "x": "others",
          "y": 125
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(322, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 276
        },
        {
          "x": "helicopter",
          "y": 200
        },
        {
          "x": "boat",
          "y": 189
        },
        {
          "x": "train",
          "y": 206
        },
        {
          "x": "subway",
          "y": 174
        },
        {
          "x": "bus",
          "y": 67
        },
        {
          "x": "car",
          "y": 106
        },
        {
          "x": "moto",
          "y": 275
        },
        {
          "x": "bicycle",
          "y": 185
        },
        {
          "x": "horse",
          "y": 102
        },
        {
          "x": "skateboard",
          "y": 60
        },
        {
          "x": "others",
          "y": 95
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(288, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 96
        },
        {
          "x": "helicopter",
          "y": 167
        },
        {
          "x": "boat",
          "y": 102
        },
        {
          "x": "train",
          "y": 39
        },
        {
          "x": "subway",
          "y": 259
        },
        {
          "x": "bus",
          "y": 204
        },
        {
          "x": "car",
          "y": 3
        },
        {
          "x": "moto",
          "y": 225
        },
        {
          "x": "bicycle",
          "y": 114
        },
        {
          "x": "horse",
          "y": 19
        },
        {
          "x": "skateboard",
          "y": 38
        },
        {
          "x": "others",
          "y": 252
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(239, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 95
        },
        {
          "x": "helicopter",
          "y": 161
        },
        {
          "x": "boat",
          "y": 92
        },
        {
          "x": "train",
          "y": 280
        },
        {
          "x": "subway",
          "y": 283
        },
        {
          "x": "bus",
          "y": 235
        },
        {
          "x": "car",
          "y": 106
        },
        {
          "x": "moto",
          "y": 179
        },
        {
          "x": "bicycle",
          "y": 3
        },
        {
          "x": "horse",
          "y": 145
        },
        {
          "x": "skateboard",
          "y": 287
        },
        {
          "x": "others",
          "y": 41
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(71, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 128
        },
        {
          "x": "helicopter",
          "y": 65
        },
        {
          "x": "boat",
          "y": 65
        },
        {
          "x": "train",
          "y": 63
        },
        {
          "x": "subway",
          "y": 243
        },
        {
          "x": "bus",
          "y": 43
        },
        {
          "x": "car",
          "y": 66
        },
        {
          "x": "moto",
          "y": 255
        },
        {
          "x": "bicycle",
          "y": 32
        },
        {
          "x": "horse",
          "y": 31
        },
        {
          "x": "skateboard",
          "y": 86
        },
        {
          "x": "others",
          "y": 235
        }
      ]
    }
  ]

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

const styles1 = {
    textAlign: "center"
};
  
const MyResponsiveBar = () => (
    <ResponsiveBar
        data={mydata2}
        className="wrapper"
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        width={400}
        height={300}
        margin={{ top: 30, right: 100, bottom: 40, left: 30 }}
        padding={0.2}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#0077C8',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#5B6770',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.9 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)

const Appgraph = () => (
    <div style={styles}>
      <Bar
        width={400}
        height={350}
        className="trapper"
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        data={mydata}
        indexBy="country"
        keys={["hot dogs"]}
        labelTextColor="inherit:darker(1.4)"
        enableGridX={true}
        theme={{
          axis: {
            ticks: {
              line: {
                stroke: "green"
              },
              text: {
                fill: "#0077C8"
              }
            }
          },
          grid: {
            line: {
              stroke: "#5B6770",
              strokeWidth: 2,
              strokeDasharray: "4 4"
            }
          }
        }}
      />
      <Button>Move to Dashboard</Button>
    </div>
  );

const MyResponsiveLine = () => (
    <ResponsiveLine
        data={mydata3}
        margin={{ top: 30, right: 100, bottom: 40, left: 30 }}
        width={400}
        height={300}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

const Allgraphs = (props) =>{
    return(
        <Grid>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Appgraph />
                </Grid.Column>
                <Grid.Column>
                    <MyResponsiveBar />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                    <MyResponsiveLine />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Appgraph />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                    <Appgraph />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Allgraphs;