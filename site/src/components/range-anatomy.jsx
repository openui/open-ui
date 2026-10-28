import React from 'react'
import './range-anatomy.css'

const TRACK_Y = 70
const TRACK_H = 12
const TRACK_X = 40
const TRACK_W = 520
const THUMB_R = 10

const Label = ({ x, y, children, anchor = 'middle', italic = false, fill = '#333' }) => (
  <text
    x={x}
    y={y}
    textAnchor={anchor}
    fill={fill}
    fontSize="11"
    fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontStyle={italic ? 'italic' : 'normal'}
  >
    {children}
  </text>
)

/** Bracket with ticks pointing toward the track (direction: 'up' | 'down'). */
const Bracket = ({ x1, x2, y, label, labelOffset = 14, color = '#333', dashed = false, direction = 'down' }) => {
  const mid = (x1 + x2) / 2
  const tick = direction === 'down' ? -6 : 6
  const labelY = direction === 'down' ? y + labelOffset : y - labelOffset + 4
  return (
    <g stroke={color} fill="none" strokeWidth="1.25">
      <path
        d={`M ${x1} ${y + tick} V ${y} H ${x2} V ${y + tick}`}
        strokeDasharray={dashed ? '4 3' : undefined}
      />
      <Label x={mid} y={labelY} fill={color} italic={dashed}>
        {label}
      </Label>
    </g>
  )
}

const Tick = ({ x, label }) => (
  <g>
    <line x1={x} y1={TRACK_Y - 4} x2={x} y2={TRACK_Y + TRACK_H + 4} stroke="#666" strokeWidth="1.5" />
    <Label x={x} y={TRACK_Y - 14}>
      {label}
    </Label>
  </g>
)

const Thumb = ({ x, label, labelY }) => (
  <g>
    <circle
      cx={x}
      cy={TRACK_Y + TRACK_H / 2}
      r={THUMB_R}
      fill="#2196f3"
      stroke="#0d47a1"
      strokeWidth="1.5"
    />
    {label && (
      <Label x={x} y={labelY} fill="#0d47a1">
        {label}
      </Label>
    )}
  </g>
)

const SingleThumbPanel = () => {
  const thumbX = TRACK_X + TRACK_W * 0.4
  const tickXs = [0, 0.25, 0.5, 0.75, 1].map((t) => TRACK_X + TRACK_W * t)
  const tickLabels = ['0', '25', '50', '75', '100']

  return (
    <div className="range-anatomy__panel">
      <p className="range-anatomy__title">
        Single thumb — <code>input[type=range]</code>
      </p>
      <svg viewBox="0 0 600 200" role="img" aria-labelledby="single-thumb-title">
        <title id="single-thumb-title">
          Anatomy of a single-thumb range input showing track, fill-under, fill-over, thumb, ticks, and
          tick labels
        </title>

        <rect
          x={TRACK_X}
          y={TRACK_Y}
          width={TRACK_W}
          height={TRACK_H}
          rx="6"
          fill="#e0e0e0"
          stroke="#999"
          strokeWidth="1"
        />

        <rect
          x={TRACK_X}
          y={TRACK_Y}
          width={thumbX - TRACK_X}
          height={TRACK_H}
          rx="6"
          fill="#4caf50"
          opacity="0.85"
        />
        <rect x={thumbX - 8} y={TRACK_Y} width={8} height={TRACK_H} fill="#4caf50" opacity="0.85" />

        {tickXs.map((x, i) => (
          <Tick key={i} x={x} label={tickLabels[i]} />
        ))}

        <Thumb x={thumbX} label="::slider-thumb" labelY={TRACK_Y + TRACK_H + 28} />

        {/* Tick / tick-label callouts pointing at the 50 mark */}
        <g>
          <line
            x1={tickXs[2]}
            y1={TRACK_Y - 28}
            x2={tickXs[2] + 70}
            y2={28}
            stroke="#666"
            strokeWidth="1"
          />
          <Label x={tickXs[2] + 74} y={24} anchor="start" fill="#666">
            ::slider-tick
          </Label>
          <line
            x1={tickXs[2]}
            y1={TRACK_Y - 40}
            x2={tickXs[2] - 60}
            y2={18}
            stroke="#666"
            strokeWidth="1"
          />
          <Label x={tickXs[2] - 64} y={16} anchor="end" fill="#666">
            ::slider-tick-label
          </Label>
        </g>

        <Bracket
          x1={TRACK_X}
          x2={thumbX}
          y={TRACK_Y + TRACK_H + 48}
          label="::slider-fill-under  (= segment(1))"
          color="#2e7d32"
        />
        <Bracket
          x1={thumbX}
          x2={TRACK_X + TRACK_W}
          y={TRACK_Y + TRACK_H + 48}
          label="::slider-fill-over  (= segment(2))"
          color="#757575"
        />
        <Bracket
          x1={TRACK_X}
          x2={TRACK_X + TRACK_W}
          y={TRACK_Y + TRACK_H + 80}
          label="::slider-track"
          color="#333"
        />
      </svg>
    </div>
  )
}

