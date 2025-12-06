import{r as o,j as t}from"./index-6zlssdZG.js";const l=[{src:"/images/kerala-home-modern.jpg",title:"Elegant Kerala Style Modern Home",description:"A full professional exterior repaint using weather-shield coatings, enhancing the architecture’s clean lines and natural light. Balanced tones chosen to elevate curb appeal and long-term durability.",caption:"Project: Modern Kerala home exterior makeover · UV-resistant + all-weather protection"},{src:"images/nalukettu_veedu.jpg",title:"Heritage Nalukettu Restoration",description:"A tasteful repaint preserving the cultural charm of Nalukettu architecture with fresh, breathable colors and natural finishes that highlight wooden elements.",caption:"Project: Nalukettu-style home refresh · Eco-friendly + heritage-safe coating"}],q=`
  .gallery-section {
    padding: 0;
    margin: 0;
  }

  .gallery-heading {
    padding: 0.75rem 1.25rem 0;
    margin: 0;
  }

  .gallery-slider {
    position: relative;
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 100vh;
  }

  .gallery-carousel {
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }

  .gallery-track {
    display: flex;
    transition: transform 0.6s ease;
    will-change: transform;
    height: 100vh;
  }

  .gallery-item-wrapper {
    flex: 0 0 100vw;
    width: 100vw;
    padding: 0;
  }

  .gallery-item {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
  }

  .gallery-item img.carousel-image {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    display: block;
    background: transparent;
    transition: transform 0.35s ease;
  }

  .gallery-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  .gallery-overlay-content {
    width: 280px;
    max-width: 90vw;
    background: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    color: #1f2937;
    text-align: left;
  }

  body.dark-theme .gallery-overlay-content {
    background: #1a1a1a;
  }

  .gallery-overlay h3 {
    font-size: clamp(1.25rem, 2vw + 0.5rem, 1.75rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #111827;
  }

  .gallery-overlay p {
    margin-bottom: 0.35rem;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #4b5563;
  }

  .gallery-overlay .caption {
    font-size: 0.85rem;
    color: #6b7280;
  }

  .gallery-item:hover .gallery-overlay,
  .gallery-item:focus-within .gallery-overlay,
  .gallery-item.show-overlay .gallery-overlay,
  .gallery-item .gallery-overlay.show-overlay {
    opacity: 1;
    pointer-events: auto;
  }

  .gallery-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding: 0;
  }

  .gallery-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background-color: #d1d5db;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
  }

  .gallery-dot.active {
    background-color: #0d6efd;
    box-shadow: 0 2px 8px rgba(13, 110, 253, 0.4);
  }

  .gallery-dot:hover:not(.active) {
    background-color: #e5e7eb;
    transform: scale(1.1);
  }

  body.dark-theme .gallery-dot {
    background-color: rgba(255, 255, 255, 0.5);
  }

  body.dark-theme .gallery-dot.active {
    background-color: #0d6efd;
  }

  body.dark-theme .gallery-dot:hover:not(.active) {
    background-color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 991px) {
    .gallery-item {
      height: 100vh;
      min-height: 100vh;
      max-height: 100vh;
    }
  }

  @media (max-width: 767px) {
    .gallery-slider {
      width: 100vw;
      margin: 0;
      transform: none;
    }

    .gallery-item-wrapper {
      width: 100vw;
    }

    .gallery-item {
      height: 100vh;
      min-height: 100vh;
      max-height: 100vh;
    }

    .gallery-overlay-content {
      width: 260px;
      max-width: 85vw;
    }
  }

  .lightbox-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: lightbox-fade-in 0.25s ease-out;
  }

  .lightbox-content {
    position: relative;
    width: 100%;
    max-width: 95vw;
    max-height: 95vh;
    padding: 1.5rem 2rem;
    color: #f9fafb;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    overflow: hidden;
  }

  .lightbox-close {
    position: absolute;
    top: 1.1rem;
    right: 1.2rem;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: none;
    background: rgba(15, 23, 42, 0.85);
    color: #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    cursor: pointer;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.6);
    transition: background 0.2s ease, transform 0.15s ease;
    z-index: 1;
  }

  .lightbox-close:hover {
    background: rgba(31, 41, 55, 0.95);
    transform: scale(1.03) translateY(-1px);
  }

  .lightbox-main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    min-height: 0;
  }

  .lightbox-image-wrapper {
    position: relative;
    width: 100%;
    max-width: 95vw;
    height: 85vh;
    max-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .lightbox-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
    will-change: transform;
  }

  .lightbox-arrow {
    border: none;
    background: rgba(15, 23, 42, 0.8);
    color: #f9fafb;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.7);
    transition: background 0.2s ease, transform 0.15s ease, opacity 0.15s ease;
  }

  .lightbox-arrow:hover {
    background: rgba(31, 41, 55, 0.95);
    transform: translateY(-1px) scale(1.03);
  }

  .lightbox-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .lightbox-zoom-btn {
    border: none;
    width: 38px;
    height: 38px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(15, 23, 42, 0.9);
    color: #e5e7eb;
    cursor: pointer;
    box-shadow: 0 14px 30px rgba(15, 23, 42, 0.6);
    transition: background 0.2s ease, transform 0.15s ease, opacity 0.15s ease;
  }

  .lightbox-zoom-btn:hover:not(:disabled) {
    background: rgba(31, 41, 55, 0.95);
    transform: translateY(-1px) scale(1.03);
  }

  .lightbox-zoom-btn:disabled {
    opacity: 0.4;
    cursor: default;
  }

  .lightbox-info {
    text-align: left;
    margin-top: 1.75rem;
  }

  .lightbox-info h3 {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 0.35rem;
  }

  .lightbox-info p {
    margin-bottom: 0.25rem;
    font-size: 0.95rem;
    color: #e5e7eb;
  }

  .lightbox-caption {
    font-size: 0.85rem;
    color: #9ca3af;
  }

  @keyframes lightbox-fade-in {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 767px) {
    .lightbox-content {
      max-width: 100%;
      max-height: 100vh;
      padding: 1rem 1.25rem 1.25rem;
    }

    .lightbox-main {
      flex-direction: column;
      gap: 0.75rem;
    }

    .lightbox-image-wrapper {
      width: 100%;
      max-width: 95vw;
      height: 75vh;
      max-height: 75vh;
    }

    .lightbox-arrow {
      width: 40px;
      height: 40px;
    }

    .lightbox-info h3 {
      font-size: 1.05rem;
    }

    .lightbox-info p {
      font-size: 0.9rem;
    }

    .lightbox-caption {
      font-size: 0.8rem;
    }
  }
`,S=c=>1,F=()=>{const[c,g]=o.useState(0),[w,R]=o.useState(S()),[X,M]=o.useState(0),P=o.useRef(null),L=o.useRef([]),v=o.useRef(null),[u,k]=o.useState(!1),[$,m]=o.useState(0),[p,x]=o.useState(1),h=o.useRef(null),i=o.useRef(null),d=o.useRef(null),s=o.useRef(null),[Z,j]=o.useState(null);o.useEffect(()=>{const e=()=>{const r=S();R(r)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const A=Math.max(0,l.length-w);o.useEffect(()=>{const e=()=>{var C;const r=((C=v.current)==null?void 0:C.offsetWidth)||window.innerWidth,a=-(c*r);M(a)};requestAnimationFrame(()=>{setTimeout(e,0)})},[c,w]);const N=e=>{m(e),x(1),k(!0)},f=()=>{k(!1)},b=()=>{m(e=>(e+1)%l.length)},y=()=>{m(e=>(e-1+l.length)%l.length)},z=()=>{x(e=>Math.min(e+.25,3))},E=()=>{x(e=>Math.max(e-.25,1))},D=()=>{f()},O=e=>{e.stopPropagation()},V=e=>{!e.touches||e.touches.length===0||(h.current=e.touches[0].clientX,i.current=null)},Y=e=>{!e.touches||e.touches.length===0||(i.current=e.touches[0].clientX)},H=()=>{if(h.current==null||i.current==null){h.current=null,i.current=null;return}const e=h.current-i.current,r=50;e>r?b():e<-r&&y(),h.current=null,i.current=null};o.useEffect(()=>{if(!u)return;const e=r=>{r.key==="Escape"?f():r.key==="ArrowRight"?b():r.key==="ArrowLeft"?y():r.key==="+"||r.key==="="?z():(r.key==="-"||r.key==="_")&&E()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[u]);const K=e=>{g(e)},I=e=>{j(e)},T=()=>{j(null)},G=e=>{!e.touches||e.touches.length===0||(d.current=e.touches[0].clientX,s.current=null)},W=e=>{!e.touches||e.touches.length===0||(s.current=e.touches[0].clientX)},_=()=>{if(d.current==null||s.current==null){d.current=null,s.current=null;return}const e=d.current-s.current,r=50;e>r?g(a=>Math.min(a+1,A)):e<-r&&g(a=>Math.max(a-1,0)),d.current=null,s.current=null},n=l[$]||l[0];return t.jsxs("section",{id:"gallery1",className:"themed-gallery gallery-section",children:[t.jsx("style",{children:q}),t.jsxs("div",{className:"container-fluid p-0",children:[t.jsx("div",{className:"text-center gallery-heading",children:t.jsx("h2",{className:"fw-bold",children:"Image Gallery"})}),t.jsxs("div",{className:"gallery-slider",children:[t.jsx("div",{className:"gallery-carousel",ref:v,onTouchStart:G,onTouchMove:W,onTouchEnd:_,children:t.jsx("div",{className:"gallery-track",ref:P,style:{transform:`translateX(${X}px)`},children:l.map((e,r)=>t.jsx("div",{className:"gallery-item-wrapper",ref:a=>{a&&(L.current[r]=a)},children:t.jsxs("div",{className:"gallery-item",onClick:()=>N(r),role:"button",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),N(r))},onMouseEnter:()=>I(r),onMouseLeave:T,onTouchStart:()=>I(r),onTouchEnd:T,children:[t.jsx("img",{src:e.src,alt:e.title||`Project ${r+1}`,className:"carousel-image",loading:"lazy"}),t.jsx("div",{className:`gallery-overlay ${Z===r?"show-overlay":""}`,children:t.jsxs("div",{className:"gallery-overlay-content",children:[e.title&&t.jsx("h3",{children:e.title}),e.description&&t.jsx("p",{children:e.description}),e.caption&&t.jsx("p",{className:"caption",children:e.caption})]})})]})},`${e.src}-${r}`))})}),t.jsx("div",{className:"gallery-pagination",children:l.map((e,r)=>t.jsx("button",{type:"button",className:`gallery-dot ${c===r?"active":""}`,onClick:()=>K(r),"aria-label":`Go to image ${r+1}`,"aria-current":c===r?"true":"false"},r))})]})]}),u&&n&&t.jsx("div",{className:"lightbox-overlay",onClick:D,children:t.jsxs("div",{className:"lightbox-content",onClick:O,children:[t.jsx("button",{type:"button",className:"lightbox-close",onClick:f,"aria-label":"Close gallery",children:"✕"}),t.jsxs("div",{className:"lightbox-main",children:[t.jsx("button",{type:"button",className:"lightbox-arrow",onClick:y,"aria-label":"Previous image",children:"←"}),t.jsx("div",{className:"lightbox-image-wrapper",onTouchStart:V,onTouchMove:Y,onTouchEnd:H,children:t.jsx("img",{src:n.src,alt:n.title||"Project image",style:{transform:`scale(${p})`}})}),t.jsx("button",{type:"button",className:"lightbox-arrow",onClick:b,"aria-label":"Next image",children:"→"})]}),t.jsxs("div",{className:"lightbox-controls",children:[t.jsx("button",{type:"button",className:"lightbox-zoom-btn",onClick:E,disabled:p<=1,"aria-label":"Zoom out",children:"−"}),t.jsx("span",{style:{fontSize:"0.85rem",color:"#d1d5db"},children:"Zoom"}),t.jsx("button",{type:"button",className:"lightbox-zoom-btn",onClick:z,disabled:p>=3,"aria-label":"Zoom in",children:"+"})]}),t.jsxs("div",{className:"lightbox-info",children:[n.title&&t.jsx("h3",{style:{color:"white"},children:n.title}),n.description&&t.jsx("p",{children:n.description}),n.caption&&t.jsx("p",{className:"lightbox-caption",children:n.caption})]})]})})]})};export{F as default};
