import logo from './logo.svg';
import './App.css';
import { ResponsiveSankey } from '@nivo/sankey'


function App() {
  const data = {
    "nodes": [
      {
        "id": "John",
        "color": "hsl(32, 70%, 50%)"
      },
      {
        "id": "Raoul",
        "color": "hsl(142, 70%, 50%)"
      },
      {
        "id": "Jane",
        "color": "hsl(111, 70%, 50%)"
      },
      {
        "id": "Marcel",
        "color": "hsl(338, 70%, 50%)"
      },
      {
        "id": "Ibrahim",
        "color": "hsl(158, 70%, 50%)"
      },
      {
        "id": "Junko",
        "color": "hsl(204, 70%, 50%)"
      }
    ],
    "links": [
      {
        "source": "Raoul",
        "target": "Junko",
        "value": 84
      },
      {
        "source": "Raoul",
        "target": "John",
        "value": 166
      },
      {
        "source": "Raoul",
        "target": "Marcel",
        "value": 139
      },
      {
        "source": "Raoul",
        "target": "Ibrahim",
        "value": 85
      },
      {
        "source": "Marcel",
        "target": "Junko",
        "value": 138
      },
      {
        "source": "Jane",
        "target": "Marcel",
        "value": 99
      },
      {
        "source": "Junko",
        "target": "Ibrahim",
        "value": 97
      },
      {
        "source": "John",
        "target": "Ibrahim",
        "value": 20
      },
      {
        "source": "John",
        "target": "Jane",
        "value": 68
      }
    ]
  }
  return (
    <div style={{height: 200}}>
      <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
        align="justify"
        colors={{ scheme: 'category10' }}
        nodeOpacity={1}
        nodeThickness={18}
        nodeInnerPadding={3}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="vertical"
        labelPadding={16}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 130,
                itemWidth: 100,
                itemHeight: 14,
                itemDirection: 'right-to-left',
                itemsSpacing: 2,
                itemTextColor: '#999',
                symbolSize: 14,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />

    </div>
            
  );
}

export default App;
