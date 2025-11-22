const WRAP_PRICE = 49;

/* --- PRODUCT DATA (30 ITEMS) --- */
const products = [
  // Keychains
  {id:1, slug:'resin-name-keychain', title:'Resin Name Keychain', price:249, category:'keychains', img:'img/keychain.png', short:'Cute resin name keychain with glitter finish.', customizable:true},
  {id:2, slug:'photo-keychain', title:'Mini Photo Keychain', price:199, category:'keychains', img:'img/keychain.png', short:'Carry your favourite memory everywhere.', customizable:true},
  {id:3, slug:'initial-charm-keychain', title:'Initial Charm Keychain', price:179, category:'keychains', img:'img/keychain.png', short:'Minimal alphabet charm for daily use.', customizable:true},
  {id:4, slug:'couple-keychain-set', title:'Couple Keychain Set', price:299, category:'keychains', img:'img/keychain.png', short:'Matching pair for you & your person.', customizable:true},
  {id:5, slug:'glitter-resin-keychain', title:'Glitter Resin Keychain', price:229, category:'keychains', img:'img/keychain.png', short:'Sparkly pastel resin keychain.', customizable:true},

  // Memory books / Scrapbooks
  {id:6, slug:'mini-scrapbook', title:'Mini Scrapbook', price:699, category:'memory-books', img:'img/products/lovely combo.png', short:'Handmade scrapbook for 20–25 photos.', customizable:true},
  {id:7, slug:'travel-memory-book', title:'Travel Memory Book', price:849, category:'memory-books', img:'img/booklet.png', short:'Document your favourite trip beautifully.', customizable:true},
  {id:8, slug:'couple-memory-book', title:'Couple Memory Book', price:899, category:'memory-books', img:'img/booklet.png', short:'Romantic storybook for your journey together.', customizable:true},
  {id:9, slug:'birthday-scrapbook', title:'Birthday Scrapbook', price:799, category:'memory-books', img:'img/booklet.png', short:'Perfect for birthday surprise memories.', customizable:true},
  {id:10, slug:'family-photo-book', title:'Family Photo Book', price:949, category:'memory-books', img:'img/booklet.png', short:'Capture family milestones in one book.', customizable:true},

  // Frames
  {id:11, slug:'name-photo-frame', title:'Name Photo Frame', price:599, category:'frames', img:'img/gift card.png', short:'Custom name + picture frame.', customizable:true},
  {id:12, slug:'collage-photo-frame', title:'Collage Photo Frame', price:749, category:'frames', img:'img/gift card.png', short:'Multiple photos in one classy frame.', customizable:true},
  {id:13, slug:'spotify-code-frame', title:'Spotify Code Frame', price:649, category:'frames', img:'img/gift card.png', short:'Scan & play your special song.', customizable:true},
  {id:14, slug:'minimal-aesthetic-frame', title:'Minimal Aesthetic Frame', price:549, category:'frames', img:'img/gift card.png', short:'Clean & modern decor-friendly design.', customizable:true},
  {id:15, slug:'polaroid-grid-frame', title:'Polaroid Grid Frame', price:699, category:'frames', img:'img/gift card.png', short:'Polaroid-style grid of memories.', customizable:true},

  // Gift cards
  {id:16, slug:'pop-card', title:'Pop-Up Card', price:149, category:'gift-cards', img:'img/products/combo 1.png', short:'Cute pop-up surprise card.', customizable:true},
  {id:17, slug:'message-card-set', title:'Message Card Set (10)', price:199, category:'gift-cards', img:'img/card 1.png', short:'Tiny cards to hide sweet notes.', customizable:true},
  {id:18, slug:'foldable-story-card', title:'Foldable Story Card', price:249, category:'gift-cards', img:'img/card 1.png', short:'Tell your story in panels.', customizable:true},
  {id:19, slug:'photo-pull-card', title:'Photo Pull-Out Card', price:279, category:'gift-cards', img:'img/card 1.png', short:'Pull to reveal hidden photos.', customizable:true},
  {id:20, slug:'mini-envelope-card', title:'Mini Envelope Card Box', price:259, category:'gift-cards', img:'img/card 1.png', short:'Tiny envelopes filled with messages.', customizable:true},

  // Wall cards / decor
  {id:21, slug:'wall-cards', title:'Wall Cards Pack', price:499, category:'wall-cards', img:'img/products/card 3.png', short:'Set of wall cards for room decor.', customizable:true},
  {id:22, slug:'aesthetic-wall-grid', title:'Aesthetic Wall Grid Set', price:549, category:'wall-cards', img:'img/products/card 3.png', short:'Mood-board style grid prints.', customizable:true},
  {id:23, slug:'photo-clips-garland', title:'Photo Clips Garland', price:399, category:'wall-cards', img:'img/products/card 3.png', short:'String lights + clips for photos.', customizable:true},
  {id:24, slug:'calendar-wall-cards', title:'Calendar Wall Cards', price:449, category:'wall-cards', img:'img/products/card 3.png', short:'Monthly wall cards you can write on.', customizable:true},
  {id:25, slug:'quote-wall-set', title:'Quote Wall Set', price:429, category:'wall-cards', img:'img/products/card 3.png', short:'Motivational & cute quote prints.', customizable:true},

  // Bouquets
  {id:26, slug:'pastel-bouquet', title:'Pastel Bouquet', price:399, category:'bouquets', img:'img/products/Bouquet.png', short:'Handmade pastel paper bouquet.', customizable:false},
  {id:27, slug:'rose-bouquet-box', title:'Rose Bouquet Box', price:549, category:'bouquets', img:'img/products/Bouquet.png', short:'Box-style bouquet for occasions.', customizable:true},
  {id:28, slug:'chocolate-bouquet', title:'Chocolate Bouquet', price:699, category:'bouquets', img:'img/products/Bouquet.png', short:'Chocolates arranged like flowers.', customizable:true},

  // Combos
  {id:29, slug:'mini-gift-combo', title:'Mini Gift Combo', price:599, category:'combos', img:'img/products/massive combo.png', short:'Keychain + card + tiny frame.', customizable:true},
  {id:30, slug:'massive-combo-pack', title:'Massive Combo Pack', price:1299, category:'combos', img:'img/products/massive combo.png', short:'Bouquet + scrapbook + frame + cards.', customizable:true}
];

