import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { resolveImage, formatPreco, CATEGORIAS } from '../lib/catalog'

const BADGE = {
  TOP:      { bg:'#E8622A', label:'⭐ TOP' },
  HOT:      { bg:'#E53935', label:'🔥 HOT' },
  NEW:      { bg:'#2D5A3D', label:'✨ NOVO' },
  FIT:      { bg:'#1976D2', label:'💪 FIT' },
  ESSENCIAL:{ bg:'#6A1B9A', label:'✅ ESSENCIAL' },
}

function ProductImage({ produto }) {
  const cat = CATEGORIAS[produto.categoria]
  const [src, setSrc] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    resolveImage(produto).then(url => { setSrc(url); setLoading(false) })
  }, [produto.id])

  const bg = cat?.bgCard || '#f5f5f5'

  if (loading) return (
    <div style={{ height:95, background:bg, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ width:24, height:24, border:'3px solid rgba(0,0,0,.1)', borderTopColor:'#E8622A', borderRadius:'50%', animation:'spin .8s linear infinite' }} />
    </div>
  )
  if (src) return (
    <div style={{ height:95, background:bg, overflow:'hidden' }}>
      <img src={src} alt={produto.nome}
        style={{ width:'100%', height:'100%', objectFit:'contain', padding:8 }}
        onError={e => { e.target.style.display='none'; e.target.parentElement.dataset.fallback='1' }} />
    </div>
  )
  return (
    <div style={{ height:95, background:bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:40 }}>
      {produto.imageFallback}
    </div>
  )
}

export default function ProductCard({ produto }) {
  const nav = useNavigate()
  const cartItem = items.find(i => i.id === produto.id)
  const qty = cartItem?.qty || 0
  const badge = produto.badge ? BADGE[produto.badge] : null

  return (
    <div style={{ background:'#fff', borderRadius:16, overflow:'hidden', border:'1px solid rgba(45,90,61,.1)', position:'relative', fontFamily:"'Nunito',sans-serif" }}>
      {badge && (
        <div style={{ position:'absolute', top:6, left:6, background:badge.bg, color:'#fff', fontSize:8, fontWeight:900, padding:'2px 6px', borderRadius:99, zIndex:2 }}>
          {badge.label}
        </div>
      )}
      <div onClick={() => nav(`/produto/${produto.id}`)} style={{ cursor:'pointer' }}>
        <ProductImage produto={produto} />
      </div>
      <div style={{ padding:'8px 10px 10px' }}>
        <p onClick={() => nav(`/produto/${produto.id}`)} style={{ fontSize:11, fontWeight:800, color:'#1A2E1F', lineHeight:1.25, marginBottom:2, cursor:'pointer' }}>
          {produto.nome}
        </p>
        <small style={{ fontSize:10, color:'#6B8A72', fontWeight:600, display:'block', marginBottom:6 }}>
          {produto.descricao}
        </small>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontFamily:"'Fredoka One',cursive", fontSize:15, color:'#E8622A' }}>
            {formatPreco(produto.preco)}
          </span>
          {qty === 0 ? (
            <button onClick={() => add(produto)}
              style={{ width:26, height:26, background:'#E8622A', border:'none', borderRadius:'50%', color:'#fff', fontSize:18, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900 }}>
              +
            </button>
          ) : (
            <div style={{ display:'flex', alignItems:'center', gap:4 }}>
              <button onClick={() => onRemove && onRemove(produto.id)}
                style={{ width:22, height:22, borderRadius:'50%', border:'1.5px solid #2D5A3D', background:'transparent', color:'#2D5A3D', fontSize:14, fontWeight:900, cursor:'pointer' }}>−</button>
              <span style={{ fontSize:13, fontWeight:900, color:'#1A2E1F', minWidth:14, textAlign:'center' }}>{qty}</span>
              <button onClick={() => onAdd && onAdd(produto.id)}
                style={{ width:22, height:22, borderRadius:'50%', background:'#E8622A', border:'none', color:'#fff', fontSize:14, fontWeight:900, cursor:'pointer' }}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
