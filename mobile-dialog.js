(()=>{
function enhance(panel){if(panel.dataset.mobileReady)return;panel.dataset.mobileReady='1';let content=document.createElement('div'),actions=document.createElement('div');content.className='dialog-content';actions.className='dialog-actions';for(let node of [...panel.childNodes]){if(node.nodeType===1&&node.tagName==='BUTTON')actions.append(node);else content.append(node)}panel.append(content);if(actions.childNodes.length)panel.append(actions)}
function scan(){document.querySelectorAll('.modal .panel').forEach(enhance)}
function fit(){let v=window.visualViewport;document.documentElement.style.setProperty('--dialog-height',(v?v.height:innerHeight)+'px');document.documentElement.style.setProperty('--dialog-top',(v?v.offsetTop:0)+'px')}
scan();fit();new MutationObserver(scan).observe(document.body,{childList:true,subtree:true});window.addEventListener('resize',fit);window.visualViewport?.addEventListener('resize',fit);window.visualViewport?.addEventListener('scroll',fit);document.addEventListener('focusin',e=>{if(e.target.matches('.modal input,.modal textarea,.modal select'))requestAnimationFrame(()=>e.target.scrollIntoView({block:'nearest'}))});
})();