/* Stored state (shared across pages) */
const cart = JSON.parse(localStorage.getItem('dm_cart') || '[]');
const wishlist = JSON.parse(localStorage.getItem('dm_wish') || '[]');

/* --- RENDER PRODUCTS --- */
function renderProducts(list = products){
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = '';
  list.forEach(p => {
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <img src="${p.img}" alt="${p.title} - handmade, personalised"
           onerror="this.src='https://via.placeholder.com/300?text=Product'"
           onclick="openModal(${p.id})" />
      <div class="meta">
        <h4>${p.title}</h4>
        <p class="small">${p.short}</p>
        <div class="price-row">
          <div class="price">₹${p.price}</div>
          <div class="icon-actions">
            <button class="heart" title="Add to wishlist" onclick="toggleWish(${p.id})">♡</button>
            <button class="btn btn-outline" onclick="openModal(${p.id})">View</button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
}

/* --- MOBILE MENU HANDLERS --- */
function openMobileMenu(){
  const el = document.getElementById('mobileNavDrawer');
  if(!el) return;
  el.classList.add('open');
  el.setAttribute('aria-hidden','false');
}
function closeMobileMenu(){
  const el = document.getElementById('mobileNavDrawer');
  if(!el) return;
  el.classList.remove('open');
  el.setAttribute('aria-hidden','true');
}

/* --- NAVIGATION HELPERS --- */
function goToShopPage(){
  window.location.href = 'shop.html';
}

/* --- PRODUCT MODAL --- */
function openModal(id){
  const p = products.find(x => x.id === id);
  if(!p) return;

  const titleEl = document.getElementById('modalTitle');
  const priceEl = document.getElementById('modalPrice');
  const descEl = document.getElementById('modalDesc');
  const imgEl = document.getElementById('modalImg');
  const modal = document.getElementById('productModal');
  const addBtn = document.getElementById('addToCartBtn');

  if (titleEl) titleEl.textContent = p.title;
  if (priceEl) priceEl.textContent = '₹' + p.price;
  if (descEl) descEl.textContent = p.short + ' — This piece is crafted with care, personalised for your loved one.';
  if (imgEl) imgEl.src = p.img;

  if (modal){
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  }

  if (addBtn){
    addBtn.onclick = () => addToCart(p.id);
  }
}

function closeModal(){
  const modal = document.getElementById('productModal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

/* --- CART LOGIC --- */
function addToCart(id){
  const name = document.getElementById('custName')?.value || '';
  const msg = document.getElementById('custMsg')?.value || '';
  const color = document.getElementById('custColor')?.value || '';
  const wrap = document.getElementById('wrapOpt')?.checked || false;
  
  // Read chosen photo file name (for reference in WhatsApp)
  const photoInput = document.getElementById('custPhoto');
  const photoFile = photoInput && photoInput.files && photoInput.files[0] ? photoInput.files[0] : null;
  const photoName = photoFile ? photoFile.name : '';
  const hasPhoto = !!photoFile;

  const p = products.find(x => x.id === id);
  if(!p) return;

  const item = {
    id: p.id,
    title: p.title,
    price: p.price,
    qty: 1,
    name,
    msg,
    color,
    wrap,
    photoName,
    hasPhoto
  };

  cart.push(item);
  localStorage.setItem('dm_cart', JSON.stringify(cart));
  updateCartCount();
  closeModal();
  alert('Added to cart!');
}

function updateCartCount(){
  const el = document.getElementById('cartCount');
  if(el) el.textContent = cart.length;
}

/* --- WISHLIST LOGIC --- */
function toggleWish(id){
  const idx = wishlist.indexOf(id);
  if(idx > -1) {
    wishlist.splice(idx, 1);
  } else {
    wishlist.push(id);
  }
  localStorage.setItem('dm_wish', JSON.stringify(wishlist));
  updateWishCountInUI();
  alert('Wishlist updated');
}

function updateWishCountInUI(){
  const wishCounter = document.getElementById('wishTotalCount');
  if(wishCounter) wishCounter.textContent = wishlist.length;
}

/* --- SEARCH & PAGE INIT --- */
document.addEventListener('DOMContentLoaded', () => {
  const searchEl = document.getElementById('searchInput');
  const isShopPage = window.location.pathname.toLowerCase().includes('shop');
  let initialQuery = '';

  if (isShopPage) {
    const params = new URLSearchParams(window.location.search);
    initialQuery = params.get('search') || params.get('q') || '';
  }

  // INITIAL RENDER
  if (isShopPage) {
    if (initialQuery) {
      if (searchEl) searchEl.value = initialQuery;
      const qLower = initialQuery.toLowerCase();
      const res = products.filter(p =>
        (p.title + p.short + p.category).toLowerCase().includes(qLower)
      );
      renderProducts(res);
    } else {
      renderProducts(products);
    }
  } else {
    // Home page shows only first 6 as "Bestsellers"
    renderProducts(products.slice(0, 6));
  }

  // SEARCH BEHAVIOUR
  if (searchEl){
    if (isShopPage) {
      // On shop page: live filter all products
      searchEl.addEventListener('input', function(e){
        const q = e.target.value.trim().toLowerCase();
        if(!q){
          renderProducts(products);
          return;
        }
        const res = products.filter(p =>
          (p.title + p.short + p.category).toLowerCase().includes(q)
        );
        renderProducts(res);
      });
    } else {
      // On home page: redirect to shop page with query when pressing Enter
      searchEl.addEventListener('keydown', function(e){
        if (e.key === 'Enter') {
          const q = e.target.value.trim();
          if (!q) return;
          window.location.href = 'shop.html?search=' + encodeURIComponent(q);
        }
      });
    }
  }

  // Email join
  window.joinEmail = function(){
    const emailInput = document.getElementById('emailJoin');
    const email = emailInput?.value.trim();
    if(!email || !email.includes('@')){
      alert('Please enter a valid email.');
      return;
    }
    alert('Thanks! We will send cute ideas to ' + email);
    if(emailInput) emailInput.value = '';
  };

  // Pack builder placeholder
  window.openBuilder = function(){
    alert('Gift Pack Builder coming soon');
  };

  // Modal overlay close & ESC
  const productModal = document.getElementById('productModal');
  if(productModal){
    productModal.addEventListener('click', function(e){
      if(e.target === this) closeModal();
    });
  }
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeModal();
  });

  // Lazy-load images
  window.addEventListener('load', () => {
    document.querySelectorAll('img').forEach(img => {
      img.loading = 'lazy';
    });
  });

  // Header offset
  setHeaderOffset();
  window.addEventListener('resize', setHeaderOffset);

  // Init counts
  updateCartCount();
  updateWishCountInUI();
});

/* --- CART & WISHLIST DRAWERS --- */
function openCart(){
  const modal = document.getElementById('cartModal');
  if(!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  renderCart();
}
function closeCart(){
  const modal = document.getElementById('cartModal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

function openWish(){
  const modal = document.getElementById('wishModal');
  if(!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  renderWish();
}
function closeWish(){
  const modal = document.getElementById('wishModal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

function renderCart(){
  const listEl = document.getElementById('cartList');
  const summaryEl = document.getElementById('cartSummary');
  const totalCountEl = document.getElementById('cartTotalCount');
  if(!listEl || !summaryEl || !totalCountEl) return;

  listEl.innerHTML = '';
  if(!cart.length){
    listEl.innerHTML = '<div class="muted" style="padding:12px; text-align:center; margin-top:20px;">Your cart is empty.</div>';
    summaryEl.textContent = 'Total: ₹0';
    totalCountEl.textContent = '0';
    return;
  }

  let total = 0;

  cart.forEach((item, idx) => {
    const p = products.find(prod => prod.id === item.id);
    const imgSrc = p?.img || 'https://via.placeholder.com/120';
    const qty = item.qty || 1;

    const baseAmount = item.price * qty;
    const wrapAmount = item.wrap ? WRAP_PRICE * qty : 0;
    const lineTotal = baseAmount + wrapAmount;

    total += lineTotal;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${imgSrc}" alt="${item.title}">
      <div style="flex:1">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-weight:700">${item.title}</div>
            <div class="small-muted">₹${item.price} ${item.wrap ? `( + ₹${WRAP_PRICE} wrap )` : ''}</div>
          </div>
          <div style="text-align:right">
            <div style="font-weight:800">₹${lineTotal}</div>
            <button class="btn btn-outline" style="margin-top:6px; font-size:11px; padding:4px 8px;" onclick="removeCartItem(${idx})">Remove</button>
          </div>
        </div>
        <div style="margin-top:8px;display:flex;justify-content:flex-start;align-items:center;gap:8px">
          <div class="qty-control">
            <button onclick="changeQty(${idx}, -1)">−</button>
            <div style="padding:6px 10px;border-radius:8px;border:1px solid #E8DCE9">${qty}</div>
            <button onclick="changeQty(${idx}, +1)">+</button>
          </div>
        </div>
      </div>
    `;
    listEl.appendChild(row);
  });

  summaryEl.textContent = 'Total: ₹' + total;
  totalCountEl.textContent = cart.length;
  updateCartCount();
  localStorage.setItem('dm_cart', JSON.stringify(cart));
}

function removeCartItem(index){
  if(index < 0 || index >= cart.length) return;
  cart.splice(index, 1);
  localStorage.setItem('dm_cart', JSON.stringify(cart));
  renderCart();
}

function changeQty(index, delta){
  if(index < 0 || index >= cart.length) return;
  cart[index].qty = Math.max(1, (cart[index].qty || 1) + delta);
  localStorage.setItem('dm_cart', JSON.stringify(cart));
  renderCart();
}

/* Clear & checkout buttons */
document.getElementById('clearCartBtn')?.addEventListener('click', () => {
  if(!cart.length) return;
  if(!confirm('Clear entire cart?')) return;
  cart.splice(0, cart.length);
  localStorage.setItem('dm_cart', JSON.stringify(cart));
  renderCart();
});

document.getElementById('checkoutBtn')?.addEventListener('click', () => {
  if (!cart.length) {
    alert('Cart is empty');
    return;
  }

  const whatsappNumber = '916381602251';

  let message = '🛍️ *New Dearly Made Order*\n\n';
  let grandTotal = 0;

  cart.forEach((item, index) => {
    const p = products.find(x => x.id === item.id) || item;
    const qty = item.qty || 1;

    const baseAmount = item.price * qty;
    const wrapAmount = item.wrap ? WRAP_PRICE * qty : 0;
    const lineTotal = baseAmount + wrapAmount;

    grandTotal += lineTotal;

    message += '----------------------------\n';
    message += `🧾 *_Item ${index + 1}_*: *${p.title}*\n`;
    message += `*Qty:* ${qty}\n`;
    message += `*Price:* ₹${item.price}\n`;
    message += `*Base Total:* ₹${baseAmount}\n`;

    if (item.wrap) {
      message += `*Gift Wrap:* Yes *(₹${WRAP_PRICE} x ${qty} = ₹${wrapAmount})*\n`;
    } else {
      message += `*Gift Wrap:* No\n`;
    }

    if (item.color) message += `*Color:* _${item.color}_\n`;
    if (item.name)  message += `*Name:* ${item.name}\n`;
    if (item.msg)   message += `*Message:* ${item.msg}\n`;

    message += `*Line Total:* *₹${lineTotal}*\n`;

    if (item.hasPhoto) {
      message += `*Photo:* Yes (file: ${item.photoName || 'uploaded by customer'})\n`;
    } else {
      message += '*Photo:* No\n';
    }

    message += '\n';
  });

  message += '----------------------------\n';
  message += `*Grand Total (incl. gift wrap):* *₹${grandTotal}*\n\n`;
  message += '_Please confirm the details and upload photos (if any) here._';

  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encoded}`;

  // Open WhatsApp
  window.open(waUrl, '_blank');

  // ✅ Clear cart after opening WhatsApp
  cart.splice(0, cart.length);
  localStorage.setItem('dm_cart', JSON.stringify(cart));

  // Update cart UI
  updateCartCount();
  const listEl = document.getElementById('cartList');
  const summaryEl = document.getElementById('cartSummary');
  const totalCountEl = document.getElementById('cartTotalCount');

  if (listEl) {
    listEl.innerHTML = '<div class="muted" style="padding:12px; text-align:center; margin-top:20px;">Your cart is empty.</div>';
  }
  if (summaryEl) summaryEl.textContent = 'Total: ₹0';
  if (totalCountEl) totalCountEl.textContent = '0';
});

/* WISHLIST RENDERING */
function renderWish(){
  const listEl = document.getElementById('wishList');
  const totalEl = document.getElementById('wishTotalCount');
  if(!listEl || !totalEl) return;

  listEl.innerHTML = '';
  if(!wishlist.length){
    listEl.innerHTML = '<div class="muted" style="padding:12px">Your wishlist is empty.</div>';
    totalEl.textContent = '0';
    return;
  }

  wishlist.forEach((id, idx) => {
    const p = products.find(x => x.id === id) || {title:'Unknown', price:0, img:'https://via.placeholder.com/120'};
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div style="flex:1;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-weight:700">${p.title}</div>
          <div class="small-muted">₹${p.price}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
          <button class="btn btn-primary" onclick="addWishToCart(${id})" style="font-size:11px; padding:4px 8px;">Add</button>
          <button class="btn btn-outline" onclick="removeWish(${idx})" style="font-size:11px; padding:4px 8px;">Remove</button>
        </div>
      </div>
    `;
    listEl.appendChild(row);
  });
  totalEl.textContent = wishlist.length;
}

function removeWish(index){
  if(index < 0 || index >= wishlist.length) return;
  wishlist.splice(index, 1);
  localStorage.setItem('dm_wish', JSON.stringify(wishlist));
  renderWish();
}

function addWishToCart(id){
  const p = products.find(x => x.id === id);
  if(!p) return;
  cart.push({id:p.id, title:p.title, price:p.price, qty:1, name:'', msg:'', color:'', wrap:false});
  const idx = wishlist.indexOf(id);
  if(idx > -1) wishlist.splice(idx, 1);
  localStorage.setItem('dm_wish', JSON.stringify(wishlist));
  localStorage.setItem('dm_cart', JSON.stringify(cart));
  updateCartCount();
  renderWish();
  alert('Added to cart');
}

/* HEADER OFFSET */
function setHeaderOffset() {
  const header = document.querySelector('header');
  const root = document.documentElement;
  if(!header || !root) return;
  const headerRect = header.getBoundingClientRect();
  const offset = Math.ceil(headerRect.height + 12);
  root.style.setProperty('--header-offset', offset + 'px');
}

/* ATTACH ICON BUTTON HANDLERS */
document.getElementById('cartBtn')?.addEventListener('click', openCart);
document.getElementById('wishlistBtn')?.addEventListener('click', openWish);
