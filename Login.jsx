export const CATEGORIAS = {
  bebidas: { id:'bebidas', nome:'Bebidas', emoji:'🍺', cor:'#FFB300', bgCard:'linear-gradient(135deg,#FFF8DC,#FFE57F)' },
  snacks:  { id:'snacks',  nome:'Snacks',  emoji:'🍿', cor:'#FF7043', bgCard:'linear-gradient(135deg,#FFF3EE,#FFCCBC)' },
  higiene: { id:'higiene', nome:'Higiene', emoji:'🧴', cor:'#66BB6A', bgCard:'linear-gradient(135deg,#F1F8E9,#C8E6C9)' },
  limpeza: { id:'limpeza', nome:'Limpeza', emoji:'🧹', cor:'#42A5F5', bgCard:'linear-gradient(135deg,#E3F2FD,#BBDEFB)' },
  gelo:    { id:'gelo',    nome:'Gelo',    emoji:'🧊', cor:'#AB47BC', bgCard:'linear-gradient(135deg,#F3E5F5,#E1BEE7)' },
}

export const PRODUTOS = [
  // BEBIDAS
  { id:'B01', nome:'Heineken Long Neck', marca:'Heineken',        descricao:'330ml · lager premium',    categoria:'bebidas', preco:7.90,  barcode:'8710791005009', imageOverride:null, imageFallback:'🍺', badge:'TOP',      destaque:true,  ativo:true },
  { id:'B02', nome:'Skol Lata',          marca:'Ambev',           descricao:'350ml · pilsen gelada',    categoria:'bebidas', preco:4.50,  barcode:'7891149100309', imageOverride:null, imageFallback:'🍻', badge:null,       destaque:false, ativo:true },
  { id:'B03', nome:'Coca-Cola Lata',     marca:'Coca-Cola',       descricao:'350ml · original',         categoria:'bebidas', preco:5.50,  barcode:'7894900011517', imageOverride:null, imageFallback:'🥤', badge:'HOT',      destaque:true,  ativo:true },
  { id:'B04', nome:'Água Mineral',       marca:'Crystal',         descricao:'500ml · sem gás',          categoria:'bebidas', preco:2.50,  barcode:'7896020000018', imageOverride:null, imageFallback:'💧', badge:'ESSENCIAL',destaque:false, ativo:true },
  { id:'B05', nome:'Monster Energy',     marca:'Monster',         descricao:'473ml · original verde',   categoria:'bebidas', preco:12.90, barcode:'5060166694945', imageOverride:null, imageFallback:'⚡', badge:'HOT',      destaque:true,  ativo:true },
  { id:'B06', nome:'Suco Caixinha',      marca:'Del Valle',       descricao:'200ml · sabores variados', categoria:'bebidas', preco:3.50,  barcode:'7894900700923', imageOverride:null, imageFallback:'🧃', badge:null,       destaque:false, ativo:true },
  { id:'B07', nome:'Gatorade',           marca:'PepsiCo',         descricao:'500ml · isotônico',        categoria:'bebidas', preco:8.90,  barcode:'7892840819973', imageOverride:null, imageFallback:'🏃', badge:'FIT',      destaque:true,  ativo:true },
  // SNACKS
  { id:'S01', nome:'Biscoito Oreo',      marca:'Mondelez',        descricao:'90g · recheado original',  categoria:'snacks',  preco:5.90,  barcode:'7622210951359', imageOverride:null, imageFallback:'🍪', badge:null,       destaque:false, ativo:true },
  { id:'S02', nome:'Ruffles Original',   marca:'Elma Chips',      descricao:'96g · batata ondulada',    categoria:'snacks',  preco:6.90,  barcode:'7892840247004', imageOverride:null, imageFallback:'🥔', badge:'TOP',      destaque:true,  ativo:true },
  { id:'S03', nome:'Amendoim Torrado',   marca:'Yoki',            descricao:'100g · salgado',           categoria:'snacks',  preco:4.00,  barcode:'7896336014018', imageOverride:null, imageFallback:'🥜', badge:null,       destaque:false, ativo:true },
  { id:'S04', nome:'Chocolate Lacta',    marca:'Mondelez',        descricao:'80g · ao leite',           categoria:'snacks',  preco:5.50,  barcode:'7622210570482', imageOverride:null, imageFallback:'🍫', badge:null,       destaque:false, ativo:true },
  { id:'S05', nome:'Gelo 1kg',           marca:'Mercadinho',      descricao:'pacote selado',            categoria:'snacks',  preco:5.00,  barcode:null,            imageOverride:null, imageFallback:'🧊', badge:'ESSENCIAL',destaque:true,  ativo:true },
  { id:'S06', nome:'Cigarro Marlboro',   marca:'Philip Morris',   descricao:'maço · vermelho/gold',     categoria:'snacks',  preco:14.00, barcode:'7896150900018', imageOverride:null, imageFallback:'🚬', badge:null,       destaque:false, ativo:true },
  // HIGIENE
  { id:'H01', nome:'Desodorante Rexona', marca:'Unilever',        descricao:'150ml · aerossol',         categoria:'higiene', preco:14.90, barcode:'7891150075817', imageOverride:null, imageFallback:'🌬️',badge:'ESSENCIAL',destaque:true,  ativo:true },
  { id:'H02', nome:'Papel Higiênico',    marca:'Neve',            descricao:'4 rolos · folha dupla',    categoria:'higiene', preco:8.90,  barcode:'7896007552802', imageOverride:null, imageFallback:'🧻', badge:null,       destaque:false, ativo:true },
  { id:'H03', nome:'Absorvente',         marca:'Sempre Livre',    descricao:'pacote básico · com abas', categoria:'higiene', preco:9.90,  barcode:'7891058009397', imageOverride:null, imageFallback:'🩸', badge:null,       destaque:false, ativo:true },
  { id:'H04', nome:'Shampoo',            marca:'Seda',            descricao:'200ml · hidratação',       categoria:'higiene', preco:11.90, barcode:'7891150057899', imageOverride:null, imageFallback:'🚿', badge:null,       destaque:false, ativo:true },
  { id:'H05', nome:'Sabonete',           marca:'Dove',            descricao:'90g · hidratante',         categoria:'higiene', preco:3.90,  barcode:'7891150022644', imageOverride:null, imageFallback:'🧼', badge:null,       destaque:false, ativo:true },
  { id:'H06', nome:'Kit Escova+Pasta',   marca:'Colgate',         descricao:'escova + creme 70g',       categoria:'higiene', preco:12.90, barcode:'7891024174708', imageOverride:null, imageFallback:'🦷', badge:'NEW',      destaque:false, ativo:true },
  { id:'H07', nome:'Preservativo',       marca:'Jontex',          descricao:'caixa 3un · tradicional',  categoria:'higiene', preco:13.90, barcode:'7896222700027', imageOverride:null, imageFallback:'💊', badge:'HOT',      destaque:false, ativo:true },
  // LIMPEZA
  { id:'L01', nome:'Álcool 70%',         marca:'Audax',           descricao:'500ml · líquido multiuso', categoria:'limpeza', preco:7.90,  barcode:'7898964000027', imageOverride:null, imageFallback:'🧪', badge:'ESSENCIAL',destaque:false, ativo:true },
  { id:'L02', nome:'Detergente Ypê',     marca:'Ypê',             descricao:'500ml · limão',            categoria:'limpeza', preco:4.90,  barcode:'7896098900027', imageOverride:null, imageFallback:'🫧', badge:null,       destaque:false, ativo:true },
  { id:'L03', nome:'Esponja Scotch-Brite',marca:'3M',             descricao:'2 unidades · dupla face',  categoria:'limpeza', preco:5.90,  barcode:'7891040030508', imageOverride:null, imageFallback:'🧽', badge:null,       destaque:false, ativo:true },
  { id:'L04', nome:'Saco de Lixo',       marca:'Veja',            descricao:'rolo 30L · 30 unidades',   categoria:'limpeza', preco:6.90,  barcode:'7896007095112', imageOverride:null, imageFallback:'🗑️',badge:null,       destaque:false, ativo:true },
  { id:'L05', nome:'Pano Multiuso',      marca:'Perfex',          descricao:'pacote 5 unidades',        categoria:'limpeza', preco:8.90,  barcode:'7896007024106', imageOverride:null, imageFallback:'🧹', badge:null,       destaque:false, ativo:true },
]

export const getPorCategoria  = (cat) => PRODUTOS.filter(p => p.ativo && p.categoria === cat)
export const getDestaques      = ()    => PRODUTOS.filter(p => p.ativo && p.destaque)
export const getPorId          = (id)  => PRODUTOS.find(p => p.id === id)
export const formatPreco       = (v)   => `R$ ${v.toFixed(2).replace('.',',')}`

// ⚡ Bolt Performance Optimization: Caching active Promises to prevent duplicate concurrent API calls for same barcodes
const imageCache = new Map()

export async function resolveImage(produto) {
  if (produto.imageOverride) return produto.imageOverride
  if (produto.barcode) {
    if (imageCache.has(produto.barcode)) {
      return imageCache.get(produto.barcode)
    }

    const resolvePromise = (async () => {
      try {
        const r = await fetch(`https://world.openfoodfacts.org/api/v2/product/${produto.barcode}.json`,
          { headers: { 'User-Agent': 'MercadinhoCarmen/1.0' } })
        const d = await r.json()
        const url = d?.product?.image_front_url
        if (url) {
          return url
        }
      } catch (_) {}
      return null
    })();

    imageCache.set(produto.barcode, resolvePromise)
    return resolvePromise
  }
  return null
}
