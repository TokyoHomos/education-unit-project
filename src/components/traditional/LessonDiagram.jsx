import { useState } from 'react';

/* ── Lesson 1: PC System Overview ──────────────────────────── */
function PCSystemDiagram() {
  const [hovered, setHovered] = useState(null);

  const components = [
    { id: 'cpu',  x: 200, y: 110, w: 90, h: 70,  label: 'CPU',         color: '#00d4ff', desc: 'Executes all instructions' },
    { id: 'ram',  x: 320, y: 110, w: 70, h: 70,  label: 'RAM',         color: '#c084fc', desc: 'Active working memory' },
    { id: 'gpu',  x: 100, y: 220, w: 100, h: 60, label: 'GPU',         color: '#00ff88', desc: 'Renders graphics' },
    { id: 'ssd',  x: 230, y: 220, w: 80, h: 60,  label: 'NVMe SSD',   color: '#ffaa00', desc: 'Persistent storage' },
    { id: 'psu',  x: 340, y: 220, w: 70, h: 60,  label: 'PSU',         color: '#f87171', desc: 'Powers everything' },
    { id: 'mobo', x: 180, y: 60,  w: 240, h: 240,label: 'MOTHERBOARD', color: '#2563eb', desc: 'Connects all components', isBg: true },
  ];

  const buses = [
    { x1: 245, y1: 180, x2: 245, y2: 220, color: '#00d4ff' },
    { x1: 355, y1: 180, x2: 355, y2: 220, color: '#c084fc' },
    { x1: 280, y1: 145, x2: 320, y2: 145, color: '#ffffff' },
    { x1: 150, y1: 145, x2: 200, y2: 145, color: '#2563eb' },
  ];

  const info = hovered ? components.find(c => c.id === hovered) : null;

  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
      <svg viewBox="0 0 520 320" style={{ flex: '0 0 auto', width: '100%', maxWidth: 420, height: 'auto' }}>
        {/* Background glow */}
        <defs>
          <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="glow2"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>

        {/* Motherboard bg */}
        <rect x="175" y="55" width="250" height="250" rx="12" fill="rgba(37,99,235,0.06)" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5" strokeDasharray="6,3"/>
        <text x="300" y="76" textAnchor="middle" fill="rgba(37,99,235,0.5)" fontSize="8" fontFamily="monospace" letterSpacing="3">MOTHERBOARD PCB</text>

        {/* Bus lines */}
        {buses.map((b, i) => (
          <line key={i} x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2} stroke={b.color} strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4,3"/>
        ))}

        {/* PCIe bus label */}
        <text x="248" y="208" fill="rgba(0,212,255,0.4)" fontSize="7" fontFamily="monospace">PCIe</text>

        {/* Components (non-bg) */}
        {components.filter(c => !c.isBg).map(c => (
          <g key={c.id} style={{ cursor: 'pointer' }}
            onMouseEnter={() => setHovered(c.id)}
            onMouseLeave={() => setHovered(null)}>
            <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="8"
              fill={hovered === c.id ? `${c.color}22` : `${c.color}0f`}
              stroke={c.color}
              strokeWidth={hovered === c.id ? 2 : 1}
              filter={hovered === c.id ? 'url(#glow)' : undefined}
            />
            <text x={c.x + c.w/2} y={c.y + c.h/2 - 4} textAnchor="middle"
              fill={c.color} fontSize="11" fontFamily="'Orbitron',monospace" fontWeight="700">
              {c.label}
            </text>
            {hovered === c.id && (
              <text x={c.x + c.w/2} y={c.y + c.h/2 + 12} textAnchor="middle"
                fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">
                {c.desc}
              </text>
            )}
          </g>
        ))}

        {/* Power lines from PSU */}
        <line x1="375" y1="220" x2="150" y2="145" stroke="#f87171" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3,4"/>
        <text x="390" y="195" fill="rgba(248,113,113,0.5)" fontSize="7" fontFamily="monospace">+12V</text>

        {/* Legend */}
        <text x="20" y="290" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace">HOVER COMPONENTS TO EXPLORE</text>
      </svg>

      {/* Info panel */}
      <div style={{ flex: 1, minWidth: 160 }}>
        {info ? (
          <div style={{ background: `${info.color}10`, border: `1px solid ${info.color}40`, borderRadius: 10, padding: 16, transition: 'all 0.3s' }}>
            <div style={{ color: info.color, fontFamily: "'Orbitron',monospace", fontSize: 12, fontWeight: 700, marginBottom: 6 }}>
              {info.label}
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{info.desc}</div>
          </div>
        ) : (
          <div style={{ color: 'var(--text-muted)', fontSize: 12, fontFamily: "'Orbitron',monospace", letterSpacing: 1 }}>
            ← HOVER A COMPONENT
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Lesson 2: CPU Architecture ────────────────────────────── */
function CPUDiagram() {
  const [active, setActive] = useState(null);

  const parts = [
    { id: 'cu',    x: 30,  y: 30,  w: 120, h: 50, label: 'CONTROL UNIT',    color: '#00d4ff', desc: 'Directs fetch→decode→execute pipeline' },
    { id: 'alu',   x: 170, y: 30,  w: 120, h: 50, label: 'ALU',             color: '#c084fc', desc: 'Arithmetic & Logic operations' },
    { id: 'l1',    x: 30,  y: 110, w: 80,  h: 40, label: 'L1 CACHE',       color: '#00ff88', desc: '~64KB, <1ns latency, per-core' },
    { id: 'l2',    x: 130, y: 110, w: 80,  h: 40, label: 'L2 CACHE',       color: '#ffaa00', desc: '~1MB, ~3ns latency, per-core' },
    { id: 'l3',    x: 230, y: 110, w: 80,  h: 40, label: 'L3 CACHE',       color: '#f87171', desc: '~30MB, ~10ns, shared across cores' },
    { id: 'reg',   x: 30,  y: 175, w: 100, h: 35, label: 'REGISTERS',      color: '#00d4ff', desc: 'Fastest storage, inside ALU, ~0.3ns' },
    { id: 'mc',    x: 150, y: 175, w: 100, h: 35, label: 'MEM CONTROLLER', color: '#c084fc', desc: 'Manages CPU↔RAM communication' },
    { id: 'pcie',  x: 270, y: 175, w: 70,  h: 35, label: 'PCIe CTRL',      color: '#00ff88', desc: 'Direct CPU lanes to GPU/NVMe' },
  ];

  const info = active ? parts.find(p => p.id === active) : null;

  return (
    <div>
      <svg viewBox="0 0 380 240" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <filter id="cglow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>

        {/* CPU die outline */}
        <rect x="10" y="10" width="360" height="220" rx="14" fill="rgba(13,21,41,0.8)" stroke="rgba(0,212,255,0.2)" strokeWidth="1.5"/>
        <text x="190" y="226" textAnchor="middle" fill="rgba(0,212,255,0.3)" fontSize="7" fontFamily="monospace" letterSpacing="3">CPU DIE — CLICK TO EXPLORE</text>

        {/* Internal buses */}
        <line x1="90"  y1="80"  x2="90"  y2="110" stroke="#00d4ff" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3,3"/>
        <line x1="230" y1="80"  x2="230" y2="110" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3,3"/>
        <line x1="30"  y1="150" x2="30"  y2="175" stroke="#00ff88" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3,3"/>
        <line x1="110" y1="150" x2="200" y2="175" stroke="#ffaa00" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3,3"/>

        {parts.map(p => (
          <g key={p.id} style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === p.id ? null : p.id)}
            onMouseEnter={() => !active && setActive(p.id)}
            onMouseLeave={() => !active && setActive(null)}>
            <rect x={p.x} y={p.y} width={p.w} height={p.h} rx="6"
              fill={active === p.id ? `${p.color}25` : `${p.color}10`}
              stroke={p.color} strokeWidth={active === p.id ? 1.5 : 0.8}
              filter={active === p.id ? 'url(#cglow)' : undefined}/>
            <text x={p.x + p.w/2} y={p.y + p.h/2 + 4} textAnchor="middle"
              fill={active === p.id ? p.color : `${p.color}cc`}
              fontSize="8" fontFamily="'Orbitron',monospace" fontWeight="700">
              {p.label}
            </text>
          </g>
        ))}
      </svg>

      {info && (
        <div style={{ background: `${info.color}0d`, border: `1px solid ${info.color}35`, borderRadius: 8, padding: '10px 14px', marginTop: 8, display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ color: info.color, fontFamily: "'Orbitron',monospace", fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap' }}>{info.label}</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: 12 }}>{info.desc}</div>
        </div>
      )}
    </div>
  );
}

/* ── Lesson 3: RAM / Memory Hierarchy ──────────────────────── */
function RAMDiagram() {
  const [hovered, setHovered] = useState(null);

  const levels = [
    { id: 'reg',  label: 'CPU REGISTERS',    size: '~1 KB',    speed: '< 1 ns',   bw: '3,200 GB/s', color: '#00d4ff', w: 120 },
    { id: 'l1',   label: 'L1 CACHE',         size: '64 KB',    speed: '1 ns',     bw: '1,000 GB/s', color: '#00e5ff', w: 180 },
    { id: 'l2',   label: 'L2 CACHE',         size: '1 MB',     speed: '3 ns',     bw: '400 GB/s',   color: '#c084fc', w: 240 },
    { id: 'l3',   label: 'L3 CACHE',         size: '30 MB',    speed: '10 ns',    bw: '200 GB/s',   color: '#a78bfa', w: 300 },
    { id: 'ddr5', label: 'DDR5 RAM',          size: '16–128 GB',speed: '40 ns',    bw: '96 GB/s',    color: '#ffaa00', w: 340 },
    { id: 'nvme', label: 'NVMe SSD',          size: '1–8 TB',   speed: '100 µs',   bw: '12 GB/s',    color: '#f87171', w: 380 },
    { id: 'hdd',  label: 'HDD',              size: '1–20 TB',  speed: '10 ms',    bw: '0.15 GB/s',  color: '#94a3b8', w: 400 },
  ];

  const h = 28;
  const gap = 8;
  const totalH = levels.length * (h + gap) + 20;
  const maxW = 400;

  return (
    <div>
      <svg viewBox={`0 0 480 ${totalH}`} style={{ width: '100%', height: 'auto' }}>
        <text x="240" y="14" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace" letterSpacing="2">MEMORY HIERARCHY — CLICK A LEVEL</text>
        {levels.map((lv, i) => {
          const y = 20 + i * (h + gap);
          const x = (maxW - lv.w) / 2 + 40;
          const isHov = hovered === lv.id;
          return (
            <g key={lv.id} style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHovered(lv.id)}
              onMouseLeave={() => setHovered(null)}>
              <rect x={x} y={y} width={lv.w} height={h} rx="5"
                fill={isHov ? `${lv.color}22` : `${lv.color}0e`}
                stroke={lv.color} strokeWidth={isHov ? 1.5 : 0.8}/>
              <text x={x + lv.w/2} y={y + h/2 + 4} textAnchor="middle"
                fill={lv.color} fontSize="9" fontFamily="'Orbitron',monospace" fontWeight="700">
                {lv.label}
              </text>
              {/* Size label */}
              <text x={x - 6} y={y + h/2 + 4} textAnchor="end"
                fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace">
                {lv.size}
              </text>
              {/* Speed */}
              <text x={x + lv.w + 6} y={y + h/2 + 4} textAnchor="start"
                fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">
                {lv.speed}
              </text>
            </g>
          );
        })}
        {/* Vertical axis label */}
        <text x="14" y={totalH/2} textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="monospace"
          transform={`rotate(-90, 14, ${totalH/2})`}>SLOWER / LARGER →</text>
      </svg>

      {hovered && (() => {
        const lv = levels.find(l => l.id === hovered);
        return (
          <div style={{ background: `${lv.color}0d`, border: `1px solid ${lv.color}35`, borderRadius: 8, padding: '10px 14px', marginTop: 4, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[['Capacity', lv.size], ['Latency', lv.speed], ['Bandwidth', lv.bw]].map(([k,v]) => (
              <div key={k}>
                <div style={{ color: 'var(--text-muted)', fontSize: 10, fontFamily: "'Orbitron',monospace", letterSpacing: 1 }}>{k}</div>
                <div style={{ color: lv.color, fontSize: 13, fontWeight: 700, fontFamily: "'Orbitron',monospace" }}>{v}</div>
              </div>
            ))}
          </div>
        );
      })()}
    </div>
  );
}

/* ── Lesson 4: GPU Pipeline ────────────────────────────────── */
function GPUDiagram() {
  const [step, setStep] = useState(null);

  const stages = [
    { id: 0, label: 'VERTEX\nSHADER',   icon: '📐', color: '#00d4ff', desc: 'Transforms 3D geometry coordinates into 2D screen space' },
    { id: 1, label: 'RASTER\nIZATION',  icon: '🔲', color: '#c084fc', desc: 'Converts vector geometry into pixel fragments' },
    { id: 2, label: 'PIXEL\nSHADER',    icon: '🎨', color: '#00ff88', desc: 'Calculates color, lighting, and texture for each pixel' },
    { id: 3, label: 'RT\nCORES',         icon: '🔦', color: '#ffaa00', desc: 'Ray tracing unit — simulates real light physics' },
    { id: 4, label: 'TENSOR\nCORES',     icon: '🤖', color: '#f87171', desc: 'AI acceleration for DLSS upscaling and inference' },
    { id: 5, label: 'FRAME\nBUFFER',     icon: '🖥️', color: '#94a3b8', desc: 'Final rendered frame stored in VRAM, sent to display' },
  ];

  const boxW = 62, boxH = 60, gap = 6;
  const totalW = stages.length * (boxW + gap) - gap + 20;

  return (
    <div>
      <svg viewBox={`0 0 ${totalW} 110`} style={{ width: '100%', height: 'auto' }}>
        <text x={totalW/2} y="12" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace" letterSpacing="2">GPU RENDER PIPELINE</text>

        {stages.map((s, i) => {
          const x = 10 + i * (boxW + gap);
          const isActive = step === i;
          return (
            <g key={s.id} style={{ cursor: 'pointer' }} onClick={() => setStep(step === i ? null : i)}>
              {/* Arrow connector */}
              {i > 0 && (
                <path d={`M${x-gap} 45 L${x} 45`} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" markerEnd="url(#arrow)"/>
              )}
              <rect x={x} y="20" width={boxW} height={boxH} rx="8"
                fill={isActive ? `${s.color}22` : `${s.color}0d`}
                stroke={s.color} strokeWidth={isActive ? 2 : 0.8}/>
              <text x={x + boxW/2} y="42" textAnchor="middle" fontSize="16">{s.icon}</text>
              <text x={x + boxW/2} y="66" textAnchor="middle" fill={s.color} fontSize="7" fontFamily="'Orbitron',monospace" fontWeight="700">
                {s.label.split('\n')[0]}
              </text>
              <text x={x + boxW/2} y="76" textAnchor="middle" fill={s.color} fontSize="7" fontFamily="'Orbitron',monospace" fontWeight="700">
                {s.label.split('\n')[1]}
              </text>
            </g>
          );
        })}

        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.2)"/>
          </marker>
        </defs>
      </svg>

      {step !== null && (() => {
        const s = stages[step];
        return (
          <div style={{ background: `${s.color}0d`, border: `1px solid ${s.color}35`, borderRadius: 8, padding: '10px 14px', marginTop: 4, display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ fontSize: 22 }}>{s.icon}</span>
            <div>
              <div style={{ color: s.color, fontFamily: "'Orbitron',monospace", fontSize: 10, fontWeight: 700 }}>{s.label.replace('\n', ' ')}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 12, marginTop: 2 }}>{s.desc}</div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

/* ── Lesson 5: Storage Speed Comparison ────────────────────── */
function StorageDiagram() {
  const [hovered, setHovered] = useState(null);

  const drives = [
    { id: 'hdd',   label: 'HDD',            speed: 0.15,  maxSpeed: 0.15,  color: '#94a3b8', icon: '💿', spec: '5400 RPM, SATA' },
    { id: 'sata',  label: 'SATA SSD',        speed: 0.55,  maxSpeed: 0.55,  color: '#ffaa00', icon: '⚡', spec: 'SATA III, 6 Gb/s' },
    { id: 'nvme3', label: 'NVMe Gen3',        speed: 3.5,   maxSpeed: 3.5,   color: '#c084fc', icon: '🚀', spec: 'PCIe 3.0 x4' },
    { id: 'nvme4', label: 'NVMe Gen4',        speed: 7.0,   maxSpeed: 7.0,   color: '#00d4ff', icon: '⚡', spec: 'PCIe 4.0 x4' },
    { id: 'nvme5', label: 'NVMe Gen5',        speed: 12.0,  maxSpeed: 12.0,  color: '#00ff88', icon: '🌟', spec: 'PCIe 5.0 x4' },
  ];

  const maxVal = 12.0;
  const barMaxW = 300;

  return (
    <div>
      <div style={{ marginBottom: 8, fontFamily: "'Orbitron',monospace", fontSize: 9, color: 'var(--text-muted)', letterSpacing: 2 }}>
        SEQUENTIAL READ SPEED (GB/s) — CLICK TO COMPARE
      </div>
      {drives.map(d => {
        const barW = (d.speed / maxVal) * barMaxW;
        const isHov = hovered === d.id;
        return (
          <div key={d.id}
            style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, cursor: 'pointer' }}
            onMouseEnter={() => setHovered(d.id)}
            onMouseLeave={() => setHovered(null)}>
            <div style={{ width: 80, fontSize: 10, color: isHov ? d.color : 'var(--text-muted)', fontFamily: "'Orbitron',monospace", textAlign: 'right', transition: 'color 0.2s' }}>
              {d.icon} {d.label}
            </div>
            <div style={{ flex: 1, height: 28, background: 'rgba(255,255,255,0.03)', borderRadius: 6, overflow: 'hidden', border: `1px solid ${isHov ? d.color+'40' : 'rgba(255,255,255,0.06)'}`, transition: 'border-color 0.2s' }}>
              <div style={{
                height: '100%',
                width: isHov ? `${(d.speed / maxVal) * 100}%` : `${(d.speed / maxVal) * 100}%`,
                background: `linear-gradient(90deg, ${d.color}33, ${d.color}88)`,
                borderRight: `2px solid ${d.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 8,
                transition: 'all 0.4s ease',
                boxShadow: isHov ? `0 0 12px ${d.color}44` : 'none',
              }}>
                <span style={{ fontFamily: "'Orbitron',monospace", fontSize: 10, color: d.color, fontWeight: 700 }}>
                  {d.speed >= 1 ? `${d.speed} GB/s` : `${d.speed * 1000} MB/s`}
                </span>
              </div>
            </div>
          </div>
        );
      })}
      {hovered && (() => {
        const d = drives.find(x => x.id === hovered);
        return (
          <div style={{ background: `${d.color}0d`, border: `1px solid ${d.color}35`, borderRadius: 8, padding: '8px 14px', marginTop: 4, display: 'flex', gap: 16, alignItems: 'center' }}>
            <span style={{ fontSize: 20 }}>{d.icon}</span>
            <div>
              <div style={{ color: d.color, fontFamily: "'Orbitron',monospace", fontSize: 10, fontWeight: 700 }}>{d.label}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: 11 }}>{d.spec}</div>
            </div>
            <div style={{ marginLeft: 'auto', color: d.color, fontFamily: "'Orbitron',monospace", fontSize: 16, fontWeight: 800 }}>
              {d.speed >= 1 ? `${d.speed} GB/s` : `${d.speed * 1000} MB/s`}
            </div>
          </div>
        );
      })()}
    </div>
  );
}

/* ── Lesson 6: PSU Power Flow ──────────────────────────────── */
function PSUDiagram() {
  const [active, setActive] = useState(null);

  const nodes = [
    { id: 'ac',   x: 30,  y: 120, label: 'AC INPUT\n120/240V', color: '#f87171', icon: '🔌' },
    { id: 'pfc',  x: 130, y: 120, label: 'PFC\nCIRCUIT',       color: '#ffaa00', icon: '⚙️' },
    { id: 'xfmr', x: 230, y: 120, label: 'TRANSFOR\nMER',       color: '#c084fc', icon: '🔄' },
    { id: 'rect', x: 330, y: 120, label: 'RECTIFIER\n+FILTER',  color: '#00d4ff', icon: '📊' },
  ];

  const rails = [
    { label: '+12V Rail', color: '#ffaa00', consumers: ['CPU (125W)', 'GPU (450W)', 'Fans'], y: 55 },
    { label: '+5V Rail',  color: '#00d4ff', consumers: ['USB ports', 'Storage logic'], y: 185 },
    { label: '+3.3V Rail',color: '#00ff88', consumers: ['RAM', 'PCIe slots'], y: 225 },
  ];

  const nodeW = 70, nodeH = 55;
  const info = active ? [...nodes, ...rails.map(r => ({ id: r.label, label: r.label, color: r.color }))].find(n => n.id === active) : null;

  return (
    <div>
      <svg viewBox="0 0 480 280" style={{ width: '100%', height: 'auto' }}>
        {/* Flow arrows between main nodes */}
        {nodes.map((n, i) => i < nodes.length - 1 && (
          <g key={i}>
            <line x1={n.x + nodeW} y1={n.y + nodeH/2} x2={nodes[i+1].x} y2={nodes[i+1].y + nodeH/2}
              stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
            <polygon points={`${nodes[i+1].x-4},${nodes[i+1].y+nodeH/2-4} ${nodes[i+1].x+2},${nodes[i+1].y+nodeH/2} ${nodes[i+1].x-4},${nodes[i+1].y+nodeH/2+4}`}
              fill="rgba(255,255,255,0.3)"/>
          </g>
        ))}

        {/* Rails from rectifier */}
        {rails.map(r => (
          <g key={r.label}>
            <line x1="400" y1="148" x2="430" y2={r.y + 12} stroke={r.color} strokeWidth="1.5" strokeOpacity="0.5"/>
            <rect x="430" y={r.y} width="110" height="24" rx="5"
              fill={active === r.label ? `${r.color}22` : `${r.color}0d`}
              stroke={r.color} strokeWidth={active === r.label ? 1.5 : 0.8}
              style={{ cursor: 'pointer' }}
              onClick={() => setActive(active === r.label ? null : r.label)}
              onMouseEnter={() => !active && setActive(r.label)}
              onMouseLeave={() => !active && setActive(null)}/>
            <text x="485" y={r.y + 16} textAnchor="middle" fill={r.color}
              fontSize="8" fontFamily="'Orbitron',monospace" fontWeight="700">
              {r.label}
            </text>
          </g>
        ))}

        {/* Main component nodes */}
        {nodes.map(n => (
          <g key={n.id} style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === n.id ? null : n.id)}
            onMouseEnter={() => !active && setActive(n.id)}
            onMouseLeave={() => !active && setActive(null)}>
            <rect x={n.x} y={n.y} width={nodeW} height={nodeH} rx="8"
              fill={active === n.id ? `${n.color}22` : `${n.color}0e`}
              stroke={n.color} strokeWidth={active === n.id ? 2 : 0.8}/>
            <text x={n.x + nodeW/2} y={n.y + 20} textAnchor="middle" fontSize="16">{n.icon}</text>
            <text x={n.x + nodeW/2} y={n.y + 36} textAnchor="middle" fill={n.color} fontSize="7.5" fontFamily="'Orbitron',monospace" fontWeight="700">
              {n.label.split('\n')[0]}
            </text>
            <text x={n.x + nodeW/2} y={n.y + 47} textAnchor="middle" fill={n.color} fontSize="7.5" fontFamily="'Orbitron',monospace" fontWeight="700">
              {n.label.split('\n')[1]}
            </text>
          </g>
        ))}

        <text x="240" y="265" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="monospace" letterSpacing="1">CLICK NODES AND RAILS TO EXPLORE</text>
      </svg>

      {active && (() => {
        const infoMap = {
          ac:   { color: '#f87171', title: 'AC Input', desc: 'Mains power (120V US / 240V EU) enters through the IEC socket. The PSU accepts both via its auto-switching PFC.' },
          pfc:  { color: '#ffaa00', title: 'PFC Circuit', desc: 'Power Factor Correction improves efficiency and reduces harmonic distortion. Active PFC achieves 0.99 PF.' },
          xfmr: { color: '#c084fc', title: 'Transformer', desc: 'High-frequency transformer (100kHz+) steps voltage down and provides galvanic isolation between AC and DC sides.' },
          rect: { color: '#00d4ff', title: 'Rectifier + Filter', desc: 'Converts AC to smooth DC. Capacitors filter ripple to produce clean +12V, +5V, and +3.3V rails.' },
          '+12V Rail': { color: '#ffaa00', title: '+12V Rail', desc: 'Powers CPU (via EPS connector) and GPU (via PCIe/12VHPWR). The most current-heavy rail — up to 80A on high-end PSUs.' },
          '+5V Rail':  { color: '#00d4ff', title: '+5V Rail',  desc: 'Powers USB ports, older storage logic, and some motherboard circuitry. Lower power draw in modern systems.' },
          '+3.3V Rail':{ color: '#00ff88', title: '+3.3V Rail', desc: 'Powers RAM modules and PCIe slot logic. Draws only a few amps in modern builds.' },
        };
        const i = infoMap[active];
        if (!i) return null;
        return (
          <div style={{ background: `${i.color}0d`, border: `1px solid ${i.color}35`, borderRadius: 8, padding: '10px 14px', marginTop: 4 }}>
            <div style={{ color: i.color, fontFamily: "'Orbitron',monospace", fontSize: 10, fontWeight: 700, marginBottom: 4 }}>{i.title}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: 12 }}>{i.desc}</div>
          </div>
        );
      })()}
    </div>
  );
}

/* ── Dispatcher ─────────────────────────────────────────────── */
const DIAGRAMS = {
  1: PCSystemDiagram,
  2: CPUDiagram,
  3: RAMDiagram,
  4: GPUDiagram,
  5: StorageDiagram,
  6: PSUDiagram,
};

export default function LessonDiagram({ lessonId }) {
  const Diagram = DIAGRAMS[lessonId];
  if (!Diagram) return null;

  return (
    <div style={{
      background: 'rgba(7,13,31,0.6)',
      border: '1px solid rgba(0,212,255,0.12)',
      borderRadius: 14,
      padding: '20px 24px',
      margin: '20px 0',
    }}>
      <div style={{
        fontFamily: "'Orbitron',monospace",
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: 3,
        color: 'var(--neon-blue)',
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--neon-blue)', display: 'inline-block', boxShadow: '0 0 8px var(--neon-blue)', animation: 'pulse 2s infinite' }}/>
        INTERACTIVE DIAGRAM
      </div>
      <Diagram />
    </div>
  );
}
