
function FloorPlan({ project }) {
  const length = Number(project.length)
  const width = Number(project.width)

  const bedrooms = Number(project.bedrooms)
  const bathrooms = Number(project.bathrooms)

  const leftRooms = [
    { name: 'Living Room', weight: 1.5 },
    { name: 'Dining', weight: 0.8 },
    { name: 'Kitchen', weight: 1 }
  ]

  const rightRooms = []

  for (let i = 1; i <= bedrooms; i++) {
    rightRooms.push({
      name: `Bedroom ${i}`,
      weight: 1.2
    })
  }

  for (let i = 1; i <= bathrooms; i++) {
    rightRooms.push({
      name: `Bathroom ${i}`,
      weight: 0.6
    })
  }

  const scale = Math.min(600 / width, 500 / length)

  const plotWidth = width * scale
  const plotHeight = length * scale

  const columnWidth = plotWidth / 2

  function drawRooms(rooms, column) {
    const totalWeight = rooms.reduce(
      (sum, room) => sum + room.weight, 0
    )

    let currentY = 50

    return rooms.map((room, index) => {
      const roomHeight =
        (room.weight / totalWeight) * plotHeight

      const x = 50 + column * columnWidth
      const y = currentY

      const roomLength = roomHeight / scale
      const roomWidth = columnWidth / scale
      const area = roomLength * roomWidth

      currentY += roomHeight

      return (
        <g key={room.name}>
          <rect
            x={x}
            y={y}
            width={columnWidth}
            height={roomHeight}
            fill={index % 2 === 0 ? '#dcebe0' : '#edf3ed'}
            stroke="#315c49"
            strokeWidth="2"
          />

          <text
            x={x + columnWidth / 2}
            y={y + roomHeight / 2 - 7}
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#254b3a"
          >
            {room.name}
          </text>

          <text
            x={x + columnWidth / 2}
            y={y + roomHeight / 2 + 13}
            textAnchor="middle"
            fontSize="11"
            fill="#506458"
          >
            {roomWidth.toFixed(1)} × {roomLength.toFixed(1)} ft
          </text>

          <text
            x={x + columnWidth / 2}
            y={y + roomHeight / 2 + 29}
            textAnchor="middle"
            fontSize="10"
            fill="#506458"
          >
            {Math.round(area)} sq.ft.
          </text>
        </g>
      )
    })
  }

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
          style={{
            width: '100%',
            minWidth: '300px',
            display: 'block'
          }}
        >
          <rect
            x="50"
            y="50"
            width={plotWidth}
            height={plotHeight}
            fill="none"
            stroke="#172b25"
            strokeWidth="4"
          />

          {drawRooms(leftRooms, 0)}
          {drawRooms(rightRooms, 1)}

          <text
            x={50 + plotWidth / 2}
            y="30"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#254b3a"
          >
            {width} ft
          </text>

          <text
            x="15"
            y={50 + plotHeight / 2}
            textAnchor="middle"
            fontSize="14"
            fill="#254b3a"
            transform={`rotate(-90 15 ${50 + plotHeight / 2})`}
          >
            {length} ft
          </text>
        </svg>
      </div>

      <div style={{
        background: '#edf4ef',
        padding: '18px',
        borderRadius: '10px',
        marginTop: '15px'
      }}>
        <h3>Plot Information</h3>
        <p>Dimensions: {length} × {width} ft</p>
        <p>Total Area: {length * width} sq.ft.</p>
        <p>Bedrooms: {bedrooms}</p>
        <p>Bathrooms: {bathrooms}</p>
      </div>

      <p style={{
        fontSize: '12px',
        color: '#78827b',
        marginTop: '12px'
      }}>
        Prototype only. Room proportions are illustrative and do not
        account for walls, doors, windows, circulation or building regulations.
        Professional architectural review is required before construction.
      </p>
    </div>
  )
}

export default FloorPlan
