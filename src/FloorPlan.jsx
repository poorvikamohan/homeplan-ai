
function FloorPlan({ project }) {
  const bedrooms = Number(project.bedrooms)
  const bathrooms = Number(project.bathrooms)

  const rooms = [
    'Living Room',
    'Kitchen',
    'Dining'
  ]

  for (let i = 1; i <= bedrooms; i++) {
    rooms.push(`Bedroom ${i}`)
  }

  for (let i = 1; i <= bathrooms; i++) {
    rooms.push(`Bathroom ${i}`)
  }

  const length = Number(project.length)
  const width = Number(project.width)

  const columns = 2
  const rows = Math.ceil(rooms.length / columns)

  const scale = Math.min(600 / length, 400 / width)
  const plotWidth = length * scale
  const plotHeight = width * scale

  const cellWidth = plotWidth / columns
  const cellHeight = plotHeight / rows

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Generated 2D Floor Plan</h2>

      <p style={{ color: '#78827b', margin: '10px 0 20px' }}>
        Conceptual layout for {project.name}
      </p>

      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '14px',
        overflowX: 'auto'
      }}>
        <svg
          viewBox={`0 0 ${plotWidth + 100} ${plotHeight + 100}`}
          style={{ width: '100%', minWidth: '280px', display: 'block' }}
        >
          <rect
            x="50"
            y="50"
            width={plotWidth}
            height={plotHeight}
            fill="#f3f7f3"
            stroke="#254b3a"
            strokeWidth="4"
          />

          {rooms.map((room, index) => {
            const col = index % columns
            const row = Math.floor(index / columns)

            const x = 50 + col * cellWidth
            const y = 50 + row * cellHeight

            return (
              <g key={room}>
                <rect
                  x={x}
                  y={y}
                  width={cellWidth}
                  height={cellHeight}
                  fill={index % 2 === 0 ? '#dcebe0' : '#eaf0e9'}
                  stroke="#315c49"
                  strokeWidth="2"
                />

                <text
                  x={x + cellWidth / 2}
                  y={y + cellHeight / 2 - 5}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="bold"
                  fill="#254b3a"
                >
                  {room}
                </text>

                <text
                  x={x + cellWidth / 2}
                  y={y + cellHeight / 2 + 15}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#506458"
                >
                  Approx. {Math.round(length * width / rooms.length)} sq.ft.
                </text>
              </g>
            )
          })}

          <text
            x={50 + plotWidth / 2}
            y="30"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#254b3a"
          >
            {length} ft
          </text>

          <text
            x="15"
            y={50 + plotHeight / 2}
            textAnchor="middle"
            fontSize="14"
            fill="#254b3a"
            transform={`rotate(-90 15 ${50 + plotHeight / 2})`}
          >
            {width} ft
          </text>
        </svg>
      </div>

      <p style={{ marginTop: '15px', color: '#78827b' }}>
        Total Plot Area: {length * width} sq.ft.
      </p>

      <p style={{ fontSize: '13px', color: '#78827b', marginTop: '8px' }}>
        This is an initial conceptual room arrangement, not a construction-ready plan.
      </p>
    </div>
  )
}

export default FloorPlan
