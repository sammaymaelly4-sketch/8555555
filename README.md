import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPorId, CATEGORIAS, resolveImage, formatPreco, getPorCategoria } from '../lib/catalog'
import { useCart } from '../hooks/useCart'
import ProductCard from '../components/ProductCard'
import BottomNav from '../components/BottomNav'

export default function Produto() {
  const { id } = useParams()
  const nav = useNavigate()
  const produto = getPorId(id)
  const { items, add, remove, set } = useCart()
  const [imgSrc, setImgSrc] = useState(null)

  useEffect(() => {
    if (produto) resolveImage(produto).then(setImgSrc)
  }, [id])

  if (!produto) return <div style={{ padding:20, fontFamily:"'Nunito',sans-serif" }}>Produto não encontrado. <button onClick={() => nav('/')}>Voltar</button></div>

  const cat = CATEGORIAS[produto.categoria]
  const cartItem = items.find(i => i.id === produto.id)
  const qty = cartItem?.qty || 0
  const combos = getPorCategoria('snacks').slice(0,3)

  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'100vh', background:'#FAF6EE' }}>
      <div style={{ background:'#2D5A3D', padding:'12px 14px', position:'sticky', top:0, zIndex:20, display:'flex', alignItems:'center', gap:10 }}>
        <button onClick={() => nav(-1)} style={{ width:30, height:30, borderRadius:'50%', background:'rgba(255,255,255,.15)', border:'none', color:'#fff', fontSize:16, cursor:'pointer' }}>←</button>
        <span style={{ fontFamily:"'Fredoka One',cursive", fontSize:16, color:'#F0E8D8', flex:1 }}>{cat.emoji} {cat.nome}</span>
      </div>

      <div style={{ flex:1, overflowY:'auto' }}>
        {/* imagem hero */}
        <div style={{ background:cat.bgCard, minHeight:180, display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
          {imgSrc
            ? <img src={imgSrc} alt={produto.nome} style={{ maxHeight:180, objectFit:'contain', padding:16 }} onError={e => { e.target.style.display='none' }} />
            : <span style={{ fontSize:90 }}>{produto.imageFallback}</span>
          }
          {produto.badge && (
            <div style={{ position:'absolute', top:12, right:14, background:'#E8622A', color:'#fff', fontSize:9, fontWeight:900, padding:'3px 10px', borderRadius:99 }}>
              {produto.badge} ✨
            </div>
          )}
        </div>

        {/* info */}
        <div style={{ background:'#fff', padding:'14px 16px', borderBottom:'1px solid rgba(45,90,61,.08)' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
            <div>
              <p style={{ fontFamily:"'Fredoka One',cursive", fontSize:20, color:'#1A2E1F' }}>{produto.nome}</p>
              <small style={{ fontSize:11, color:'#6B8A72', fontWeight:600 }}>{produto.descricao}</small>
            </div>
            <span style={{ fontFamily:"'Fredoka One',cursive", fontSize:24, color:'#E8622A' }}>{formatPreco(produto.preco)}</span>
          </div>
          <p style={{ fontSize:11, color:'#6B8A72', marginTop:8, lineHeight:1.5, fontWeight:600 }}>
            {produto.marca} · Disponível para entrega em até 30 minutos na Vila São José.
          </p>
        </div>

        {/* quantidade */}
        <div style={{ background:'#fff', margin:'8px 0', padding:'14px 16px' }}>
          <p style={{ fontSize:12, fontWeight:800, color:'#1A2E1F', marginBottom:10 }}>Quantidade</p>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <button onClick={() => qty > 0 && set(produto.id, qty-1)}
              style={{ width:38, height:38, borderRadius:'50%', background:'#F0E8D8', border:'none', fontSize:22, color:'#2D5A3D', fontWeight:900, cursor:'pointer' }}>−</button>
            <span style={{ fontFamily:"'Fredoka One',cursive", fontSize:24, color:'#1A2E1F' }}>{qty}</span>
            <button onClick={() => qty === 0 ? add(produto.id) : set(produto.id, qty+1)}
              style={{ width:38, height:38, borderRadius:'50%', background:'#2D5A3D', border:'none', fontSize:22, color:'#fff', fontWeight:900, cursor:'pointer' }}>+</button>
            {qty > 0 && <span style={{ fontSize:12, color:'#6B8A72', fontWeight:700 }}>= {formatPreco(produto.preco * qty)}</span>}
          </div>
        </div>

        {/* combos */}
        <div style={{ padding:'0 14px 14px' }}>
          <p style={{ fontFamily:"'Fredoka One',cursive", fontSize:14, color:'#1A2E1F', marginBottom:10 }}>🔥 Adicionar ao combo</p>
          <div style={{ display:'flex', gap:8, overflowX:'auto', scrollbarWidth:'none' }}>
            {combos.map(c => (
              <div key={c.id} style={{ flexShrink:0, width:80 }}>
                <ProductCard produto={c} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA fixo */}
      <div style={{ padding:'10px 14px 14px', background:'#FAF6EE', borderTop:'1px solid rgba(45,90,61,.08)' }}>
        <button onClick={() => { if(qty===0) add(produto.id); nav('/carrinho') }}
          style={{ width:'100%', background:'#E8622A', border:'none', borderRadius:16, padding:14, fontFamily:"'Fredoka One',cursive", fontSize:17, color:'#fff', cursor:'pointer' }}>
          {qty === 0 ? `🛒 Adicionar · ${formatPreco(produto.preco)}` : `✅ Ver carrinho · ${formatPreco(produto.preco * qty)}`}
        </button>
      </div>
      <BottomNav />
    </div>
  )
}
