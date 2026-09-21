import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Floating gold dust + drifting petals. Simple geometry, no shadows, no post-processing.
function Dust({ count }) {
  const ref = useRef()
  const { pos, speed } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const speed = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14
      pos[i * 3 + 1] = (Math.random() - 0.5) * 9
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1
      speed[i] = 0.12 + Math.random() * 0.3
    }
    return { pos, speed }
  }, [count])
  useFrame((_, dt) => {
    const a = ref.current.geometry.attributes.position
    for (let i = 0; i < count; i++) {
      let y = a.array[i * 3 + 1] + speed[i] * dt
      if (y > 4.8) y = -4.8
      a.array[i * 3 + 1] = y
      a.array[i * 3] += Math.sin(performance.now() / 2600 + i) * dt * 0.05
    }
    a.needsUpdate = true
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pos, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#E9CD80" size={0.06} sizeAttenuation transparent opacity={0.85} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  )
}

function Petals({ count }) {
  const group = useRef()
  const geo = useMemo(() => {
    const s = new THREE.Shape()
    s.moveTo(0, 0)
    s.bezierCurveTo(0.55, 0.3, 0.55, 1.0, 0, 1.45)
    s.bezierCurveTo(-0.55, 1.0, -0.55, 0.3, 0, 0)
    return new THREE.ShapeGeometry(s, 10)
  }, [])
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        x: (Math.random() - 0.5) * 11,
        y: (Math.random() - 0.5) * 8,
        z: -1 + Math.random() * 3.2,
        s: 0.28 + Math.random() * 0.34,
        r: [Math.random() * 6, Math.random() * 6, Math.random() * 6],
        v: 0.15 + Math.random() * 0.3,
        gold: i % 3 === 0,
      })),
    [count],
  )
  useFrame((_, dt) => {
    group.current.children.forEach((m, i) => {
      const it = items[i]
      m.rotation.x += dt * it.v
      m.rotation.y += dt * it.v * 0.8
      m.position.y -= dt * it.v * 0.6
      m.position.x += Math.sin(performance.now() / 1800 + i) * dt * 0.25
      if (m.position.y < -4.6) m.position.y = 4.6
    })
  })
  return (
    <group ref={group}>
      {items.map((it, i) => (
        <mesh key={i} geometry={geo} position={[it.x, it.y, it.z]} rotation={it.r} scale={it.s}>
          <meshStandardMaterial color={it.gold ? '#C9A24B' : '#F2B9BD'} side={THREE.DoubleSide} roughness={0.35} metalness={it.gold ? 0.7 : 0.1} transparent opacity={0.92} />
        </mesh>
      ))}
    </group>
  )
}

// Camera drifts with the mouse (desktop) or with scroll (mobile)
function Rig({ coarse }) {
  useFrame((state) => {
    const tx = coarse ? Math.sin(window.scrollY / 260) * 0.6 : state.pointer.x * 0.7
    const ty = coarse ? -window.scrollY / 700 : state.pointer.y * 0.4
    state.camera.position.x += (tx - state.camera.position.x) * 0.05
    state.camera.position.y += (ty - state.camera.position.y) * 0.05
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Hero3D({ mobile, coarse, active }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? 'always' : 'never'}
      camera={{ position: [0, 0, 6.5], fov: 50 }}
      gl={{ alpha: true, antialias: !mobile, powerPreference: 'low-power' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 5]} intensity={1.6} color="#ffe7b0" />
      <pointLight position={[-4, -2, 3]} intensity={1.2} color="#ffb3a8" />
      <Dust count={mobile ? 40 : 150} />
      <Petals count={mobile ? 5 : 11} />
      <Rig coarse={coarse} />
    </Canvas>
  )
}
