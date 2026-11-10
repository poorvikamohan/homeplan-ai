
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

function drawFurniture(room, x, y, roomWidth, roomHeight) {
  const furnitureScale = Math.min(
    (roomWidth - 20) / 160,
    (roomHeight * 0.34) / 100,
    1
  )

  const s = Math.max(0.12, furnitureScale)

 

  // BEDROOM - Detailed bed, pillows and bedside tables
  if (room.name.includes("Bedroom")) {
    return (
      <g transform={`translate(${fx},${fy}) scale(${s})`}>
        {/* Bed shadow and wooden frame */}
        <rect x="3" y="4" width="154" height="94"
          rx="8" fill="#8b705b" opacity="0.22"/>

        <rect x="5" y="2" width="150" height="92"
          rx="8" fill="#79583f" stroke="#543b2b" strokeWidth="2"/>

        {/* Headboard */}
        <rect x="5" y="2" width="150" height="13"
          rx="5" fill="#a77b54" stroke="#65472f"/>

        <path d="M15 7 H145" stroke="#d0a47c" strokeWidth="2"/>

        {/* Mattress */}
        <rect x="12" y="15" width="136" height="73"
          rx="5" fill="#eee9df" stroke="#c5bbae" strokeWidth="2"/>

        {/* Pillows */}
        <rect x="19" y="19" width="52" height="23"
          rx="6" fill="#ffffff" stroke="#c9c2b8" strokeWidth="1.5"/>

        <rect x="89" y="19" width="52" height="23"
          rx="6" fill="#ffffff" stroke="#c9c2b8" strokeWidth="1.5"/>

        <path d="M25 30 Q45 25 65 30"
          stroke="#dedbd5" fill="none"/>

        <path d="M95 30 Q115 25 135 30"
          stroke="#dedbd5" fill="none"/>

        {/* Duvet */}
        <rect x="15" y="47" width="130" height="37"
          rx="5" fill="#9db8a3" stroke="#66836e" strokeWidth="1.5"/>

        <path d="M20 55 Q80 48 140 55"
          fill="none" stroke="#d5e2d6" strokeWidth="2"/>

        <path d="M20 76 Q80 69 140 76"
          fill="none" stroke="#d5e2d6" strokeWidth="1.5"/>

        {/* Bedside tables */}
        <rect x="-18" y="18" width="19" height="27"
          rx="3" fill="#b58c65" stroke="#79583f" strokeWidth="2"/>

        <rect x="159" y="18" width="19" height="27"
          rx="3" fill="#b58c65" stroke="#79583f" strokeWidth="2"/>

        {/* Table details */}
        <circle cx="-8" cy="31" r="3" fill="#e7d3ae"/>
        <circle cx="169" cy="31" r="3" fill="#e7d3ae"/>

      </g>
    )
  }

  // LIVING ROOM - Sectional sofa, cushions and coffee table
  if (room.name.includes("Living Room")) {
    return (
      <g transform={`translate(${fx},${fy}) scale(${s})`}>

        {/* Area rug */}
        <rect x="3" y="8" width="154" height="85"
          rx="8" fill="#e5ddd0" stroke="#b8aa97" strokeWidth="2"/>

        <rect x="10" y="14" width="140" height="73"
          rx="5" fill="none" stroke="#c2b39f"
          strokeDasharray="4 3"/>

        {/* Sofa body */}
        <rect x="10" y="15" width="140" height="42"
          rx="10" fill="#587b68" stroke="#355542" strokeWidth="2"/>

        {/* Backrest cushions */}
        <rect x="17" y="19" width="39" height="20"
          rx="6" fill="#a8c1ae" stroke="#52745d"/>

        <rect x="60" y="19" width="39" height="20"
          rx="6" fill="#a8c1ae" stroke="#52745d"/>

        <rect x="103" y="19" width="39" height="20"
          rx="6" fill="#a8c1ae" stroke="#52745d"/>

        {/* Seat cushions */}
        <rect x="17" y="40" width="39" height="12"
          rx="4" fill="#d4dfd3" stroke="#66816d"/>

        <rect x="60" y="40" width="39" height="12"
          rx="4" fill="#d4dfd3" stroke="#66816d"/>

        <rect x="103" y="40" width="39" height="12"
          rx="4" fill="#d4dfd3" stroke="#66816d"/>

        {/* Sofa armrests */}
        <rect x="5" y="23" width="12" height="34"
          rx="5" fill="#456652" stroke="#294936"/>

        <rect x="143" y="23" width="12" height="34"
          rx="5" fill="#456652" stroke="#294936"/>

        {/* Coffee table */}
        <rect x="47" y="67" width="66" height="20"
          rx="4" fill="#b98c60" stroke="#765333" strokeWidth="2"/>

        <rect x="54" y="71" width="52" height="12"
          rx="2" fill="#d4b18a"/>

        {/* Decorative centrepiece */}
        <circle cx="80" cy="77" r="5"
          fill="#789b79" stroke="#486b4a"/>

      </g>
    )
  }

  // KITCHEN - Modular cabinets, sink and cooking range
  if (room.name.includes("Kitchen")) {
    return (
      <g transform={`translate(${fx},${fy}) scale(${s})`}>

        {/* Kitchen counter */}
        <path d="M5 5 H155 V90 H5 Z"
          fill="#c4b49c" stroke="#77664f" strokeWidth="2"/>

        {/* Countertop */}
        <rect x="9" y="9" width="142" height="77"
          rx="3" fill="#ded5c7" stroke="#a49683"/>

        {/* Cabinet divisions */}
        <path d="M9 52 H151 M53 52 V86 M102 52 V86"
          stroke="#947b60" strokeWidth="2"/>

        {/* Cabinet handles */}
        <path d="M27 61 V77 M77 61 V77 M126 61 V77"
          stroke="#80694e" strokeWidth="2"/>

        {/* Sink */}
        <rect x="20" y="17" width="43" height="28"
          rx="5" fill="#a7c4cc" stroke="#587d8c" strokeWidth="2"/>

        <rect x="24" y="21" width="35" height="20"
          rx="4" fill="#e6f0f1" stroke="#91b2bc"/>

        <circle cx="42" cy="31" r="3"
          fill="#7599a6"/>

        {/* Tap */}
        <path d="M42 16 V12 Q42 8 48 8 H53"
          fill="none" stroke="#647c84" strokeWidth="3"/>

        {/* Stove */}
        <rect x="91" y="15" width="49" height="34"
          rx="3" fill="#b7b4ad" stroke="#77736d" strokeWidth="2"/>

        <circle cx="104" cy="26" r="7"
          fill="#77736d" stroke="#454545" strokeWidth="2"/>

        <circle cx="127" cy="26" r="7"
          fill="#77736d" stroke="#454545" strokeWidth="2"/>

        <circle cx="104" cy="41" r="4"
          fill="#77736d"/>

        <circle cx="127" cy="41" r="4"
          fill="#77736d"/>

      </g>
    )
  }

  // DINING - Table with six individual chairs
  if (room.name.includes("Dining")) {
    return (
      <g transform={`translate(${fx},${fy}) scale(${s})`}>

        {/* Dining table */}
        <rect x="29" y="22" width="102" height="55"
          rx="6" fill="#a9794f" stroke="#69472e" strokeWidth="2"/>

        <rect x="35" y="27" width="90" height="45"
          rx="4" fill="#c49a70"/>

        {/* Table centre decoration */}
        <ellipse cx="80" cy="49" rx="12" ry="8"
          fill="#e2d5bd"/>

        <circle cx="80" cy="49" r="5"
          fill="#769477"/>

        {/* Top chairs */}
        <rect x="40" y="2" width="25" height="17"
          rx="5" fill="#b58b63" stroke="#765333" strokeWidth="2"/>

        <rect x="95" y="2" width="25" height="17"
          rx="5" fill="#b58b63" stroke="#765333" strokeWidth="2"/>

        {/* Bottom chairs */}
        <rect x="40" y="81" width="25" height="17"
          rx="5" fill="#b58b63" stroke="#765333" strokeWidth="2"/>

        <rect x="95" y="81" width="25" height="17"
          rx="5" fill="#b58b63" stroke="#765333" strokeWidth="2"/>

        {/* Side chairs */}
        <rect x="5" y="37" width="18" height="27"
          rx="5" fill="#b58b63" stroke="#765333" strokeWidth="2"/>

        <rect x="137" y="37" width="18" height="27"
          rx="5" fill="#b58b63" stroke="#765333" strokeWidth="2"/>

      </g>
    )
  }

  // BATHROOM - Bathtub, toilet and vanity
  if (room.name.includes("Bathroom")) {
    return (
      <g transform={`translate(${fx},${fy}) scale(${s})`}>

        {/* Bathtub */}
        <rect x="3" y="5" width="55" height="85"
          rx="12" fill="#a9c6d0" stroke="#587d8c" strokeWidth="2"/>

        <rect x="9" y="11" width="43" height="73"
          rx="10" fill="#f8fbfc" stroke="#9bbbc5" strokeWidth="2"/>

        <ellipse cx="30" cy="48" rx="4" ry="5"
          fill="#a9c6d0"/>

        {/* Wash basin */}
        <rect x="78" y="7" width="73" height="35"
          rx="5" fill="#d0c6b6" stroke="#91816d" strokeWidth="2"/>

        <ellipse cx="114" cy="24" rx="23" ry="12"
          fill="#ffffff" stroke="#92aeb8" strokeWidth="2"/>

        <circle cx="114" cy="24" r="3"
          fill="#92aeb8"/>

        {/* Toilet tank */}
        <rect x="91" y="55" width="43" height="13"
          rx="3" fill="#f7f8f7" stroke="#9bafb5" strokeWidth="2"/>

        {/* Toilet seat */}
        <ellipse cx="112" cy="78" rx="23" ry="17"
          fill="#ffffff" stroke="#92aeb8" strokeWidth="2"/>

        <ellipse cx="112" cy="78" rx="12" ry="9"
          fill="#e8f1f3" stroke="#b0c7ce"/>

      </g>
    )
  }

  return null
}

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
          
{/* Simple furniture symbols */}
{/* Detailed furniture */}
{drawFurniture(room, x, y, columnWidth, roomHeight)}

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
