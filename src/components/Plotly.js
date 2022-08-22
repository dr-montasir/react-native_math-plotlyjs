import nm from 'native_math';
import Plot from 'react-plotly.js';

const Plotly = () => {
  // 2D Rotation Matrix
  const ROTATION_MATRIX_2D = nm.range(0, 360, 15);

  // Color Manipulation
  const r = nm.rib(0, 220),
    g = nm.rib(0, 180),
    b = nm.rib(0, 240),
    o = nm.divi(nm.rib(2, 6), 10),
    randomColor = `rgb(${r}, ${g}, ${b}, ${o})`;

  // Adjust Point Radius
  const pointRadius = nm.rib(8, 19);

  const xValue = ROTATION_MATRIX_2D,
    yValue = nm.sin.deg(ROTATION_MATRIX_2D);
  return (
    <div>
      <div className="plot">
        <h3>Line Plot Example</h3>
        <Plot
          data={[
            {
              x: xValue,
              y: yValue,
              type: 'line',
              mode: 'lines+markers',
              opacity: `${o}`,
              marker: {
                size: `${pointRadius}`,
                color: randomColor,
                line: {
                  color: 'black',
                  width: 2,
                },
              },
            },
          ]}
          layout={{
            title: 'The sin of 2D Rotation Matrix',
            xaxis: { range: [0, 360], dtick: 30, title: 'X' },
            yaxis: { title: 'Y = Sin (X)' },
          }}
        />
      </div>

      <br />

      <div className="plot">
        <h3>Bar Plot Example</h3>
        <Plot
          data={[
            {
              x: xValue,
              y: yValue,
              type: 'bar',
              opacity: `${o}`,
              width: 10,
              marker: {
                color: randomColor,
                line: {
                  color: 'black',
                  width: 2,
                },
              },
            },
          ]}
          layout={{
            title: 'The sin of 2D Rotation Matrix',
            xaxis: { range: [0, 360], dtick: 30, title: 'X' },
            yaxis: { title: 'Y = Sin (X)' },
          }}
        />
      </div>

      <br />

      <div className="plot">
        <h3>Random Values</h3>
        <div
          style={{
            backgroundColor: randomColor,
            padding: '10px',
            textAlign: 'center',
          }}
        >
          <p>
            <b>Color : {randomColor}</b>
          </p>
          <p>
            <b>Point Radius : {pointRadius} px</b>
          </p>
        </div>
      </div>

      <div style={{ margin: '100px 50px' }}>
        <h3>Links:</h3>
        <ul>
          <li>
            <b>GitHub</b>:<br />
            <a
              href="https://github.com/dr-montasir/react-native_math-plotlyjs"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/dr-montasir/react-native_math-plotlyjs
            </a>
          </li>

          <br />

          <li>
            <b>NATIVE MATH</b>:<br />
            <a
              href="https://www.npmjs.com/package/native_math"
              target="_blank"
              rel="noreferrer"
            >
              https://www.npmjs.com/package/native_math
            </a>
            <br />
            <a
              href="https://github.com/dr-montasir/native_math"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/dr-montasir/native_math
            </a>
          </li>

          <br />

          <li>
            <b>Plotly.js</b>:<br />
            <a
              href="https://plotly.com/javascript/"
              target="_blank"
              rel="noreferrer"
            >
              https://plotly.com/javascript/
            </a>
            <br />
            <a
              href="https://plotly.com/javascript/react/"
              target="_blank"
              rel="noreferrer"
            >
              https://plotly.com/javascript/react/
            </a>
          </li>
        </ul>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div>{'_'.repeat(60)}</div>
        <br />
        <div>
          {new Date().getFullYear() === 2021
            ? new Date().getFullYear()
            : `2021 - ${new Date().getFullYear()}`}{' '}
          All rights reserved @ https://github.com/dr-montasir
        </div>
        <div>{'_'.repeat(60)}</div>
        <br />
      </div>
    </div>
  );
};

export default Plotly;
