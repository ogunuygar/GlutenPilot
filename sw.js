// Release must match app.js, index.html asset versions, and version.json.
const RELEASE='1.6.0';
const base=new URL(self.registration.scope), prefix='glutenpilot-shell:'+base.href+':', cacheName=prefix+RELEASE;
const asset=p=>new URL(p,base).href, shell=asset('index.html');
const files=[shell,asset('style.css?v='+RELEASE),asset('app.js?v='+RELEASE),asset('recipes.js?v='+RELEASE),asset('recipes-ui.js?v='+RELEASE),asset('manifest.webmanifest'),...['icon-192.png','icon-512.png','maskable-512.png','apple-touch-icon.png'].map(f=>asset('icons/'+f))];
self.addEventListener('install',event=>{event.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(files.map(u=>new Request(u,{cache:'reload'})))));});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const old=(await caches.keys()).filter(k=>k.startsWith(prefix)&&k!==cacheName);await Promise.all(old.slice(0,Math.max(0,old.length-1)).map(k=>caches.delete(k)));await self.clients.claim();})());});
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE_RELEASE')event.waitUntil(self.skipWaiting());});
self.addEventListener('fetch',event=>{
  const req=event.request,u=new URL(req.url);if(req.method!=='GET'||u.origin!==base.origin||!u.pathname.startsWith(base.pathname))return;
  if(req.mode==='navigate'&&(u.pathname===base.pathname||u.pathname===new URL('index.html',base).pathname)){
    event.respondWith(caches.open(cacheName).then(c=>c.match(shell)).then(r=>r||fetch(req)));return;
  }
  if(files.includes(u.href))event.respondWith(caches.open(cacheName).then(c=>c.match(req)).then(r=>r||fetch(req)));
  // Product records, version metadata, third-party libraries and personal data are not cached here.
});
