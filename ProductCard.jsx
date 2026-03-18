import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const nav = useNavigate()
  const [tab, setTab] = useState('entrar')

  return (
    <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', background:'#FAF6EE', fontFamily:"'Nunito',sans-serif" }}>
      {/* hero verde */}
      <div style={{ background:'#1E3D2A', padding:'28px 20px 24px', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle,rgba(196,168,130,.07) 1px,transparent 1px)', backgroundSize:'20px 20px' }}/>
        <button onClick={() => nav(-1)} style={{ position:'absolute', top:14, left:14, background:'rgba(255,255,255,.13)', border:'none', color:'#fff', width:28, height:28, borderRadius:'50%', fontSize:14, cursor:'pointer' }}>←</button>
        <div style={{ fontFamily:"'Fredoka One',cursive", fontSize:24, color:'#F0E8D8', zIndex:1, lineHeight:1 }}>Mercadinho</div>
        <div style={{ fontFamily:"'Fredoka One',cursive", fontSize:24, color:'#E8622A', zIndex:1, lineHeight:1 }}>da Carmen</div>
        <div style={{ fontSize:11, color:'#C4A882', fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', marginTop:4, zIndex:1 }}>Delivery do Bairro</div>
        <div style={{ fontSize:56, margin:'16px 0 8px', zIndex:1 }}>🛒</div>
        <div style={{ fontFamily:"'Fredoka One',cursive", fontSize:17, color:'#F0E8D8', zIndex:1 }}>
          {tab === 'entrar' ? 'Bem-vindo de volta!' : 'Criar conta grátis'}
        </div>
        <div style={{ fontSize:10, color:'#C4A882', fontWeight:700, marginTop:3, zIndex:1 }}>
          {tab === 'entrar' ? 'Entre pra ver seus favoritos' : 'Rápido e fácil, 1 minuto'}
        </div>
      </div>

      {/* form */}
      <div style={{ flex:1, background:'#FAF6EE', borderRadius:'28px 28px 0 0', padding:'22px 20px', marginTop:-14, overflowY:'auto' }}>
        {/* tabs */}
        <div style={{ display:'flex', background:'rgba(45,90,61,.08)', borderRadius:12, padding:3, marginBottom:18 }}>
          {['entrar','cadastrar'].map(t => (
            <div key={t} onClick={() => setTab(t)} style={{ flex:1, textAlign:'center', padding:'8px', fontSize:12, fontWeight:800, borderRadius:10, cursor:'pointer', background: tab===t ? '#fff' : 'transparent', color: tab===t ? '#2D5A3D' : '#6B8A72', boxShadow: tab===t ? '0 1px 4px rgba(0,0,0,.08)' : 'none', transition:'all .15s' }}>
              {t === 'entrar' ? 'Entrar' : 'Cadastrar'}
            </div>
          ))}
        </div>

        {tab === 'cadastrar' && (
          <div style={{ marginBottom:12 }}>
            <label style={{ display:'block', fontSize:10, fontWeight:800, color:'#6B8A72', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:4 }}>Nome completo</label>
            <input placeholder="Carmen Silva" style={{ width:'100%', background:'#fff', border:'1.5px solid rgba(45,90,61,.15)', borderRadius:12, padding:'10px 12px', fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:'#1A2E1F', outline:'none' }}/>
          </div>
        )}

        <div style={{ marginBottom:12 }}>
          <label style={{ display:'block', fontSize:10, fontWeight:800, color:'#6B8A72', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:4 }}>Telefone ou E-mail</label>
          <input placeholder="(12) 99999-9999" style={{ width:'100%', background:'#fff', border:'1.5px solid rgba(45,90,61,.15)', borderRadius:12, padding:'10px 12px', fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:'#1A2E1F', outline:'none' }}/>
        </div>
        <div style={{ marginBottom:4 }}>
          <label style={{ display:'block', fontSize:10, fontWeight:800, color:'#6B8A72', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:4 }}>Senha</label>
          <input type="password" placeholder="••••••••" style={{ width:'100%', background:'#fff', border:'1.5px solid rgba(45,90,61,.15)', borderRadius:12, padding:'10px 12px', fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:'#1A2E1F', outline:'none' }}/>
        </div>

        {tab === 'entrar' && (
          <div style={{ textAlign:'right', marginBottom:12 }}>
            <span style={{ fontSize:10, color:'#E8622A', fontWeight:800, cursor:'pointer' }}>Esqueci minha senha</span>
          </div>
        )}

        <button onClick={() => nav('/home')} style={{ width:'100%', background:'#E8622A', border:'none', borderRadius:14, padding:'13px', fontFamily:"'Fredoka One',cursive", fontSize:16, color:'#fff', cursor:'pointer', marginTop:8, marginBottom:16 }}>
          {tab === 'entrar' ? '🔓 Entrar' : '✅ Criar conta'}
        </button>

        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
          <div style={{ flex:1, borderTop:'1px solid rgba(45,90,61,.1)' }}/>
          <span style={{ fontSize:10, color:'#6B8A72', fontWeight:700 }}>ou continue com</span>
          <div style={{ flex:1, borderTop:'1px solid rgba(45,90,61,.1)' }}/>
        </div>

        {[{icon:'📱',label:'Entrar com WhatsApp'},{icon:'🔵',label:'Entrar com Google'}].map(b => (
          <button key={b.label} onClick={() => nav('/home')} style={{ width:'100%', background:'#fff', border:'1.5px solid rgba(45,90,61,.12)', borderRadius:12, padding:'11px', fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:800, color:'#1A2E1F', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8, marginBottom:8 }}>
            {b.icon} {b.label}
          </button>
        ))}

        <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:14 }}>
          {['⭐ Favoritos salvos','📦 Histórico','🏷️ Cupons','🔁 Reordenar'].map(c => (
            <div key={c} style={{ background:'rgba(45,90,61,.08)', borderRadius:99, padding:'4px 10px', fontSize:9, fontWeight:800, color:'#2D5A3D' }}>{c}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
