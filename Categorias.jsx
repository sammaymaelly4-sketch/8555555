import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Splash() {
  const nav = useNavigate()
  useEffect(() => { const t = setTimeout(() => nav('/'), 2500); return () => clearTimeout(t) }, [])

  return (
    <div style={{ width:'100%', height:'100vh', background:'#1E3D2A', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden', fontFamily:"'Nunito',sans-serif" }}>
      {/* rings */}
      {[300,200,120].map((s,i) => (
        <div key={i} style={{ position:'absolute', width:s, height:s, borderRadius:'50%', border:'1px solid #E8622A', opacity:.1, top:'50%', left:'50%', transform:'translate(-50%,-50%)', animation:`pulse ${2+i*.5}s ease-in-out infinite` }} />
      ))}
      {/* glow */}
      <div style={{ position:'absolute', width:260, height:260, borderRadius:'50%', background:'radial-gradient(circle,rgba(232,98,42,.15) 0%,transparent 70%)', top:'50%', left:'50%', transform:'translate(-50%,-55%)' }} />
      {/* icon */}
      <div style={{ width:88, height:88, background:'#E8622A', borderRadius:26, display:'flex', alignItems:'center', justifyContent:'center', fontSize:44, marginBottom:20, zIndex:2, animation:'pop .8s cubic-bezier(.34,1.56,.64,1) both' }}>
        🛒
      </div>
      {/* name */}
      <div style={{ fontFamily:"'Fredoka One',cursive", fontSize:28, color:'#F0E8D8', textAlign:'center', lineHeight:1.1, zIndex:2, animation:'fadeUp .6s ease both .4s', opacity:0 }}>
        Mercadinho<br/><span style={{ color:'#E8622A' }}>da Carmen</span>
      </div>
      <div style={{ fontSize:11, color:'#C4A882', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', marginTop:8, zIndex:2, animation:'fadeUp .6s ease both .6s', opacity:0 }}>
        Delivery do Bairro
      </div>
      {/* loader bar */}
      <div style={{ position:'absolute', bottom:48, width:140, height:3, background:'rgba(196,168,130,.2)', borderRadius:99, overflow:'hidden', zIndex:2 }}>
        <div style={{ height:'100%', background:'#E8622A', borderRadius:99, animation:'loadbar 2.2s ease forwards .5s', width:0 }} />
      </div>
      <div style={{ position:'absolute', bottom:24, fontSize:10, color:'#6B8A72', fontWeight:700, zIndex:2 }}>
        Vila São José · Taubaté SP
      </div>
      <style>{`
        @keyframes pulse { 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.1} 50%{transform:translate(-50%,-50%) scale(1.06);opacity:.2} }
        @keyframes pop { from{transform:scale(0) rotate(-10deg);opacity:0} to{transform:scale(1) rotate(0);opacity:1} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
        @keyframes loadbar { to{width:100%} }
      `}</style>
    </div>
  )
}
