# Mercadinho da Carmen 🛒

PWA de quick-commerce · Vila São José, Taubaté SP

## Stack
- React 18 + Vite 5
- React Router v6
- Supabase (auth + storage)
- vite-plugin-pwa
- Deploy: Vercel

## Rodar localmente

```bash
npm install
cp .env.example .env
# preencha o .env com suas chaves Supabase
npm run dev
```

## Deploy na Vercel

1. Faça push pro GitHub
2. Acesse vercel.com → New Project → importe o repo
3. Em Environment Variables, adicione:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON
4. Deploy automático a cada push no main ✅

## Trocar foto de produto

Abra `src/lib/catalog.js`, encontre o produto e edite:
```js
imageOverride: 'https://sua-url.supabase.co/storage/produtos/heineken.png'
```

## Estrutura

```
src/
  lib/
    catalog.js      ← 25 SKUs + lógica de imagem híbrida
    supabase.js     ← client Supabase
  hooks/
    useCart.js      ← estado do carrinho
  components/
    ProductCard.jsx ← card com imagem Open Food Facts
    BottomNav.jsx   ← navegação inferior
  pages/
    Splash.jsx      ← tela de abertura
    Home.jsx        ← home com hero, categorias, favoritos
    Categorias.jsx  ← grid de categorias + página por categoria
    Carrinho.jsx    ← carrinho + checkout
    Pedidos.jsx     ← tracking + histórico
    Login.jsx       ← login/cadastro
```
