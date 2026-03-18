import { useNavigate, useLocation } from 'react-router-dom'

const TABS = [
  { path:'/home',       icon:'🏠', label:'Início' },
  { path:'/categorias', icon:'☰',  label:'Categorias' },
  { path:'/carrinho',   icon:'🛒',  label:'Carrinho' },
  { path:'/pedidos',    icon:'📦',  label:'Pedidos' },
  { path:'/perfil',     icon:'👤',  label:'Perfil' },
]

export default function BottomNav({ cartQty = 0 }) {
  const nav = useNavigate()
  const { pathname } = useLocation()

  return (
    <nav style={{ background:'#fff', borderTop:'1px solid rgba(45,90,61,.1)', display:'flex', flexShrink:0 }}>
      {TABS.map(t => {
        const active = pathname === t.path
        return (
          <button key={t.path} onClick={() => nav(t.path)} style={{ flex:1, border:'none', background:'none', padding:'8px 0 10px', cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center', gap:2 }}>
            <span style={{ fontSize:18, position:'relative' }}>
              {t.icon}
              {t.path === '/carrinho' && cartQty > 0 && (
                <span style={{ position:'absolute', top:-4, right:-6, background:'#E8622A', color:'#fff', fontSize:8, fontWeight:900, width:14, height:14, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center' }}>{cartQty}</span>
              )}
            </span>
            <span style={{ fontSize:8, fontWeight:700, color: active ? '#E8622A' : '#6B8A72', fontFamily:"'Nunito',sans-serif" }}>{t.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
