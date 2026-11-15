// ============================================================================
// PyroNull — app core: navigation, About modal, initialisation.
// Page logic lives in pages.js (forms, states), helpers in ui.js, API hook in api.js.
// The Three.js welcome experience further down is preserved from the original file.
// (Original app.js, including the hardcoded demo data, is kept in legacy/.)
// ============================================================================
const PN_VIEWS = ['overview', 'mission', 'explorer', 'relevance', 'gaps', 'burntime', 'reports', 'datamodel'];

function switchView(viewId) {
  PN_VIEWS.forEach(v => {
    const el = document.getElementById('view-' + v);
    const btn = document.getElementById('nav-' + v);
    if (el) el.classList.toggle('hidden', v !== viewId);
    if (btn) {
      btn.classList.toggle('nav-tab-active', v === viewId);
      if (v === viewId) btn.setAttribute('aria-current', 'page');
      else btn.removeAttribute('aria-current');
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openInfoModal(type) {
  openModal(
    'ABOUT PYRONULL',
    'PyroNull — Combustion Intelligence for Human Spaceflight',
    '<p><strong>PyroNull</strong> is a mission-intelligence interface for exploring combustion and fire-safety research in the context of human space-exploration environments.</p>' +
    '<p>Define a mission scenario, discover indexed investigations, review research relevance and evidence gaps, and assemble a mission report. A separate, experimental PSI-159 model estimates burn time from eight model inputs.</p>' +
    '<p class="pn-hint">Research relevance is not a fire-risk or safety certification. Any dataset behind the backend may be demo data and is not verified NASA research unless its source says so.</p>'
  );
}

function initApp() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
  if (window.PN_PAGES) window.PN_PAGES.init();
}

    // ============================================================================
    // 4GB RAM THREE.JS CLOSE-UP STRAIGHT MATCHSTICK + INFERNADO SPREADING VORTEX FIRE
    // ============================================================================
    let matchScene = null;
    let matchCamera = null;
    let matchRenderer = null;
    let matchGroup = null;
    let stickMesh = null;
    let headMesh = null;
    let vortexRibbons = [];
    let coreGlowSprite = null;
    let emberParticles = null;
    let matchAnimId = null;
    let welcomeActive = true;

    let targetMatchX = 0.0;
    let currentMatchX = 0.0;
    let flameSpreadProgress = 0.0; // 0.0 at match head (y = +1.05) -> 1.0 spreading down stick (y = -0.75)
    let welcomeTimers = [];

    function clearWelcomeTimers() {
      welcomeTimers.forEach(t => clearTimeout(t));
      welcomeTimers = [];
    }

    // Procedural Infernado flame streak canvas texture (intense white-hot core -> yellow-gold -> orange-red)
    function createInfernadoStreakTexture() {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 128;
      const ctx = c.getContext('2d');
      const g = ctx.createLinearGradient(32, 128, 32, 0);
      g.addColorStop(0.0, 'rgba(255, 255, 245, 0.0)');
      g.addColorStop(0.14, 'rgba(255, 252, 220, 0.98)');
      g.addColorStop(0.38, 'rgba(255, 200, 50, 0.92)');
      g.addColorStop(0.68, 'rgba(255, 102, 10, 0.65)');
      g.addColorStop(0.92, 'rgba(185, 28, 10, 0.18)');
      g.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 128);

      // Mask horizontal edges smoothly so ribbons have soft glowing edges
      const mask = ctx.createLinearGradient(0, 0, 64, 0);
      mask.addColorStop(0.0, 'rgba(0,0,0,1)');
      mask.addColorStop(0.22, 'rgba(0,0,0,0)');
      mask.addColorStop(0.78, 'rgba(0,0,0,0)');
      mask.addColorStop(1.0, 'rgba(0,0,0,1)');
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = mask;
      ctx.fillRect(0, 0, 64, 128);
      return new THREE.CanvasTexture(c);
    }

    function createCoreHaloTexture() {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext('2d');
      const g = ctx.createRadialGradient(32, 32, 1, 32, 32, 32);
      g.addColorStop(0.0, 'rgba(255, 255, 240, 1)');
      g.addColorStop(0.28, 'rgba(255, 195, 55, 0.85)');
      g.addColorStop(0.65, 'rgba(234, 88, 12, 0.3)');
      g.addColorStop(1.0, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    }

    function initMatchstick3D() {
      const canvas = document.getElementById('matchstickCanvas');
      if (!canvas || typeof THREE === 'undefined') return;

      matchScene = new THREE.Scene();
      const w = window.innerWidth || 1024;
      const h = window.innerHeight || 768;
      // Macro close-up camera framing the straight matchstick & spreading fire
      matchCamera = new THREE.PerspectiveCamera(34, w / h, 0.1, 40);
      matchCamera.position.set(0, 0.25, 4.15);

      matchRenderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'low-power'
      });
      matchRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
      matchRenderer.setSize(w, h);

      const ambient = new THREE.AmbientLight(0xffe4b5, 0.65);
      matchScene.add(ambient);
      const fireLight = new THREE.PointLight(0xff8c1a, 2.8, 10);
      fireLight.position.set(0.2, 0.9, 1.4);
      matchScene.add(fireLight);

      matchGroup = new THREE.Group();
      // Perfectly straight vertical matchstick positioned near the bottom of the screen
      matchGroup.rotation.z = 0.0;
      matchGroup.position.y = -1.78;
      matchScene.add(matchGroup);

      // 1. Macro Close-Up Straight Square-Chamfered Wooden Matchstick with dynamic vertex charring
      const stickGeo = new THREE.BoxGeometry(0.21, 3.2, 0.21, 2, 42, 2);
      const sPos = stickGeo.attributes.position;
      const sColors = new Float32Array(sPos.count * 3);
      for (let i = 0; i < sPos.count; i++) {
        // Warm natural aspen wood color (#E0B16CB)
        sColors[i * 3] = 0.88;
        sColors[i * 3 + 1] = 0.68;
        sColors[i * 3 + 2] = 0.42;
      }
      stickGeo.setAttribute('color', new THREE.BufferAttribute(sColors, 3));
      const stickMat = new THREE.MeshLambertMaterial({ vertexColors: true });
      stickMesh = new THREE.Mesh(stickGeo, stickMat);
      stickMesh.position.y = -0.55;
      matchGroup.add(stickMesh);

      // 2. Realistic Porous Chemical Match Head (Top of the straight stick at y = +1.05)
      const headGeo = new THREE.SphereGeometry(0.205, 20, 18);
      headGeo.scale(0.95, 1.38, 0.95);
      // Slight cellular surface irregularity on the sulfur head
      const hPos = headGeo.attributes.position;
      for (let i = 0; i < hPos.count; i++) {
        const vx = hPos.getX(i), vy = hPos.getY(i), vz = hPos.getZ(i);
        const bump = 1.0 + 0.045 * Math.sin(vx * 28) * Math.cos(vy * 24);
        hPos.setXYZ(i, vx * bump, vy * bump, vz * bump);
      }
      headGeo.computeVertexNormals();
      const headMat = new THREE.MeshStandardMaterial({
        color: 0x26120b,
        emissive: 0xff4500,
        emissiveIntensity: 0.9,
        roughness: 0.82
      });
      headMesh = new THREE.Mesh(headGeo, headMat);
      headMesh.position.y = 1.05;
      matchGroup.add(headMesh);

      // 3. Sketchfab "Infernado" Style Swirling Ribbon Vortex Fire (14 helical flame ribbons that spread & swirl)
      const streakTex = createInfernadoStreakTexture();
      vortexRibbons = [];
      const ribbonCount = 14;
      for (let r = 0; r < ribbonCount; r++) {
        const ribGeo = new THREE.PlaneGeometry(0.32, 1.55, 1, 20);
        const ribMat = new THREE.MeshBasicMaterial({
          map: streakTex,
          transparent: true,
          opacity: 0.88,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          side: THREE.DoubleSide
        });
        const ribMesh = new THREE.Mesh(ribGeo, ribMat);
        ribMesh.userData = {
          angleOffset: (r / ribbonCount) * Math.PI * 2,
          speed: 3.2 + (r % 3) * 0.65,
          radiusScale: 0.14 + (r % 4) * 0.055,
          heightScale: 0.9 + (r % 3) * 0.22
        };
        matchGroup.add(ribMesh);
        vortexRibbons.push(ribMesh);
      }

      // 4. White-Hot Core Halo Sprite (Moves along the active flame front)
      const haloMat = new THREE.SpriteMaterial({
        map: createCoreHaloTexture(),
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      coreGlowSprite = new THREE.Sprite(haloMat);
      coreGlowSprite.scale.set(1.65, 2.1, 1);
      coreGlowSprite.position.y = 1.15;
      matchGroup.add(coreGlowSprite);

      // 5. Swirling Infernado Sparks / Ember Vortex Particles (65 glowing sparks)
      const sparkCount = 65;
      const sparkGeo = new THREE.BufferGeometry();
      const sparkPos = new Float32Array(sparkCount * 3);
      const sparkSeeds = new Float32Array(sparkCount * 3); // [angle, heightProgress, radius]
      for (let i = 0; i < sparkCount; i++) {
        const ang = Math.random() * Math.PI * 2;
        const hProg = Math.random();
        const rad = 0.08 + Math.random() * 0.48;
        sparkSeeds[i * 3] = ang;
        sparkSeeds[i * 3 + 1] = hProg;
        sparkSeeds[i * 3 + 2] = rad;
        sparkPos[i * 3] = Math.cos(ang) * rad;
        sparkPos[i * 3 + 1] = 1.0 + hProg * 1.6;
        sparkPos[i * 3 + 2] = Math.sin(ang) * rad;
      }
      sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
      sparkGeo.userData.seeds = sparkSeeds;
      const sparkMat = new THREE.PointsMaterial({
        map: createCoreHaloTexture(),
        color: 0xffd166,
        size: 0.11,
        transparent: true,
        opacity: 0.92,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      emberParticles = new THREE.Points(sparkGeo, sparkMat);
      matchGroup.add(emberParticles);

      window.addEventListener('resize', onWelcomeResize);
      animateMatchstick3D();
    }

    function onWelcomeResize() {
      if (!matchRenderer || !matchCamera) return;
      const w = window.innerWidth || 1024;
      const h = window.innerHeight || 768;
      matchCamera.aspect = w / h;
      matchCamera.updateProjectionMatrix();
      matchRenderer.setSize(w, h);
    }

    function animateMatchstick3D() {
      if (!welcomeActive) return;
      matchAnimId = requestAnimationFrame(animateMatchstick3D);

      const t = performance.now() * 0.001;

      // Smooth horizontal glide (Center -> Left -> Exit Left)
      currentMatchX += (targetMatchX - currentMatchX) * 0.065;
      if (matchGroup) {
        matchGroup.position.x = currentMatchX;
      }

      // Active Flame Spread at the Bottom Matchstick Head:
      // Keeps the burning head anchored near the bottom edge while the fire spreads and intensifies upward
      flameSpreadProgress = Math.min(1.0, flameSpreadProgress + 0.0016);
      const burnFrontY = 1.05 - flameSpreadProgress * 0.42; // Stays near bottom of viewport while charring upper tip

      // Update dynamic wood charring & glowing ember ring on the matchstick shaft
      if (stickMesh) {
        const sPos = stickMesh.geometry.attributes.position;
        const sCol = stickMesh.geometry.attributes.color;
        for (let i = 0; i < sPos.count; i++) {
          const worldY = sPos.getY(i) + stickMesh.position.y;
          if (worldY > burnFrontY + 0.12) {
            // Charred black carbon above the flame front
            sCol.setXYZ(i, 0.08, 0.06, 0.05);
          } else if (worldY > burnFrontY - 0.16) {
            // Glowing orange-red pyrolysis front where fire is actively spreading
            const glow = 0.75 + 0.25 * Math.sin(t * 14 + i);
            sCol.setXYZ(i, 0.98 * glow, 0.36 * glow, 0.06);
          } else {
            // Unburned natural wood below the flame front
            sCol.setXYZ(i, 0.88, 0.68, 0.42);
          }
        }
        sCol.needsUpdate = true;
      }

      // Update Infernado Swirling Flame Ribbons anchored along the spreading burn zone
      const spreadScale = 1.0 + flameSpreadProgress * 0.45;
      for (let r = 0; r < vortexRibbons.length; r++) {
        const rib = vortexRibbons[r];
        const ud = rib.userData;
        const pos = rib.geometry.attributes.position;
        const baseY = burnFrontY + (r / vortexRibbons.length) * (0.55 * flameSpreadProgress);

        for (let i = 0; i < pos.count; i++) {
          const col = i % 2; // 0 = left edge of ribbon, 1 = right edge
          const row = Math.floor(i / 2);
          const vNorm = row / 20; // 0 at bottom of flame, 1 at top of vortex funnel

          // Realistic 1g Earth buoyant flame silhouette (fat, curvy bulbous belly at the bottom, tapering thin & wispy at the top)
          const bellyCurve = Math.pow(Math.sin(Math.min(1, vNorm * 1.45) * Math.PI * 0.5), 0.72) * Math.pow(1 - vNorm, 1.48) * 1.85 + (1 - vNorm) * 0.28;
          const funnelRadius = (0.03 + bellyCurve * ud.radiusScale * 2.35) * spreadScale;
          const swirlAngle = ud.angleOffset + vNorm * 3.8 - t * ud.speed;
          // Curvy S-wave buoyant lick as the flame rises and narrows
          const waveSwayX = Math.sin(vNorm * 5.2 - t * 4.8 + ud.angleOffset * 0.5) * 0.14 * Math.pow(vNorm, 1.25);
          const waveSwayZ = Math.cos(vNorm * 4.6 - t * 4.2 + ud.angleOffset * 0.5) * 0.10 * Math.pow(vNorm, 1.25);
          // Ribbon width is fat across the lower belly and pinches to a fine tip at the top
          const ribbonHalfWidth = (0.22 * Math.pow(1 - vNorm, 1.2) + 0.012) * spreadScale;
          const sideSign = col === 0 ? -1 : 1;

          const cx = Math.cos(swirlAngle) * funnelRadius + waveSwayX;
          const cz = Math.sin(swirlAngle) * funnelRadius + waveSwayZ;
          const perpX = -Math.sin(swirlAngle) * ribbonHalfWidth * sideSign;
          const perpZ = Math.cos(swirlAngle) * ribbonHalfWidth * sideSign;
          const vy = baseY + vNorm * (2.25 * ud.heightScale * spreadScale);

          pos.setXYZ(i, cx + perpX, vy, cz + perpZ);
        }
        pos.needsUpdate = true;
      }

      // Move white-hot core glow with the fat lower belly of the flame
      if (coreGlowSprite) {
        coreGlowSprite.position.y = burnFrontY + 0.34;
        const pulse = (1.75 + flameSpreadProgress * 0.42) + Math.sin(t * 12) * 0.08;
        coreGlowSprite.scale.set(pulse * 1.18, pulse * 1.05, 1);
      }

      // Swirl Ember Sparks hugging the fat lower belly and converging into the thin upper plume tip
      if (emberParticles) {
        const ePos = emberParticles.geometry.attributes.position;
        const seeds = emberParticles.geometry.userData.seeds;
        for (let i = 0; i < ePos.count; i++) {
          let ang = seeds[i * 3] + t * 3.8;
          let hProg = seeds[i * 3 + 1] + 0.012;
          if (hProg > 1.0) hProg -= 1.0;
          seeds[i * 3 + 1] = hProg;

          const baseRad = seeds[i * 3 + 2];
          const emberBelly = Math.sin(Math.min(1, hProg * 1.35) * Math.PI * 0.5) * Math.pow(1 - hProg, 1.25) * 1.6 + 0.06;
          const funnelR = (emberBelly * baseRad * 1.35) * spreadScale;
          const tipSway = Math.sin(hProg * 5.0 - t * 4.8) * 0.12 * hProg;
          ePos.setX(i, Math.cos(ang) * funnelR + tipSway);
          ePos.setY(i, burnFrontY + hProg * (2.55 * spreadScale));
          ePos.setZ(i, Math.sin(ang) * funnelR);
        }
        ePos.needsUpdate = true;
      }

      if (matchRenderer && matchScene && matchCamera) {
        matchRenderer.render(matchScene, matchCamera);
      }
    }

    // ============================================================================
    // 3-STAGE CHOREOGRAPHY CONTROLLER
    // ============================================================================
    function startWelcomeChoreography() {
      clearWelcomeTimers();
      welcomeActive = true;
      flameSpreadProgress = 0.0;

      const overlay = document.getElementById('welcomeOverlay');
      const titleBlock = document.getElementById('welcomeTitleBlock');
      const pointersPanel = document.getElementById('welcomePointersPanel');
      const bottomBar = document.getElementById('welcomeBottomBar');
      const stageInd = document.getElementById('welcomeStageIndicator');
      const shell = document.getElementById('appShellWrapper');

      if (overlay) overlay.classList.remove('welcome-hidden');
      if (shell) {
        shell.classList.add('shell-pre-enter');
        shell.classList.remove('shell-active');
      }

      targetMatchX = 0.0;
      if (titleBlock) titleBlock.classList.remove('zoom-past-face');
      if (pointersPanel) {
        pointersPanel.classList.remove('pointers-visible', 'pointers-exit-right');
        pointersPanel.classList.add('pointers-hidden');
      }
      document.querySelectorAll('#welcomePointersList .pointer-item').forEach(el => {
        el.classList.remove('pointer-in');
      });
      if (bottomBar) {
        bottomBar.classList.remove('bottom-visible');
        bottomBar.classList.add('bottom-hidden');
      }
      if (stageInd) stageInd.textContent = 'Stage 1 • Matchstick Ignition & Spread';

      if (!matchRenderer) {
        initMatchstick3D();
      } else {
        cancelAnimationFrame(matchAnimId);
        animateMatchstick3D();
      }

      // Stage 1 -> After 1.6s, zoom heading straight toward viewer's face
      welcomeTimers.push(setTimeout(() => {
        if (titleBlock) titleBlock.classList.add('zoom-past-face');
        if (stageInd) stageInd.textContent = 'Stage 1 • Spreading Vortex Flame';
      }, 1600));

      // Stage 2 -> After 2.8s, glide matchstick to the LEFT & fade in pure floating typography on the RIGHT
      welcomeTimers.push(setTimeout(() => {
        const isDesktop = (window.innerWidth || 1024) >= 1024;
        targetMatchX = isDesktop ? -1.42 : 0.0;
        if (stageInd) stageInd.textContent = 'Stage 2 • Mission Overview';

        if (pointersPanel) {
          pointersPanel.classList.remove('pointers-hidden', 'pointers-exit-right');
          pointersPanel.classList.add('pointers-visible');
        }

        const items = document.querySelectorAll('#welcomePointersList .pointer-item');
        items.forEach((item, idx) => {
          welcomeTimers.push(setTimeout(() => {
            item.classList.add('pointer-in');
          }, idx * 200));
        });

        welcomeTimers.push(setTimeout(() => {
          if (bottomBar) {
            bottomBar.classList.remove('bottom-hidden');
            bottomBar.classList.add('bottom-visible');
          }
        }, items.length * 200 + 150));
      }, 2800));
    }

    function replayWelcomeSequence() {
      startWelcomeChoreography();
    }

    function openWelcomeFromDashboard() {
      switchView('overview');
      startWelcomeChoreography();
    }

    function triggerStage3CurtainSplit(skipFast = false) {
      clearWelcomeTimers();
      const overlay = document.getElementById('welcomeOverlay');
      const titleBlock = document.getElementById('welcomeTitleBlock');
      const pointersPanel = document.getElementById('welcomePointersPanel');
      const bottomBar = document.getElementById('welcomeBottomBar');
      const stageInd = document.getElementById('welcomeStageIndicator');
      const shell = document.getElementById('appShellWrapper');

      if (stageInd) stageInd.textContent = 'Stage 3 • Opening Overview Archive';
      if (titleBlock) titleBlock.classList.add('zoom-past-face');

      targetMatchX = -6.5;
      if (pointersPanel) {
        pointersPanel.classList.remove('pointers-visible');
        pointersPanel.classList.add('pointers-exit-right');
      }
      if (bottomBar) {
        bottomBar.classList.remove('bottom-visible');
        bottomBar.classList.add('bottom-hidden');
      }

      const seqBlockIds = [
        'seq-block-hero',
        'seq-block-mission',
        'seq-block-kpis',
        'seq-block-domains'
      ];
      if (!skipFast) {
        seqBlockIds.forEach(id => {
          const el = document.getElementById(id);
          if (el) el.classList.add('seq-waiting');
        });
      }

      const splitDelay = skipFast ? 150 : 600;
      setTimeout(() => {
        if (overlay) overlay.classList.add('welcome-hidden');
        if (shell) {
          shell.classList.remove('shell-pre-enter');
          shell.classList.add('shell-active');
        }
        setTimeout(() => {
          welcomeActive = false;
          if (matchAnimId) cancelAnimationFrame(matchAnimId);
        }, 650);

        if (skipFast) {
          seqBlockIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove('seq-waiting', 'seq-typing-active');
          });
        } else {
          runSequentialBlockBuildWithTyping(seqBlockIds);
        }
      }, splitDelay);
    }

    function typeTextElement(el, speedMs = 12) {
      return new Promise(resolve => {
        if (!el) return resolve();
        const fullText = el.getAttribute('data-fulltext') || el.textContent.trim();
        el.setAttribute('data-fulltext', fullText);
        el.textContent = '';
        el.classList.add('typewriter-cursor');
        let idx = 0;
        const step = Math.max(1, Math.ceil(fullText.length / 26));
        const timer = setInterval(() => {
          idx += step;
          if (idx >= fullText.length) {
            el.textContent = fullText;
            el.classList.remove('typewriter-cursor');
            clearInterval(timer);
            resolve();
          } else {
            el.textContent = fullText.slice(0, idx);
          }
        }, speedMs);
      });
    }

    async function runSequentialBlockBuildWithTyping(blockIds) {
      for (let i = 0; i < blockIds.length; i++) {
        const block = document.getElementById(blockIds[i]);
        if (!block) continue;
        block.classList.remove('seq-waiting');
        block.classList.add('seq-typing-active');

        const heading = block.querySelector('h1, h2, h3');
        const sub = block.querySelector('p');
        if (heading && heading.children.length === 0) {
          await typeTextElement(heading, 11);
        }
        if (sub && sub.children.length === 0) {
          await typeTextElement(sub, 9);
        } else {
          await new Promise(r => setTimeout(r, 180));
        }
        block.classList.remove('seq-typing-active');
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      initApp();
      startWelcomeChoreography();
    });