const MultiThumbPanel = () => {
  const thumbA = TRACK_X + TRACK_W * 0.3
  const thumbB = TRACK_X + TRACK_W * 0.7
  const end = TRACK_X + TRACK_W

  return (
    <div className="range-anatomy__panel">
      <p className="range-anatomy__title">
        Two thumbs — <code>&lt;rangegroup&gt;</code>
      </p>
      <svg viewBox="0 0 600 220" role="img" aria-labelledby="multi-thumb-title">
        <title id="multi-thumb-title">
          Anatomy of a two-thumb rangegroup showing track, three segments, two thumbs, and the interval
          between thumbs
        </title>

        <rect
          x={TRACK_X}
          y={TRACK_Y}
          width={TRACK_W}
          height={TRACK_H}
          rx="6"
          fill="#e0e0e0"
          stroke="#999"
          strokeWidth="1"
        />

        <rect x={TRACK_X} y={TRACK_Y} width={thumbA - TRACK_X} height={TRACK_H} rx="6" fill="#ffccbc" />
        <rect x={thumbA - 6} y={TRACK_Y} width={6} height={TRACK_H} fill="#ffccbc" />

        <rect x={thumbA} y={TRACK_Y} width={thumbB - thumbA} height={TRACK_H} fill="#81c784" />

        <rect x={thumbB} y={TRACK_Y} width={end - thumbB} height={TRACK_H} rx="6" fill="#bbdefb" />
        <rect x={thumbB} y={TRACK_Y} width={6} height={TRACK_H} fill="#bbdefb" />

        <Thumb x={thumbA} label="::slider-thumb" labelY={TRACK_Y + TRACK_H + 28} />
        <Thumb x={thumbB} label="::slider-thumb" labelY={TRACK_Y + TRACK_H + 28} />

        <Bracket
          x1={TRACK_X}
          x2={thumbA}
          y={34}
          label="::slider-segment(1)"
          color="#e64a19"
          direction="up"
        />
        <Bracket
          x1={thumbA}
          x2={thumbB}
          y={34}
          label="::slider-segment(2)"
          color="#2e7d32"
          direction="up"
        />
        <Bracket
          x1={thumbB}
          x2={end}
          y={34}
          label="::slider-segment(3)"
          color="#1565c0"
          direction="up"
        />

        <Bracket
          x1={thumbA}
          x2={thumbB}
          y={TRACK_Y + TRACK_H + 48}
          label="interval  (draggable region, not a pseudo-element)"
          color="#6b4c9a"
          dashed
        />
        <Bracket
          x1={TRACK_X}
          x2={end}
          y={TRACK_Y + TRACK_H + 84}
          label="::slider-track"
          color="#333"
        />

        <Label x={TRACK_X} y={TRACK_Y + TRACK_H + 120} anchor="start" fill="#666">
          With N thumbs → N+1 segments, max(N−1, 0) intervals
        </Label>
      </svg>
      <ul className="range-anatomy__legend">
        <li>
          A <strong>segment</strong> is a paint region addressed by <code>::slider-segment(n)</code>.
        </li>
        <li>
          An <em>interval</em> is the draggable region bounded by a thumb on each side (used by{' '}
          <code>interaction=&quot;range&quot;</code>).
        </li>
        <li>
          The first and last segments are never intervals — translating them would need a thumb at the
          track edge.
        </li>
      </ul>
    </div>
  )
}

const RangeAnatomy = () => {
  return (
    <div className="range-anatomy">
      <SingleThumbPanel />
      <MultiThumbPanel />
    </div>
  )
}

export default RangeAnatomy
