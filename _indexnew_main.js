const CV_TEMPLATES = [
      {
        id: 'executive-dark',
        name: 'Executive Dark',
        desc: 'Bold dark sidebar with gold accents. Perfect for senior professionals and executives.',
        badge: 'exec',
        theme: {
          layoutDirection: 'sidebar-left',
          headerStyle: 'clean-text',
          photoShape: 'circle',
          backgroundColor: '#ffffff',
          primaryAreaColor: '#0f172a',
          primaryTextColor: '#f1f5f9',
          mainTextColor: '#1e293b',
          secondaryTextColor: '#64748b',
          accentColor: '#f59e0b',
          headingFont: 'Playfair Display',
          bodyFont: 'Source Sans 3'
        },
        previewColors: ['#0f172a','#f59e0b','#ffffff']
      },
      {
        id: 'modern-vibrant',
        name: 'Modern Vibrant',
        desc: 'Clean header-top layout with a vivid teal palette and contemporary typography.',
        badge: 'modern',
        theme: {
          layoutDirection: 'header-top',
          headerStyle: 'solid-box',
          photoShape: 'rounded',
          backgroundColor: '#ffffff',
          primaryAreaColor: '#0d9488',
          primaryTextColor: '#f0fdfa',
          mainTextColor: '#1e293b',
          secondaryTextColor: '#64748b',
          accentColor: '#14b8a6',
          headingFont: 'Outfit',
          bodyFont: 'Inter'
        },
        previewColors: ['#0d9488','#14b8a6','#ffffff']
      },
      {
        id: 'minimal-elegant',
        name: 'Minimal Elegant',
        desc: 'Refined single-column design with serif headings and a muted rose accent.',
        badge: 'modern',
        theme: {
          layoutDirection: 'single-column',
          headerStyle: 'underline',
          photoShape: 'circle',
          backgroundColor: '#fffbf5',
          primaryAreaColor: '#44403c',
          primaryTextColor: '#fafaf9',
          mainTextColor: '#292524',
          secondaryTextColor: '#78716c',
          accentColor: '#be123c',
          headingFont: 'DM Serif Display',
          bodyFont: 'DM Sans'
        },
        previewColors: ['#44403c','#be123c','#fffbf5']
      },
      {
        id: 'europass-classic',
        name: 'Europass Classic',
        desc: 'Official EU Europass-inspired format. Clean, structured, and internationally recognized.',
        badge: 'europass',
        theme: {
          layoutDirection: 'sidebar-left',
          headerStyle: 'underline',
          photoShape: 'square',
          backgroundColor: '#ffffff',
          primaryAreaColor: '#003399',
          primaryTextColor: '#ffffff',
          mainTextColor: '#1a1a2e',
          secondaryTextColor: '#4a4a68',
          accentColor: '#003399',
          headingFont: 'Roboto',
          bodyFont: 'Roboto'
        },
        previewColors: ['#003399','#003399','#ffffff']
      },
      {
        id: 'europass-modern',
        name: 'Europass Modern',
        desc: 'A modernized Europass variant with a fresh blue-gray palette and updated feel.',
        badge: 'europass',
        theme: {
          layoutDirection: 'sidebar-right',
          headerStyle: 'clean-text',
          photoShape: 'rounded',
          backgroundColor: '#f8fafc',
          primaryAreaColor: '#1e3a5f',
          primaryTextColor: '#e8edf2',
          mainTextColor: '#1e293b',
          secondaryTextColor: '#64748b',
          accentColor: '#2563eb',
          headingFont: 'Nunito Sans',
          bodyFont: 'Open Sans'
        },
        previewColors: ['#1e3a5f','#2563eb','#f8fafc']
      }
    ];
    function buildTplPreview(tpl) {
      let [c1, c2, c3] = tpl.previewColors;
      const layout = tpl.theme.layoutDirection;
      let previewHTML = '';
      const ov = getColorOverrides();
      c1 = ov.primaryAreaColor || c1;
      c2 = ov.accentColor || c2;
      c3 = ov.backgroundColor || c3;
      const badgeClass = tpl.badge === 'europass' ? 'tpl-badge-europass' : tpl.badge === 'exec' ? 'tpl-badge-exec' : 'tpl-badge-modern';
      const badgeLabel = tpl.badge === 'europass' ? 'Europass' : tpl.badge === 'exec' ? 'Executive' : 'Modern';
      if (layout === 'sidebar-left') {
        previewHTML = `<div style="display:flex;height:100%;">
          <div style="width:35%;background:${c1};padding:14px;box-sizing:border-box;">
            <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.2);margin:0 auto 10px;"></div>
            <div style="height:6px;background:rgba(255,255,255,0.3);border-radius:3px;margin-bottom:6px;width:80%;"></div>
            <div style="height:4px;background:rgba(255,255,255,0.15);border-radius:2px;margin-bottom:4px;width:60%;"></div>
            <div style="height:4px;background:rgba(255,255,255,0.15);border-radius:2px;margin-bottom:10px;width:70%;"></div>
            <div style="height:5px;background:rgba(255,255,255,0.25);border-radius:2px;margin-bottom:5px;width:50%;"></div>
            <div style="height:3px;background:rgba(255,255,255,0.12);border-radius:2px;margin-bottom:3px;width:70%;"></div>
            <div style="height:3px;background:rgba(255,255,255,0.12);border-radius:2px;width:55%;"></div>
          </div>
          <div style="flex:1;background:${c3};padding:14px;box-sizing:border-box;">
            <div style="height:10px;background:${c2};border-radius:3px;margin-bottom:4px;width:65%;"></div>
            <div style="height:5px;background:#cbd5e1;border-radius:2px;margin-bottom:12px;width:45%;"></div>
            <div style="height:6px;background:${c2};border-radius:2px;margin-bottom:6px;width:40%;opacity:0.7;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:90%;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:80%;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:10px;width:85%;"></div>
            <div style="height:6px;background:${c2};border-radius:2px;margin-bottom:6px;width:35%;opacity:0.7;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:70%;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;width:60%;"></div>
          </div>
        </div>`;
      } else if (layout === 'sidebar-right') {
        previewHTML = `<div style="display:flex;height:100%;">
          <div style="flex:1;background:${c3};padding:14px;box-sizing:border-box;">
            <div style="height:10px;background:${c2};border-radius:3px;margin-bottom:4px;width:65%;"></div>
            <div style="height:5px;background:#cbd5e1;border-radius:2px;margin-bottom:12px;width:45%;"></div>
            <div style="height:6px;background:${c2};border-radius:2px;margin-bottom:6px;width:40%;opacity:0.7;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:90%;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:80%;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:10px;width:85%;"></div>
            <div style="height:6px;background:${c2};border-radius:2px;margin-bottom:6px;width:35%;opacity:0.7;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:70%;"></div>
          </div>
          <div style="width:35%;background:${c1};padding:14px;box-sizing:border-box;">
            <div style="width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,0.2);margin:0 auto 10px;"></div>
            <div style="height:6px;background:rgba(255,255,255,0.3);border-radius:3px;margin-bottom:6px;width:80%;"></div>
            <div style="height:4px;background:rgba(255,255,255,0.15);border-radius:2px;margin-bottom:4px;width:60%;"></div>
            <div style="height:4px;background:rgba(255,255,255,0.15);border-radius:2px;margin-bottom:10px;width:70%;"></div>
            <div style="height:5px;background:rgba(255,255,255,0.25);border-radius:2px;margin-bottom:5px;width:50%;"></div>
            <div style="height:3px;background:rgba(255,255,255,0.12);border-radius:2px;margin-bottom:3px;width:70%;"></div>
          </div>
        </div>`;
      } else if (layout === 'header-top') {
        previewHTML = `<div style="display:flex;flex-direction:column;height:100%;">
          <div style="background:${c1};padding:14px;display:flex;align-items:center;gap:12px;">
            <div style="width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,0.2);flex-shrink:0;"></div>
            <div style="flex:1;">
              <div style="height:8px;background:rgba(255,255,255,0.4);border-radius:3px;margin-bottom:4px;width:50%;"></div>
              <div style="height:4px;background:rgba(255,255,255,0.2);border-radius:2px;width:35%;"></div>
            </div>
          </div>
          <div style="display:flex;flex:1;">
            <div style="width:35%;background:rgba(0,0,0,0.02);padding:12px;box-sizing:border-box;border-right:1px solid #e2e8f0;">
              <div style="height:5px;background:${c2};border-radius:2px;margin-bottom:5px;width:50%;opacity:0.7;"></div>
              <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:80%;"></div>
              <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:60%;"></div>
            </div>
            <div style="flex:1;background:${c3};padding:12px;box-sizing:border-box;">
              <div style="height:5px;background:${c2};border-radius:2px;margin-bottom:5px;width:40%;opacity:0.7;"></div>
              <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:90%;"></div>
              <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:75%;"></div>
              <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:8px;width:80%;"></div>
              <div style="height:5px;background:${c2};border-radius:2px;margin-bottom:5px;width:35%;opacity:0.7;"></div>
              <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:85%;"></div>
            </div>
          </div>
        </div>`;
      } else {
        previewHTML = `<div style="display:flex;flex-direction:column;height:100%;">
          <div style="background:${c1};padding:14px;text-align:center;">
            <div style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.2);margin:0 auto 6px;"></div>
            <div style="height:7px;background:rgba(255,255,255,0.4);border-radius:3px;margin:0 auto 4px;width:40%;"></div>
            <div style="height:4px;background:rgba(255,255,255,0.2);border-radius:2px;margin:0 auto;width:30%;"></div>
          </div>
          <div style="flex:1;background:${c3};padding:14px;">
            <div style="height:5px;background:${c2};border-radius:2px;margin-bottom:5px;width:40%;opacity:0.7;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:90%;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:80%;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:10px;width:85%;"></div>
            <div style="height:5px;background:${c2};border-radius:2px;margin-bottom:5px;width:35%;opacity:0.7;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;margin-bottom:3px;width:70%;"></div>
            <div style="height:3px;background:#e2e8f0;border-radius:2px;width:60%;"></div>
          </div>
        </div>`;
      }
      return `<div class="tpl-card" onclick="applyTemplate('${tpl.id}')">
        <div class="tpl-card-badge ${badgeClass}">${badgeLabel}</div>
        <div class="tpl-card-preview">${previewHTML}</div>
        <div class="tpl-card-info">
          <div class="tpl-card-name">${tpl.name}</div>
          <div class="tpl-card-desc">${tpl.desc}</div>
        </div>
      </div>`;
    }
    function getColorOverrides() {
      try { return JSON.parse(localStorage.getItem('cv_color_overrides') || '{}'); } catch(e) { return {}; }
    }
    function saveColorOverrides(overrides) {
      localStorage.setItem('cv_color_overrides', JSON.stringify(overrides));
      updateOverrideCountBadge();
    }
    function updateOverrideCountBadge() {
      const ov = getColorOverrides();
      const count = Object.keys(ov).length;
      const badge = document.getElementById('tplOverrideCount');
      if (badge) {
        badge.style.display = count > 0 ? 'inline' : 'none';
        badge.textContent = count + ' active';
      }
    }
    const FONT_OVERRIDE_STORAGE_KEY = 'cv_font_overrides';
    const DEFAULT_THEME_FONTS = { headingFont: 'Helvetica Neue', bodyFont: 'Arial' };
    let currentThemeTypography = { ...DEFAULT_THEME_FONTS };
    const HEADING_TEXT_SELECTOR = 'h1, h2, h3, .section-title, .job-title, .company-name';
    const BODY_TEXT_SELECTOR = '.summary-text, p, li, .contact-item, .contact-label, .date-location, .job-desc, .job-desc li, .job-desc span';
    function extractPrimaryFont(fontValue, fallback) {
      if (!fontValue) return fallback;
      const primary = fontValue.split(',')[0].replace(/["']/g, '').trim();
      return primary || fallback;
    }
    function syncThemeTypographyFromCV() {
      const cvNode = document.getElementById('cvToExport');
      if (!cvNode) return;
      const styles = getComputedStyle(cvNode);
      currentThemeTypography.headingFont = extractPrimaryFont(styles.getPropertyValue('--font-heading'), currentThemeTypography.headingFont || DEFAULT_THEME_FONTS.headingFont);
      currentThemeTypography.bodyFont = extractPrimaryFont(styles.getPropertyValue('--font-body'), currentThemeTypography.bodyFont || DEFAULT_THEME_FONTS.bodyFont);
    }
    function getFontOverrides() {
      try {
        const parsed = JSON.parse(localStorage.getItem(FONT_OVERRIDE_STORAGE_KEY) || '{}');
        return {
          headingFont: parsed.headingFont || '',
          bodyFont: parsed.bodyFont || '',
          headingScale: Number(parsed.headingScale) > 0 ? Number(parsed.headingScale) : 100,
          bodyScale: Number(parsed.bodyScale) > 0 ? Number(parsed.bodyScale) : 100
        };
      } catch (e) {
        return { headingFont: '', bodyFont: '', headingScale: 100, bodyScale: 100 };
      }
    }
    function saveFontOverrides(overrides) {
      localStorage.setItem(FONT_OVERRIDE_STORAGE_KEY, JSON.stringify(overrides));
      updateFontOverrideCountBadge();
    }
    function getDefaultFontState() {
      return {
        headingFont: currentThemeTypography.headingFont || DEFAULT_THEME_FONTS.headingFont,
        bodyFont: currentThemeTypography.bodyFont || DEFAULT_THEME_FONTS.bodyFont,
        headingScale: 100,
        bodyScale: 100
      };
    }
    function updateFontOverrideCountBadge() {
      const ov = getFontOverrides();
      const def = getDefaultFontState();
      let count = 0;
      if (ov.headingFont && ov.headingFont !== def.headingFont) count++;
      if (ov.bodyFont && ov.bodyFont !== def.bodyFont) count++;
      if ((ov.headingScale || 100) !== 100) count++;
      if ((ov.bodyScale || 100) !== 100) count++;
      const badge = document.getElementById('tplFontOverrideCount');
      if (badge) {
        badge.style.display = count > 0 ? 'inline' : 'none';
        badge.textContent = count + ' active';
      }
    }
    function ensureFontOptionExists(selectEl, fontName) {
      if (!selectEl || !fontName) return;
      const exists = Array.from(selectEl.options).some(opt => opt.value === fontName);
      if (exists) return;
      const opt = document.createElement('option');
      opt.value = fontName;
      opt.textContent = `${fontName} (Current)`;
      const firstGroup = selectEl.querySelector('optgroup');
      if (firstGroup) firstGroup.prepend(opt); else selectEl.prepend(opt);
    }
    function applyScopedFontSize(root, selector, scale) {
      const nodes = root.querySelectorAll(selector);
      nodes.forEach(node => node.style.removeProperty('font-size'));
      if (scale === 100) return;
      nodes.forEach(node => {
        const base = parseFloat(getComputedStyle(node).fontSize);
        if (Number.isFinite(base)) {
          node.style.fontSize = ((base * scale) / 100).toFixed(2) + 'px';
        }
      });
    }
    function applyFontOverridesToCV() {
      const cvNode = document.getElementById('cvToExport');
      if (!cvNode) return;
      syncThemeTypographyFromCV();
      const ov = getFontOverrides();
      const headingFont = ov.headingFont || currentThemeTypography.headingFont || DEFAULT_THEME_FONTS.headingFont;
      const bodyFont = ov.bodyFont || currentThemeTypography.bodyFont || DEFAULT_THEME_FONTS.bodyFont;
      loadGoogleFonts(headingFont, bodyFont);
      cvNode.style.setProperty('--font-heading', `"${headingFont}", sans-serif`);
      cvNode.style.setProperty('--font-body', `"${bodyFont}", sans-serif`);
      applyScopedFontSize(cvNode, HEADING_TEXT_SELECTOR, ov.headingScale || 100);
      applyScopedFontSize(cvNode, BODY_TEXT_SELECTOR, ov.bodyScale || 100);
      updateFontOverrideCountBadge();
    }
    function loadFontOverridesIntoUI() {
      const ov = getFontOverrides();
      const familyScope = document.getElementById('tplFontFamilyScope');
      const familySelect = document.getElementById('tplFontFamilySelect');
      const sizeScope = document.getElementById('tplFontSizeScope');
      const sizeRange = document.getElementById('tplFontSizeRange');
      const sizeValue = document.getElementById('tplFontSizeValue');
      if (!familyScope || !familySelect || !sizeScope || !sizeRange || !sizeValue) return;
      const headingFont = ov.headingFont || currentThemeTypography.headingFont || DEFAULT_THEME_FONTS.headingFont;
      const bodyFont = ov.bodyFont || currentThemeTypography.bodyFont || DEFAULT_THEME_FONTS.bodyFont;
      ensureFontOptionExists(familySelect, headingFont);
      ensureFontOptionExists(familySelect, bodyFont);
      familyScope.value = headingFont === bodyFont ? 'all' : 'heading';
      familySelect.value = headingFont;
      const headingScale = ov.headingScale || 100;
      const bodyScale = ov.bodyScale || 100;
      const sharedScale = headingScale === bodyScale;
      sizeScope.value = sharedScale ? 'all' : 'heading';
      sizeRange.value = String(headingScale);
      sizeValue.textContent = sizeRange.value + '%';
      updateFontPreview();
      updateFontOverrideCountBadge();
    }
    function updateFontPreview() {
      const familyScope = document.getElementById('tplFontFamilyScope');
      const familySelect = document.getElementById('tplFontFamilySelect');
      const sizeScope = document.getElementById('tplFontSizeScope');
      const sizeRange = document.getElementById('tplFontSizeRange');
      const sizeValue = document.getElementById('tplFontSizeValue');
      const headingEl = document.getElementById('tplFontPreviewHeading');
      const bodyEl = document.getElementById('tplFontPreviewBody');
      if (!familyScope || !familySelect || !sizeScope || !sizeRange || !sizeValue || !headingEl || !bodyEl) return;
      const ov = getFontOverrides();
      const selectedFont = familySelect.value || currentThemeTypography.headingFont || DEFAULT_THEME_FONTS.headingFont;
      const selectedScale = Number(sizeRange.value) || 100;
      sizeValue.textContent = selectedScale + '%';
      const headingFont = familyScope.value === 'body'
        ? (ov.headingFont || currentThemeTypography.headingFont || DEFAULT_THEME_FONTS.headingFont)
        : selectedFont;
      const bodyFont = familyScope.value === 'heading'
        ? (ov.bodyFont || currentThemeTypography.bodyFont || DEFAULT_THEME_FONTS.bodyFont)
        : selectedFont;
      const headingScale = sizeScope.value === 'body' ? (ov.headingScale || 100) : selectedScale;
      const bodyScale = sizeScope.value === 'heading' ? (ov.bodyScale || 100) : selectedScale;
      headingEl.style.fontFamily = `"${headingFont}", sans-serif`;
      bodyEl.style.fontFamily = `"${bodyFont}", sans-serif`;
      headingEl.style.fontSize = ((20 * headingScale) / 100).toFixed(2) + 'px';
      bodyEl.style.fontSize = ((14 * bodyScale) / 100).toFixed(2) + 'px';
      loadGoogleFonts(headingFont, bodyFont);
    }
    function initFontOverrideInputs() {
      const familyScope = document.getElementById('tplFontFamilyScope');
      const familySelect = document.getElementById('tplFontFamilySelect');
      const sizeScope = document.getElementById('tplFontSizeScope');
      const sizeRange = document.getElementById('tplFontSizeRange');
      if (!familyScope || !familySelect || !sizeScope || !sizeRange) return;
      if (familyScope.dataset.boundFontOverride === '1') return;
      familyScope.dataset.boundFontOverride = '1';
      [familyScope, familySelect, sizeScope].forEach(el => el.addEventListener('change', updateFontPreview));
      sizeRange.addEventListener('input', updateFontPreview);
      updateFontPreview();
    }
    function applyFontOverridesNow() {
      const familyScope = document.getElementById('tplFontFamilyScope');
      const familySelect = document.getElementById('tplFontFamilySelect');
      const sizeScope = document.getElementById('tplFontSizeScope');
      const sizeRange = document.getElementById('tplFontSizeRange');
      if (!familyScope || !familySelect || !sizeScope || !sizeRange) return;
      const ov = getFontOverrides();
      const selectedFont = familySelect.value || currentThemeTypography.headingFont || DEFAULT_THEME_FONTS.headingFont;
      const selectedScale = Number(sizeRange.value) || 100;
      if (familyScope.value === 'all') {
        ov.headingFont = selectedFont;
        ov.bodyFont = selectedFont;
      } else if (familyScope.value === 'heading') {
        ov.headingFont = selectedFont;
      } else {
        ov.bodyFont = selectedFont;
      }
      if (sizeScope.value === 'all') {
        ov.headingScale = selectedScale;
        ov.bodyScale = selectedScale;
      } else if (sizeScope.value === 'heading') {
        ov.headingScale = selectedScale;
      } else {
        ov.bodyScale = selectedScale;
      }
      saveFontOverrides(ov);
      applyFontOverridesToCV();
      Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Font overrides applied', showConfirmButton: false, timer: 1400, timerProgressBar: true });
    }
    function resetFontOverridesToDefault() {
      localStorage.removeItem(FONT_OVERRIDE_STORAGE_KEY);
      loadFontOverridesIntoUI();
      applyFontOverridesToCV();
      Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Font settings reset to defaults', showConfirmButton: false, timer: 1500, timerProgressBar: true });
    }
    function clearSingleOverride(key, btn) {
      const ov = getColorOverrides();
      delete ov[key];
      saveColorOverrides(ov);
      const wrapper = btn.parentElement;
      wrapper.querySelector('.tpl-color-clear').style.display = 'none';
      wrapper.querySelector('.tpl-color-hex').textContent = '';
      refreshTplGrid();
      Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'Override removed', showConfirmButton: false, timer: 1200, timerProgressBar: true });
    }
    function clearAllOverrides() {
      localStorage.removeItem('cv_color_overrides');
      document.querySelectorAll('.tpl-color-input').forEach(inp => {
        const wrapper = inp.parentElement;
        wrapper.querySelector('.tpl-color-clear').style.display = 'none';
        wrapper.querySelector('.tpl-color-hex').textContent = '';
      });
      updateOverrideCountBadge();
      refreshTplGrid();
      Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'All color overrides cleared', showConfirmButton: false, timer: 1500, timerProgressBar: true });
    }
    function applyColorOverridesToCV() {
      const ov = getColorOverrides();
      if (!Object.keys(ov).length) return;
      const cvNode = document.getElementById('cvToExport');
      const map = {
        backgroundColor: '--bg',
        primaryAreaColor: '--primary-area-bg',
        primaryTextColor: '--primary-area-text',
        mainTextColor: '--text-main',
        secondaryTextColor: '--text-muted',
        accentColor: '--accent'
      };
      Object.entries(ov).forEach(([k, v]) => {
        if (map[k]) cvNode.style.setProperty(map[k], v);
      });
    }
    function applyOverridesNow() {
      applyColorOverridesToCV();
      const count = Object.keys(getColorOverrides()).length;
      if (count > 0) {
        Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: count + ' color override' + (count > 1 ? 's' : '') + ' applied to CV', showConfirmButton: false, timer: 1500, timerProgressBar: true });
      } else {
        Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'No overrides set yet', showConfirmButton: false, timer: 1200, timerProgressBar: true });
      }
    }
    function loadOverridesIntoUI() {
      const ov = getColorOverrides();
      document.querySelectorAll('.tpl-color-input').forEach(inp => {
        const key = inp.getAttribute('data-key');
        const wrapper = inp.parentElement;
        const hexSpan = wrapper.querySelector('.tpl-color-hex');
        const clearBtn = wrapper.querySelector('.tpl-color-clear');
        if (ov[key]) {
          inp.value = ov[key];
          hexSpan.textContent = ov[key];
          clearBtn.style.display = 'inline';
        } else {
          hexSpan.textContent = '';
          clearBtn.style.display = 'none';
        }
      });
      updateOverrideCountBadge();
    }
    function initColorOverrideInputs() {
      document.querySelectorAll('.tpl-color-input').forEach(inp => {
        if (inp.dataset.boundColorOverride === '1') return;
        inp.dataset.boundColorOverride = '1';
        inp.addEventListener('input', function() {
          const key = this.getAttribute('data-key');
          const val = this.value;
          const wrapper = this.parentElement;
          wrapper.querySelector('.tpl-color-hex').textContent = val;
          wrapper.querySelector('.tpl-color-clear').style.display = 'inline';
          const ov = getColorOverrides();
          ov[key] = val;
          saveColorOverrides(ov);
          applyColorOverridesToCV();
          refreshTplGrid();
        });
      });
    }
    function refreshTplGrid() {
      const grid = document.getElementById('tplGrid');
      if (grid) grid.innerHTML = CV_TEMPLATES.map(t => buildTplPreview(t)).join('');
    }
    function updateAIOverrideNotice() {
      const ov = getColorOverrides();
      const notice = document.getElementById('aiOverrideNotice');
      if (!notice) return;
      const count = Object.keys(ov).length;
      if (count > 0) {
        notice.style.display = 'block';
        const names = { backgroundColor:'Background', primaryAreaColor:'Sidebar BG', primaryTextColor:'Sidebar Text', mainTextColor:'Main Text', secondaryTextColor:'Muted Text', accentColor:'Accent' };
        const list = Object.keys(ov).map(k => names[k] || k).join(', ');
        document.getElementById('aiOverrideDetail').textContent = 'Overriding: ' + list + '. AI will use these colors. Clear to let AI choose.';
      } else {
        notice.style.display = 'none';
      }
    }
    function showTemplatePicker() {
      const grid = document.getElementById('tplGrid');
      grid.innerHTML = CV_TEMPLATES.map(t => buildTplPreview(t)).join('');
      loadOverridesIntoUI();
      initColorOverrideInputs();
      loadFontOverridesIntoUI();
      initFontOverrideInputs();
      updateFontPreview();
      document.getElementById('tplPickerOverlay').classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeTemplatePicker() {
      document.getElementById('tplPickerOverlay').classList.remove('active');
      document.body.style.overflow = '';
    }
    function applyTemplate(id) {
      const tpl = CV_TEMPLATES.find(t => t.id === id);
      if (!tpl) return;
      applyAITheme(tpl.theme);
      saveCVState(tpl.theme);
      closeTemplatePicker();
      if (window.matchMedia('(max-width: 820px)').matches) showMobileViewAfterAction();
    }
    function saveCVState(theme) {
      try {
        const cvNode = document.getElementById('cvToExport');
        const img = cvNode.querySelector('#profileImg');
        let origSrc = null;
        if (img && img.src && img.src.startsWith('data:')) {
          origSrc = img.src;
          img.src = 'safeer.png';
        }
        localStorage.setItem('cv_saved_html', cvNode.innerHTML);
        if (img && origSrc) img.src = origSrc;
        if (theme) localStorage.setItem('cv_saved_theme', JSON.stringify(theme));
        localStorage.setItem('cv_saved_layout', cvNode.getAttribute('data-layout') || 'sidebar-left');
        const classes = [...cvNode.classList].filter(c => c.startsWith('style-'));
        if (classes.length) localStorage.setItem('cv_saved_style', classes[0]);
      } catch(e) { console.warn('Could not save CV state', e); }
    }
    function restoreProfilePhoto() {
      const savedPhoto = localStorage.getItem('cv_profile_photo');
      if (!savedPhoto) return;
      document.querySelectorAll('#profileImg').forEach(img => {
        img.src = savedPhoto;
        img.removeAttribute('onerror');
      });
      document.querySelectorAll('#photoPlaceholder').forEach(ph => {
        ph.style.display = 'none';
      });
    }
    document.addEventListener("DOMContentLoaded", () => {
      const savedText = localStorage.getItem("cv_raw_text");
      if (savedText) document.getElementById("aiTextInput").value = savedText;
      const savedHTML = localStorage.getItem('cv_saved_html');
      if (savedHTML) {
        const cvNode = document.getElementById('cvToExport');
        cvNode.innerHTML = savedHTML;
        const savedTheme = JSON.parse(localStorage.getItem('cv_saved_theme') || 'null');
        if (savedTheme) {
          applyAITheme(savedTheme);
        } else {
          const savedLayout = localStorage.getItem('cv_saved_layout') || 'sidebar-left';
          applyLayoutStructure(savedLayout);
        }
      } else {
        applyLayoutStructure("sidebar-left");
      }
      restoreProfilePhoto();
      const pb = document.getElementById('cvToExport').querySelector('#photoBlock');
      if (pb) {
        pb.setAttribute('onclick', "handlePhotoBlockClick(event)");
        if (!pb.querySelector('#photoCameraInput')) {
          const ci = document.createElement('input');
          ci.type = 'file'; ci.accept = 'image/*'; ci.capture = 'environment';
          ci.id = 'photoCameraInput'; ci.onchange = loadPhoto; ci.style.display = 'none';
          pb.appendChild(ci);
        }
      }
      const pc = document.getElementById("aiPrimaryColor");
      const sc = document.getElementById("aiSecondaryColor");
      pc.addEventListener("input", () => document.getElementById("aiPrimaryColorHex").textContent = pc.value);
      sc.addEventListener("input", () => document.getElementById("aiSecondaryColorHex").textContent = sc.value);
      applyColorOverridesToCV();
      syncThemeTypographyFromCV();
      initFontOverrideInputs();
      loadFontOverridesIntoUI();
      applyFontOverridesToCV();
      setTimeout(() => restoreProfilePhoto(), 500);
      let _autoSaveTimer = null;
      let _autoSaveReady = false;
      const cvEl = document.getElementById('cvToExport');
      setTimeout(() => {
        _autoSaveReady = true;
        saveCVState();
      }, 2000);
      cvEl.addEventListener('input', () => {
        if (!_autoSaveReady) return;
        clearTimeout(_autoSaveTimer);
        _autoSaveTimer = setTimeout(() => saveCVState(), 1000);
      });
      const _mo = new MutationObserver(() => {
        if (!_autoSaveReady) return;
        clearTimeout(_autoSaveTimer);
        _autoSaveTimer = setTimeout(() => saveCVState(), 1000);
      });
      _mo.observe(cvEl, { childList: true, subtree: true });
      initializeMobileRoute();
      window.addEventListener('resize', () => {
        if (!isMobileViewport()) return;
        const chooser = document.getElementById('mobileRouteChooser');
        if (!getMobileRoute() && chooser && !chooser.classList.contains('active')) openRouteChooser(false);
      });
    });
    function _scaleSwalFullscreen() {
      const popup = Swal.getPopup();
      if (!popup) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scale = vw / (screen.availWidth || screen.width || 375);
      if (scale < 1.2) return;
      popup.style.cssText = 'width:' + vw + 'px!important;max-width:' + vw + 'px!important;height:' + vh + 'px!important;max-height:' + vh + 'px!important;margin:0!important;padding:' + (20 * scale) + 'px!important;border-radius:0!important;display:flex!important;flex-direction:column!important;justify-content:space-between!important;align-items:center!important;box-sizing:border-box!important;overflow:hidden!important;';
      const container = popup.closest('.swal2-container');
      if (container) container.style.cssText = 'padding:0!important;align-items:flex-start!important;justify-content:flex-start!important;';
      const titleEl = popup.querySelector('.swal2-title');
      if (titleEl) titleEl.style.cssText = 'font-size:' + (7 * scale) + 'vw!important;padding:0!important;margin:0 0 ' + (2 * scale) + 'vw 0!important;';
      const htmlEl = popup.querySelector('.swal2-html-container');
      if (htmlEl) htmlEl.style.cssText = 'font-size:' + (4.5 * scale) + 'vw!important;flex:1!important;display:flex!important;align-items:center!important;justify-content:center!important;margin:0!important;overflow:hidden!important;width:100%!important;';
      const actionsEl = popup.querySelector('.swal2-actions');
      if (actionsEl) actionsEl.style.cssText = 'width:100%!important;gap:' + (3 * scale) + 'vw!important;margin:' + (2 * scale) + 'vw 0 0 0!important;flex-wrap:nowrap!important;';
      popup.querySelectorAll('.swal2-actions button').forEach(el => {
        el.style.cssText = 'font-size:' + (5 * scale) + 'vw!important;padding:' + (3.5 * scale) + 'vw ' + (4 * scale) + 'vw!important;border-radius:' + (3 * scale) + 'vw!important;flex:1!important;min-height:0!important;';
      });
      popup.querySelectorAll('.swal2-html-container button').forEach(el => {
        el.style.fontSize = (5 * scale) + 'vw';
        el.style.padding = (4 * scale) + 'vw';
        el.style.borderRadius = (3 * scale) + 'vw';
      });
      popup.querySelectorAll('.swal2-html-container p').forEach(el => {
        el.style.fontSize = (4.5 * scale) + 'vw';
        el.style.marginBottom = (5 * scale) + 'vw';
      });
      popup.querySelectorAll('.swal2-html-container > div').forEach(el => {
        el.style.gap = (4 * scale) + 'vw';
      });
    }
    function handlePhotoBlockClick(event) {
      if (!event.target.classList.contains('control-btn') && event.target.tagName !== 'INPUT') {
        pickPhoto();
      }
    }
    function pickPhoto() {
      if (!window.matchMedia('(max-width: 820px)').matches) {
        const inp = document.getElementById('cvToExport').querySelector('#photoInput') || document.getElementById('photoInput');
        if (inp) inp.click();
        return;
      }
      Swal.fire({
        title: 'Upload Photo',
        html: '<p style="margin-bottom:20px;">Choose how you\'d like to add your photo</p><div style="display:flex;flex-direction:column;gap:16px;width:100%;"><button id="swalCamBtn" style="width:100%;padding:16px;font-size:18px;border:none;border-radius:12px;background:#3b82f6;color:#fff;cursor:pointer;font-weight:600;">📷 Camera</button><button id="swalGalBtn" style="width:100%;padding:16px;font-size:18px;border:none;border-radius:12px;background:#8b5cf6;color:#fff;cursor:pointer;font-weight:600;">🖼️ Gallery</button><button id="swalCanBtn" style="width:100%;padding:14px;font-size:16px;border:2px solid #e2e8f0;border-radius:12px;background:#fff;color:#64748b;cursor:pointer;font-weight:500;">Cancel</button></div>',
        showConfirmButton: false,
        showCancelButton: false,
        customClass: { container: 'swal2-fullscreen-mobile' },
        didOpen: () => {
          _scaleSwalFullscreen();
          document.getElementById('swalCamBtn').addEventListener('click', () => { Swal.close(); setTimeout(() => openCameraCapture(), 300); });
          document.getElementById('swalGalBtn').addEventListener('click', () => {
            Swal.close();
            setTimeout(() => {
              const inp = document.getElementById('cvToExport').querySelector('#photoInput') || document.getElementById('photoInput');
              if (inp) inp.click();
            }, 300);
          });
          document.getElementById('swalCanBtn').addEventListener('click', () => Swal.close());
        },
      });
    }
    function openCameraCapture() {
      let stream = null;
      Swal.fire({
        title: 'Take Photo',
        html: '<div style="text-align:center;"><video id="camVideo" autoplay playsinline style="width:100%;border-radius:12px;background:#000;"></video></div>',
        showCancelButton: true,
        confirmButtonText: '📸 Capture',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#3b82f6',
        customClass: { container: 'swal2-fullscreen-mobile' },
        didOpen: () => {
          _scaleSwalFullscreen();
          navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 640 } } })
            .then(s => {
              stream = s;
              const video = document.getElementById('camVideo');
              if (video) { video.srcObject = s; video.play(); }
            })
            .catch(() => {
              Swal.update({ html: '<p style="color:#ef4444;">Camera access denied or not available.<br>Please allow camera permissions and try again.</p>' });
            });
        },
        willClose: () => {
          if (stream) stream.getTracks().forEach(t => t.stop());
        },
        preConfirm: () => {
          const video = document.getElementById('camVideo');
          if (!video || !video.videoWidth) return Swal.showValidationMessage('Camera not ready yet');
          const canvas = document.createElement('canvas');
          const size = Math.min(video.videoWidth, video.videoHeight, 400);
          canvas.width = size; canvas.height = size;
          const sx = (video.videoWidth - size) / 2, sy = (video.videoHeight - size) / 2;
          canvas.getContext('2d').drawImage(video, sx, sy, size, size, 0, 0, size, size);
          return canvas.toDataURL('image/jpeg', 0.85);
        }
      }).then(result => {
        if (result.isConfirmed && result.value) {
          const cvNode = document.getElementById('cvToExport');
          const image = cvNode.querySelector('#profileImg');
          const placeholder = cvNode.querySelector('#photoPlaceholder');
          if (image) image.src = result.value;
          if (placeholder) placeholder.style.display = 'none';
          try { localStorage.setItem('cv_profile_photo', result.value); } catch(e) {}
          saveCVState();
        }
      });
    }
    function resizeImage(file, maxSize, quality, callback) {
      const img = new Image();
      const reader = new FileReader();
      reader.onload = function (e) {
        img.onload = function () {
          let w = img.width, h = img.height;
          if (w > maxSize || h > maxSize) {
            if (w > h) { h = Math.round(h * maxSize / w); w = maxSize; }
            else { w = Math.round(w * maxSize / h); h = maxSize; }
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          callback(canvas.toDataURL('image/jpeg', quality));
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    function loadPhoto(event) {
      const cvNode = document.getElementById("cvToExport");
      const image = cvNode.querySelector("#profileImg");
      const placeholder = cvNode.querySelector("#photoPlaceholder");
      if (!image || !event.target.files || !event.target.files[0]) return;
      resizeImage(event.target.files[0], 400, 0.85, function (dataUrl) {
        image.src = dataUrl;
        if (placeholder) placeholder.style.display = "none";
        try {
          localStorage.setItem('cv_profile_photo', dataUrl);
        } catch (err) {
          console.warn('Photo storage failed', err);
        }
        saveCVState();
      });
    }
    function duplicateItem(btn) {
      const parent = btn.closest('.list-item-wrapper, .entry-block, .contact-item, .section-hover-target');
      if (parent) {
        const clone = parent.cloneNode(true);
        if (clone.id) clone.removeAttribute('id');
        parent.parentNode.insertBefore(clone, parent.nextSibling);
      }
    }
    function addContact() {
      const container = document.querySelector("#contactBlock .contact-info");
      if (!container) return;
      const div = document.createElement("div"); div.className = "contact-item";
      div.setAttribute("style", "position:relative; padding-right:50px;");
      div.innerHTML = `
        <span class="contact-label" contenteditable="true">New</span>
        <div contenteditable="true">Details</div>
        <div class="section-controls"><span class="btn-duplicate control-btn" onclick="duplicateItem(this)">⧉</span><span class="btn-delete control-btn" onclick="deleteItem(this)">×</span></div>
      `;
      container.appendChild(div);
    }
    function deleteItem(btn) { if (confirm("Remove this item?")) { const el = btn.closest(".list-item-wrapper, .contact-item, .entry-block, .section-hover-target, .section"); if (el) el.remove(); } }
    function addListItem(listId) {
      const ul = document.getElementById(listId);
      const li = document.createElement("li"); li.className = "list-item-wrapper";
      li.setAttribute("style", "position:relative; padding-right:50px;");
      li.innerHTML = `<span contenteditable="true">New Item</span> <div class="section-controls"><span class="btn-duplicate control-btn" onclick="duplicateItem(this)">⧉</span><span class="btn-delete control-btn" onclick="deleteItem(this)">×</span></div>`;
      ul.appendChild(li);
    }
    function addBullet(ulNode) {
      const li = document.createElement("li"); li.className = "list-item-wrapper";
      li.setAttribute("style", "position:relative; padding-right:50px;");
      li.innerHTML = `<span contenteditable="true">New detail...</span> <div class="section-controls"><span class="btn-duplicate control-btn" onclick="duplicateItem(this)">⧉</span><span class="btn-delete control-btn" onclick="deleteItem(this)">×</span></div>`;
      ulNode.appendChild(li);
    }
    function addNestedBullet(btn) {
      const section = btn.closest('.section-hover-target, .section');
      if (!section) return;
      let ul = section.querySelector('.job-desc ul') || section.querySelector('ul');
      if (!ul) {
        const descDiv = document.createElement('div'); descDiv.className = 'job-desc';
        ul = document.createElement('ul');
        descDiv.appendChild(ul);
        const entryBlock = section.querySelector('.entry-block');
        if (entryBlock) entryBlock.appendChild(descDiv);
        else section.appendChild(descDiv);
      }
      addBullet(ul);
    }
    function addExperience() {
      const section = document.getElementById("expBlock");
      const div = document.createElement("div"); div.className = "entry-block list-item-wrapper";
      div.setAttribute("style", "position:relative; padding-right:60px;");
      div.innerHTML = `
        <div class="section-controls"><span class="btn-duplicate control-btn" onclick="duplicateItem(this)">⧉</span><span class="btn-delete control-btn" onclick="deleteItem(this)">×</span></div>
        <div class="job-title" contenteditable="true">Job Title</div>
        <div class="company-name" contenteditable="true">Company Name</div>
        <span class="date-location" contenteditable="true">Dates | Location</span>
        <div class="job-desc"><ul>
            <li class="list-item-wrapper" style="position:relative; padding-right:50px;"><span contenteditable="true">Responsibility</span> <div class="section-controls"><span class="btn-duplicate control-btn" onclick="duplicateItem(this)">⧉</span><span class="btn-delete control-btn" onclick="deleteItem(this)">×</span></div></li>
        </ul></div>`;
      section.appendChild(div);
    }
    function addEducation() {
      const section = document.getElementById("eduBlock");
      const div = document.createElement("div"); div.className = "entry-block list-item-wrapper";
      div.setAttribute("style", "position:relative; padding-right:60px;");
      div.innerHTML = `
        <div class="section-controls"><span class="btn-duplicate control-btn" onclick="duplicateItem(this)">⧉</span><span class="btn-delete control-btn" onclick="deleteItem(this)">×</span></div>
        <div class="job-title" contenteditable="true">Degree Title</div>
        <div class="company-name" contenteditable="true">Institution Name</div>
        <span class="date-location" contenteditable="true">Dates | Grades</span>
        <p class="summary-text" style="margin-top:5px; font-size:14px;" contenteditable="true">Details/Majors...</p>`;
      section.appendChild(div);
    }
    function applyLayoutStructure(layoutName) {
      const cvNode = document.getElementById("cvToExport");
      const source = cvNode.querySelectorAll('[data-zone]').length === 0 ? document.getElementById("repo") : cvNode;
      const zones = Array.from(source.querySelectorAll('[data-zone]'));
      const sidebarBlocks = zones.filter(z => z.getAttribute("data-zone") === "sidebar");
      const mainBlocks = zones.filter(z => z.getAttribute("data-zone") === "main");
      const photoBlock = zones.find(z => z.id === "photoBlock");
      const headerBlock = zones.find(z => z.id === "headerBlock");
      const contactBlock = zones.find(z => z.id === "contactBlock");
      zones.forEach(b => { if (b && b.parentNode) b.parentNode.removeChild(b); });
      cvNode.innerHTML = "";
      cvNode.setAttribute("data-layout", layoutName);
      cvNode.classList.remove("layout-sidebar-left", "layout-sidebar-right", "layout-header-top", "layout-single-column");
      cvNode.classList.add("layout-" + layoutName);
      if (layoutName === 'sidebar-left' || layoutName === 'sidebar-right') {
        const sidebar = document.createElement("div"); sidebar.className = "sidebar primary-area";
        sidebarBlocks.forEach(b => sidebar.appendChild(b));
        const main = document.createElement("div"); main.className = "main-content";
        mainBlocks.forEach(b => main.appendChild(b));
        if (layoutName === 'sidebar-left') cvNode.append(sidebar, main);
        else cvNode.append(main, sidebar);
      }
      else if (layoutName === 'header-top') {
        const topBanner = document.createElement("div"); topBanner.className = "top-banner primary-area";
        const headerInfo = document.createElement("div"); headerInfo.className = "header-info";
        if (headerBlock) headerInfo.appendChild(headerBlock);
        if (contactBlock) headerInfo.appendChild(contactBlock);
        if (photoBlock) topBanner.appendChild(photoBlock);
        topBanner.appendChild(headerInfo);
        const bottomBody = document.createElement("div"); bottomBody.className = "bottom-body";
        const leftCol = document.createElement("div"); leftCol.className = "body-left";
        const rightCol = document.createElement("div"); rightCol.className = "body-right";
        sidebarBlocks.forEach(b => { if (b !== photoBlock && b !== contactBlock) leftCol.appendChild(b); });
        mainBlocks.forEach(b => { if (b !== headerBlock) rightCol.appendChild(b); });
        bottomBody.append(leftCol, rightCol);
        cvNode.append(topBanner, bottomBody);
      }
      else if (layoutName === 'single-column') {
        const topBanner = document.createElement("div"); topBanner.className = "top-banner primary-area";
        if (photoBlock) topBanner.appendChild(photoBlock);
        if (headerBlock) topBanner.appendChild(headerBlock);
        if (contactBlock) topBanner.appendChild(contactBlock);
        const main = document.createElement("div"); main.className = "main-content";
        mainBlocks.forEach(b => { if (b !== headerBlock) main.appendChild(b); });
        sidebarBlocks.forEach(b => { if (b !== photoBlock && b !== contactBlock) main.appendChild(b); });
        cvNode.append(topBanner, main);
      }
    }
    function loadGoogleFonts(heading, body) {
      const cleanFont = (f) => f.replace(/ /g, '+');
      const families = [...new Set([heading, body].filter(Boolean))]
        .map(f => `family=${cleanFont(f)}:wght@400;500;600;700;800`)
        .join('&');
      if (!families) return;
      const fontUrl = `https://fonts.googleapis.com/css2?${families}&display=swap`;
      let link = document.getElementById('ai-fonts-stylesheet');
      if (!link) { link = document.createElement('link'); link.id = 'ai-fonts-stylesheet'; link.rel = 'stylesheet'; document.head.appendChild(link); }
      link.href = fontUrl;
    }
    function applyAITheme(theme) {
      if (!theme) return;
      if (theme.layoutDirection) applyLayoutStructure(theme.layoutDirection);
      const cvNode = document.getElementById("cvToExport");
      const ov = getColorOverrides();
      cvNode.style.setProperty('--bg', ov.backgroundColor || theme.backgroundColor || '#ffffff');
      cvNode.style.setProperty('--primary-area-bg', ov.primaryAreaColor || theme.primaryAreaColor || '#1e293b');
      cvNode.style.setProperty('--primary-area-text', ov.primaryTextColor || theme.primaryTextColor || '#f8fafc');
      cvNode.style.setProperty('--text-main', ov.mainTextColor || theme.mainTextColor || '#334155');
      cvNode.style.setProperty('--text-muted', ov.secondaryTextColor || theme.secondaryTextColor || '#64748b');
      cvNode.style.setProperty('--accent', ov.accentColor || theme.accentColor || '#3b82f6');
      let radius = "50%";
      if (theme.photoShape === "square") radius = "0px";
      if (theme.photoShape === "rounded") radius = "15px";
      cvNode.style.setProperty('--photo-radius', radius);
      if (theme.headingFont) currentThemeTypography.headingFont = theme.headingFont;
      if (theme.bodyFont) currentThemeTypography.bodyFont = theme.bodyFont;
      const baseHeading = currentThemeTypography.headingFont || DEFAULT_THEME_FONTS.headingFont;
      const baseBody = currentThemeTypography.bodyFont || DEFAULT_THEME_FONTS.bodyFont;
      loadGoogleFonts(baseHeading, baseBody);
      cvNode.style.setProperty('--font-heading', `"${baseHeading}", sans-serif`);
      cvNode.style.setProperty('--font-body', `"${baseBody}", sans-serif`);
      cvNode.classList.remove("style-solid-box", "style-underline", "style-clean-text");
      cvNode.classList.add(theme.headerStyle ? `style-${theme.headerStyle}` : 'style-clean-text');
      applyFontOverridesToCV();
    }
    async function openAIModal() {
      document.body.style.overflow = "hidden";
      document.getElementById("aiModalOverlay").classList.add("active");
      document.getElementById("aiTextInput").focus();
      document.getElementById("aiStatus").style.display = 'none';
      updateAIOverrideNotice();
      try {
        const qText = document.getElementById("aiQuotaText");
        const qInd = document.getElementById("aiQuotaIndicator");
        const MAX_DAILY = 20;
        const todayStr = new Date().toLocaleDateString();
        let quotaData = JSON.parse(localStorage.getItem("ai_daily_quota") || '{"used": 0, "date": ""}');
        if (quotaData.date !== todayStr) {
          quotaData = { date: todayStr, used: 0 };
          localStorage.setItem("ai_daily_quota", JSON.stringify(quotaData));
        }
        const remaining = Math.max(0, MAX_DAILY - quotaData.used);
        const percent = Math.round((remaining / MAX_DAILY) * 100);
        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const diffMs = tomorrow - now;
        const diffHrs = Math.floor(diffMs / 3600000);
        const diffMins = Math.floor((diffMs % 3600000) / 60000);
        qText.textContent = `Daily Premium Quota: ${percent}% Remaining (Resets in ${diffHrs}h ${diffMins}m)`;
        if (percent > 50) qInd.style.background = "#10b981";
        else if (percent > 20) qInd.style.background = "#f59e0b";
        else qInd.style.background = "#ef4444";
      } catch (e) {
        console.error("Quota error:", e);
      }
    }
    function closeAIModal() {
      document.body.style.overflow = "";
      document.getElementById("aiModalOverlay").classList.remove("active");
    }
    let _currentAIMode = 'paste';
    let _wizardStep = 1;
    const _totalSteps = 6;
    function switchAIMode(mode) {
      _currentAIMode = mode;
      const pasteMode = document.getElementById('aiPasteMode');
      const stepMode = document.getElementById('aiStepMode');
      const pasteActions = document.getElementById('aiPasteActions');
      const tabPaste = document.getElementById('tabPasteGo');
      const tabStep = document.getElementById('tabStepByStep');
      document.getElementById('aiStatus').style.display = 'none';
      if (mode === 'paste') {
        pasteMode.style.display = 'block';
        stepMode.style.display = 'none';
        pasteActions.style.display = 'flex';
        tabPaste.style.color = '#ec4899';
        tabPaste.style.borderBottom = '3px solid #ec4899';
        tabStep.style.color = '#94a3b8';
        tabStep.style.borderBottom = '3px solid transparent';
      } else {
        pasteMode.style.display = 'none';
        stepMode.style.display = 'block';
        pasteActions.style.display = 'none';
        tabStep.style.color = '#ec4899';
        tabStep.style.borderBottom = '3px solid #ec4899';
        tabPaste.style.color = '#94a3b8';
        tabPaste.style.borderBottom = '3px solid transparent';
        _wizardStep = 1;
        updateWizardUI();
      }
    }
    function updateWizardUI() {
      document.querySelectorAll('.wizard-step').forEach(s => {
        s.style.display = parseInt(s.getAttribute('data-step')) === _wizardStep ? 'block' : 'none';
      });
      document.getElementById('stepPrevBtn').style.display = _wizardStep > 1 ? 'inline-flex' : 'none';
      const nextBtn = document.getElementById('stepNextBtn');
      if (_wizardStep === _totalSteps) {
        nextBtn.textContent = '🚀 Review & Generate';
        nextBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      } else if (_wizardStep === 5) {
        nextBtn.textContent = 'Next (Optional Step) →';
        nextBtn.style.background = 'linear-gradient(135deg, #ec4899, #8b5cf6)';
      } else {
        nextBtn.textContent = 'Next →';
        nextBtn.style.background = 'linear-gradient(135deg, #ec4899, #8b5cf6)';
      }
      document.getElementById('stepCounter').textContent = `Step ${_wizardStep} of ${_totalSteps}`;
      const fillPct = ((_wizardStep - 1) / (_totalSteps - 1)) * 100;
      document.getElementById('stepProgressFill').style.width = fillPct + '%';
      const activeTextarea = document.querySelector(`.wizard-step[data-step="${_wizardStep}"] .step-textarea`);
      if (activeTextarea) setTimeout(() => activeTextarea.focus(), 100);
    }
    function wizardNav(dir) {
      if (dir === 1 && _wizardStep < _totalSteps) {
        if (_wizardStep <= 4) {
          const ids = ['stepPersonal', 'stepEducation', 'stepExperience', 'stepSkills'];
          const val = document.getElementById(ids[_wizardStep - 1])?.value.trim();
          if (!val) {
            const labels = ['Personal Details', 'Education', 'Work Experience', 'Skills & Tools'];
            Swal.fire({ icon: 'warning', title: 'Hold on!', text: `Please fill in your ${labels[_wizardStep - 1]} before moving on.`, confirmButtonColor: '#ec4899' });
            return;
          }
        }
        _wizardStep++;
        updateWizardUI();
      } else if (dir === -1 && _wizardStep > 1) {
        _wizardStep--;
        updateWizardUI();
      } else if (dir === 1 && _wizardStep === _totalSteps) {
        showWizardReview();
      }
    }
    function showWizardReview() {
      const personal = document.getElementById('stepPersonal').value.trim();
      const education = document.getElementById('stepEducation').value.trim();
      const experience = document.getElementById('stepExperience').value.trim();
      const skills = document.getElementById('stepSkills').value.trim();
      const achievements = document.getElementById('stepAchievements').value.trim();
      const purpose = document.getElementById('stepPurpose').value.trim();
      if (!personal) {
        Swal.fire({ icon: 'warning', title: 'Missing Info', text: 'Please go back and fill in your Personal Details (Step 1).', confirmButtonColor: '#ec4899' });
        return;
      }
      let reviewHTML = '<div style="text-align:left;max-height:55vh;overflow-y:auto;font-size:14px;line-height:1.7;">';
      const sections = [
        { icon: '👤', title: 'Personal Details', val: personal },
        { icon: '🎓', title: 'Education', val: education },
        { icon: '💼', title: 'Work Experience', val: experience },
        { icon: '🛠️', title: 'Skills & Tools', val: skills },
        { icon: '🏆', title: 'Achievements & Extras', val: achievements },
        { icon: '🎯', title: 'CV Purpose', val: purpose, optional: true }
      ];
      sections.forEach(s => {
        if (s.val) {
          reviewHTML += `<div style="margin-bottom:16px;padding:14px;background:#f8fafc;border-radius:10px;border-left:4px solid ${s.optional ? '#f59e0b' : '#ec4899'};">`;
          reviewHTML += `<div style="font-weight:700;color:#1e293b;margin-bottom:6px;">${s.icon} ${s.title}</div>`;
          reviewHTML += `<div style="color:#475569;white-space:pre-wrap;">${s.val.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>`;
          reviewHTML += '</div>';
        } else if (!s.optional) {
          reviewHTML += `<div style="margin-bottom:16px;padding:14px;background:#fef2f2;border-radius:10px;border-left:4px solid #ef4444;">`;
          reviewHTML += `<div style="font-weight:700;color:#dc2626;">${s.icon} ${s.title} — Not provided</div>`;
          reviewHTML += '</div>';
        }
      });
      reviewHTML += '</div>';
      Swal.fire({
        title: '📋 Review Your Information',
        html: reviewHTML,
        width: 650,
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: '🚀 Generate CV',
        denyButtonText: '✏️ Edit',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#10b981',
        denyButtonColor: '#8b5cf6',
      }).then((result) => {
        if (result.isConfirmed) {
          generateFromWizard(personal, education, experience, skills, achievements, purpose);
        } else if (result.isDenied) {
          _wizardStep = 1;
          updateWizardUI();
        }
      });
    }
    async function generateFromWizard(personal, education, experience, skills, achievements, purpose) {
      let combined = `PERSONAL DETAILS:\n${personal}\n\nEDUCATION:\n${education}\n\nWORK EXPERIENCE:\n${experience}\n\nSKILLS & TOOLS:\n${skills}`;
      if (achievements) combined += `\n\nACHIEVEMENTS & EXTRAS:\n${achievements}`;
      if (purpose) combined += `\n\nCV PURPOSE / TARGET:\n${purpose}`;
      document.getElementById('aiTextInput').value = combined;
      switchAIMode('paste');
      if (purpose) document.getElementById('aiPurpose').value = purpose;
      await generateCVFromAI();
    }
    async function generateRandomCV() {
      const MAX_DAILY = 20;
      const todayStr = new Date().toLocaleDateString();
      let quotaData = JSON.parse(localStorage.getItem("ai_daily_quota") || '{"used": 0, "date": ""}');
      if (quotaData.date !== todayStr) {
        quotaData = { date: todayStr, used: 0 };
        localStorage.setItem("ai_daily_quota", JSON.stringify(quotaData));
      }
      const remaining = Math.max(0, MAX_DAILY - quotaData.used);
      const percent = Math.round((remaining / MAX_DAILY) * 100);
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diffMs = tomorrow - now;
      const diffHrs = Math.floor(diffMs / 3600000);
      const diffMins = Math.floor((diffMs % 3600000) / 60000);
      let indicatorColor = '#10b981';
      if (percent <= 20) indicatorColor = '#ef4444';
      else if (percent <= 50) indicatorColor = '#f59e0b';
      const result = await Swal.fire({
        title: '🎲 Generate Random CV',
        html: `<div style="text-align:left;font-size:14px;line-height:1.7;">
          <p>This will generate a <b>completely random, beautiful, and professional CV</b> with a unique fictional person, layout, colors, and typography on each click.</p>
          <div style="display:flex;align-items:center;gap:10px;padding:14px;background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;margin-top:12px;">
            <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${indicatorColor};flex-shrink:0;"></span>
            <div>
              <div style="font-weight:700;color:#1e293b;">Daily AI Quota: ${percent}% Remaining</div>
              <div style="font-size:12px;color:#64748b;">${remaining} of ${MAX_DAILY} generations left • Resets in ${diffHrs}h ${diffMins}m</div>
            </div>
          </div>
          ${remaining === 0 ? '<div style="margin-top:12px;padding:12px;background:#fef2f2;border-radius:8px;border:1px solid #fecaca;color:#dc2626;font-weight:600;">⚠️ You have used all your daily quota. Please wait for reset.</div>' : ''}
        </div>`,
        showCancelButton: true,
        confirmButtonText: remaining > 0 ? '🎲 Generate Now' : 'Quota Exhausted',
        confirmButtonColor: remaining > 0 ? '#06b6d4' : '#94a3b8',
        cancelButtonText: 'Cancel',
        width: 520,
      });
      if (!result.isConfirmed || remaining === 0) return;
      const randomProfiles = [
        "My name is Yasin Ullah. I'm a Full-Stack Developer and Software Engineer with deep experience in building production-grade web applications and SaaS platforms. I built SchoolSaaS, a multi-tenant school management system handling attendance, grades, HR, and financial reporting. I also created FleetCommand, a fleet management dashboard. Skills: PHP, JavaScript, HTML/CSS, MySQL, REST APIs, Python, Node.js, React, Next.js, Firebase, IndexedDB, AI Integration (Puter, Gemini). Languages: Pashto (Native), Urdu (Fluent), English (Fluent). I've converted web apps into Android APKs with native bridges for geolocation and device features.",
        "My name is Yasin Ullah. I'm a Mobile App Developer and Cross-Platform Engineer. I specialize in building hybrid mobile applications by converting web-based projects into native Android APKs using WebView with custom Kotlin bridges. I built NativeBridge.kt for device security status checks, geolocation tracking, and Settings API integration. Skills: Kotlin, Android SDK, Gradle, WebView, JavaScript bridges, HTML5, CSS3, PHP, Firebase Cloud Messaging, PWA, Service Workers. Languages: Pashto (Native), Urdu (Fluent), English (Fluent). Achievements: Successfully shipped production APKs with CI/CD pipelines and resolved complex dependency issues with KSP and Compose compiler.",
        "My name is Yasin Ullah. I'm an AI-Powered Product Builder and SaaS Architect. I design and develop intelligent web applications that leverage AI for content generation, design automation, and data analysis. I created Safeer, an AI CV Builder that generates unique professional resumes with dynamic layouts, color palettes, and typography using Puter AI and Gemini APIs. Skills: AI API Integration, Prompt Engineering, JavaScript, PHP, UI/UX Design, SweetAlert2, IndexedDB, html2canvas, jsPDF, Word document generation. Languages: Pashto (Native), Urdu (Fluent), English (Fluent). Built a step-by-step wizard CV generation flow with real-time preview and export to PDF/Word/Image.",
        "My name is Yasin Ullah. I'm a Frontend Developer and UI/UX Engineer passionate about crafting beautiful, responsive, and accessible user interfaces. I build pixel-perfect designs with modern CSS, glassmorphism effects, micro-animations, and dark mode support. My projects include interactive CV builders, school management dashboards, and fleet tracking interfaces. Skills: HTML5, CSS3, JavaScript ES6+, Responsive Design, CSS Grid/Flexbox, DataTables, Chart.js, Google Fonts, Mobile-First Design, Accessibility. Languages: Pashto (Native), Urdu (Fluent), English (Fluent). I focus on premium aesthetics with smooth transitions and dynamic hover effects.",
        "My name is Yasin Ullah. I'm a Backend Developer and Database Architect specializing in PHP-based monolithic applications and multi-tenant SaaS architectures. I designed the database schema and backend logic for SchoolSaaS2 handling schools, teachers, students, attendance, QR scanning, HR, financials, and reporting analytics. Skills: PHP, MySQL, Apache, .htaccess routing, session management, IndexedDB, REST APIs, JSON, Cloudflare tunnels, domain management, server administration. Languages: Pashto (Native), Urdu (Fluent), English (Fluent). Achievements: Built role-based access control, tenant isolation, and collapsible filter panels with state persistence.",
        "My name is Yasin Ullah. I'm a DevOps Engineer and System Administrator with experience in deploying web applications, managing server infrastructure, and setting up CI/CD pipelines for Android builds. I work with local PHP servers, Cloudflare tunnels for domain exposure, and Android SDK toolchains for APK generation. Skills: Apache/Nginx, PHP server configuration, Android SDK, Gradle, Cloudflare, DNS management, Git, GitHub Actions, SSL certificates, environment variables, build automation. Languages: Pashto (Native), Urdu (Fluent), English (Fluent). Resolved complex build failures including Kotlin/KSP version alignment and Compose compiler compatibility.",
        "My name is Yasin Ullah. I'm a Creative Technologist and Digital Product Designer who combines development skills with design thinking. I build visually stunning web apps with rich color palettes, Google Fonts integration, dynamic CSS variables, and export-ready layouts for PDF, Word, and high-res images. Skills: UI Design, CSS architecture, html2canvas, jsPDF, Word document generation, color theory, typography pairing, layout systems (sidebar, header-top, single-column), design tokens. Languages: Pashto (Native), Urdu (Fluent), English (Fluent). Created an AI-powered CV builder with multiple layout architectures and real-time theme customization.",
        "My name is Yasin Ullah. I'm a Technical Project Manager and Startup Builder who single-handedly builds and ships complete software products from concept to deployment. I manage the full lifecycle including requirements, architecture, development, testing, and deployment. My portfolio includes school management platforms, fleet tracking systems, AI-powered tools, and mobile applications. Skills: Project planning, full-stack development, Agile methodology, product design, user testing, deployment, documentation, client communication. Languages: Pashto (Native), Urdu (Fluent), English (Fluent). Delivered 5+ production applications used by real users across education and logistics sectors."
      ];
      const randomText = randomProfiles[Math.floor(Math.random() * randomProfiles.length)];
      document.getElementById('aiTextInput').value = randomText;
      openAIModal();
      await generateCVFromAI();
    }
    function setAIStatus(type, msg) {
      const st = document.getElementById("aiStatus"); st.className = "ai-status " + type; st.style.display = 'block';
      if (type === "processing") st.innerHTML = '<div class="status-spinner"></div><span>' + msg + "</span>"; else st.innerHTML = msg;
    }
    async function generateCVFromAI() {
      const rawText = document.getElementById("aiTextInput").value.trim();
      if (!rawText) return setAIStatus("error", "⚠️ Please paste your resume info first.");
      localStorage.setItem("cv_raw_text", rawText);
      const purpose = document.getElementById("aiPurpose").value.trim();
      const targetRole = document.getElementById("aiTargetRole").value.trim();
      const stylePref = document.getElementById("aiStylePref").value.trim();
      const primaryColor = document.getElementById("aiPrimaryColor").value;
      const secondaryColor = document.getElementById("aiSecondaryColor").value;
      const btn = document.getElementById("aiGenerateBtn");
      const btnText = document.getElementById("aiBtnText");
      const spinner = document.getElementById("aiSpinner");
      const cvNode = document.getElementById("cvToExport");
      btn.disabled = true; btnText.textContent = "Architecting Layout..."; spinner.style.display = "block";
      cvNode.classList.add("cv-scanning");
      setAIStatus("processing", "AI is writing your content & building a dynamic CSS/DOM Architecture...");
      const allLayouts = ["sidebar-left", "sidebar-right", "header-top", "single-column"];
      const allHeaders = ["solid-box", "underline", "clean-text"];
      const allShapes = ["circle", "square", "rounded"];
      const lastLayout = localStorage.getItem("last_cv_layout");
      let availableLayouts = allLayouts.filter(l => l !== lastLayout);
      if (availableLayouts.length === 0) availableLayouts = allLayouts;
      const forcedLayout = availableLayouts[Math.floor(Math.random() * availableLayouts.length)];
      const forcedHeader = allHeaders[Math.floor(Math.random() * allHeaders.length)];
      const forcedShape = allShapes[Math.floor(Math.random() * allShapes.length)];
      localStorage.setItem("last_cv_layout", forcedLayout);
      const isCustomColors = !(primaryColor === "#3b82f6" && secondaryColor === "#1e293b");
      const colorOv = getColorOverrides();
      const hasColorOverrides = Object.keys(colorOv).length > 0;
      const hasCustomDetails = purpose || targetRole || stylePref || isCustomColors || hasColorOverrides;
      let optionalContextStr = "";
      if (hasCustomDetails) {
        let parts = ["OPTIONAL CONTEXT FROM USER (use this to tailor content and design):"];
        if (purpose) parts.push(`- CV Purpose: ${purpose}`);
        if (targetRole) parts.push(`- Target Role: ${targetRole}`);
        if (stylePref) parts.push(`- Style Preference: ${stylePref}`);
        if (hasColorOverrides) {
          const ovNames = { backgroundColor:'backgroundColor', primaryAreaColor:'primaryAreaColor', primaryTextColor:'primaryTextColor', mainTextColor:'mainTextColor', secondaryTextColor:'secondaryTextColor', accentColor:'accentColor' };
          Object.entries(colorOv).forEach(([k, v]) => {
            parts.push(`- FORCED ${ovNames[k] || k}: ${v}`);
          });
          parts.push("For any colors listed as FORCED above, you MUST use those exact hex values in your theme output. For any colors NOT listed, generate a beautiful complementary color.");
        } else if (isCustomColors) {
          parts.push(`- User-chosen Primary/Accent Color: ${primaryColor}`);
          parts.push(`- User-chosen Secondary/Sidebar Color: ${secondaryColor}`);
          parts.push("Make sure to strictly apply the user-chosen colors!");
        } else {
          parts.push("- Generate a COMPLETELY NEW, visually striking and professional color palette.");
        }
        optionalContextStr = parts.join('\n');
      } else {
        optionalContextStr = `NO OPTIONAL DETAILS PROVIDED. You have FULL CREATIVE FREEDOM!
- Generate a STUNNING, UNIQUE, ADVANCED, AND HIGHLY PROFESSIONAL CV.
- Create a completely new, visually striking color palette (use rich, modern colors like sleek dark modes, vibrant gradients, or sophisticated corporate tones).
- Pick modern Google Fonts for headings and body that pair beautifully.
- Do NOT just use generic blues and grays. Surprise the user with a premium design!`;
      }
      const systemPrompt = `You are a world-class Resume parser AND an Expert UI/UX Architect.
Do TWO things:
1. Extract the CV data efficiently.
2. Generate a thematic design payload.
CRITICAL REQUIREMENT: Use these exact values in your JSON output:
- "layoutDirection": "${forcedLayout}"
- "headerStyle": "${forcedHeader}"
- "photoShape": "${forcedShape}"
${optionalContextStr}
Return a raw JSON object ONLY, NO markdown:
{
  "theme": {
    "layoutDirection": "${forcedLayout}",
    "headerStyle": "${forcedHeader}",
    "photoShape": "${forcedShape}",
    "backgroundColor": "Hex",
    "primaryAreaColor": "Hex",
    "primaryTextColor": "Hex",
    "mainTextColor": "Hex",
    "secondaryTextColor": "Hex",
    "accentColor": "Hex",
    "headingFont": "Google Font Name",
    "bodyFont": "Google Font Name"
  },
  "data": {
    "name": "Full Name", "title": "Job Title", "phone": "Phone", "email": "Email", "address": "Address",
    "summary": "Professional summary paragraph.",
    "skills": [{"name": "Skill", "level": "Expert"}],
    "languages": [{"name": "Lang", "level": "Fluent"}],
    "experience": [{"title": "Job", "company": "Company", "dates": "Dates", "responsibilities": ["Resp"]}],
    "education": [{"degree": "Degree", "institution": "School", "dates": "Dates", "details": "Info"}]
  }
}`;
      try {
        let content = await puter.ai.chat(systemPrompt + "\n\nUSER TEXT:\n" + rawText, { model: 'gemini-2.5-flash-lite' });
        if (typeof content !== 'string') content = content?.text || content?.message?.content || "";
        content = content.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();
        const jsonStart = content.indexOf('{'); const jsonEnd = content.lastIndexOf('}');
        if (jsonStart !== -1 && jsonEnd !== -1) content = content.substring(jsonStart, jsonEnd + 1);
        const parsed = JSON.parse(content);
        if (parsed.data) populateCV(parsed.data);
        if (parsed.theme) applyAITheme(parsed.theme);
        setAIStatus("success", "✅ New Structure, Colors & Content fully generated!");
        saveCVState(parsed.theme);
        let quotaData = JSON.parse(localStorage.getItem("ai_daily_quota") || '{"used": 0, "date": ""}');
        if (quotaData.date === new Date().toLocaleDateString()) {
          quotaData.used += 1;
        } else {
          quotaData = { date: new Date().toLocaleDateString(), used: 1 };
        }
        localStorage.setItem("ai_daily_quota", JSON.stringify(quotaData));
        setTimeout(() => { closeAIModal(); if (window.matchMedia('(max-width: 820px)').matches) showMobileViewAfterAction(); }, 2000);
      } catch (error) {
        console.error(error); setAIStatus("error", "❌ Failed to parse AI response. Please try again.");
      } finally {
        btn.disabled = false; btnText.textContent = "Generate Architecture"; spinner.style.display = "none";
        cvNode.classList.remove("cv-scanning");
      }
    }
    function populateCV(data) {
      if (data.name) { document.querySelector("#headerBlock h1").textContent = data.name; window._cvName = data.name.replace(/\s+/g, "_"); }
      if (data.title) document.querySelector("#headerBlock h3").textContent = data.title;
      const contacts = document.querySelectorAll("#contactBlock .contact-item");
      if (data.phone && contacts[0]) contacts[0].querySelector("div[contenteditable]").textContent = data.phone;
      if (data.email && contacts[1]) contacts[1].querySelector("div[contenteditable]").textContent = data.email;
      if (data.address && contacts[2]) contacts[2].querySelector("div[contenteditable]").textContent = data.address;
      if (data.summary) document.querySelector("#summaryBlock .summary-text").textContent = data.summary;
      const buildList = (listId, items) => {
        if (!items || !items.length) return;
        const ul = document.getElementById(listId); ul.innerHTML = "";
        items.forEach(item => {
          const li = document.createElement("li"); li.className = "list-item-wrapper";
          li.setAttribute("style", "position:relative; padding-right:50px;");
          const text = item.level ? `<strong>${item.name}:</strong> ${item.level}` : `<strong>${item.name}</strong>`;
          li.innerHTML = `<span contenteditable="true">${text}</span> <div class="section-controls"><span class="btn-duplicate control-btn" onclick="duplicateItem(this)">⧉</span><span class="btn-delete control-btn" onclick="deleteItem(this)">×</span></div>`;
          ul.appendChild(li);
        });
      };
      buildList("skillsList", data.skills); buildList("langList", data.languages);
      if (data.experience && data.experience.length) {
        const expSec = document.getElementById("expBlock");
        if (expSec) {
          expSec.querySelectorAll(".entry-block").forEach(b => b.remove());
          data.experience.forEach(exp => {
            const div = document.createElement("div"); div.className = "entry-block list-item-wrapper";
            div.setAttribute("style", "position:relative; padding-right:60px;");
            let bullets = "";
            (exp.responsibilities || []).forEach(r => { bullets += `<li class="list-item-wrapper" style="position:relative; padding-right:50px;"><span contenteditable="true">${r}</span> <div class="section-controls"><span class="btn-duplicate control-btn" onclick="duplicateItem(this)">⧉</span><span class="btn-delete control-btn" onclick="deleteItem(this)">×</span></div></li>`; });
            div.innerHTML = `
            <div class="section-controls"><span class="btn-duplicate control-btn" onclick="duplicateItem(this)">⧉</span><span class="btn-delete control-btn" onclick="deleteItem(this)">×</span></div>
            <div class="job-title" contenteditable="true">${exp.title || ""}</div>
            <div class="company-name" contenteditable="true">${exp.company || ""}</div>
            <span class="date-location" contenteditable="true">${exp.dates || ""}</span>
            <div class="job-desc"><ul>${bullets}</ul></div>`;
            expSec.appendChild(div);
          });
        }
      }
      if (data.education && data.education.length) {
        const eduSec = document.getElementById("eduBlock");
        if (eduSec) {
          eduSec.querySelectorAll(".entry-block").forEach(b => b.remove());
          data.education.forEach(edu => {
            const div = document.createElement("div"); div.className = "entry-block list-item-wrapper";
            div.setAttribute("style", "position:relative; padding-right:60px;");
            div.innerHTML = `
            <div class="section-controls"><span class="btn-duplicate control-btn" onclick="duplicateItem(this)">⧉</span><span class="btn-delete control-btn" onclick="deleteItem(this)">×</span></div>
            <div class="job-title" contenteditable="true">${edu.degree || ""}</div>
            <div class="company-name" contenteditable="true">${edu.institution || ""}</div>
            <span class="date-location" contenteditable="true">${edu.dates || ""}</span>
            <p class="summary-text" contenteditable="true" style="margin-top:5px; font-size:14px;">${edu.details || ""}</p>`;
            eduSec.appendChild(div);
          });
        }
      }
    }
    function hideEditControls() {
      return document.querySelectorAll('.control-btn, .profile-photo-placeholder');
    }
    function downloadHighResImage() {
      const cvNode = document.getElementById("cvToExport");
      const btns = hideEditControls();
      btns.forEach(b => b.classList.add("hide-on-export"));
      const origW = cvNode.style.width;
      cvNode.style.width = "210mm";
      setTimeout(() => {
        html2canvas(cvNode, { scale: 4, useCORS: true, allowTaint: true }).then(canvas => {
          const link = document.createElement("a");
          link.download = (window._cvName || "Resume") + "_HighRes.png";
          link.href = canvas.toDataURL("image/png");
          link.click();
          btns.forEach(b => b.classList.remove("hide-on-export"));
          cvNode.style.width = origW;
        });
      }, 300);
    }
    function downloadPDF() {
      const cvNode = document.getElementById("cvToExport");
      const btns = hideEditControls();
      btns.forEach(b => b.classList.add("hide-on-export"));
      const origW = cvNode.style.width;
      cvNode.style.width = "210mm";
      setTimeout(() => {
        html2canvas(cvNode, { scale: 3, useCORS: true, allowTaint: true }).then(canvas => {
          const { jsPDF } = window.jspdf;
          const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          const pdfW = pdf.internal.pageSize.getWidth();
          const pdfH = (canvas.height * pdfW) / canvas.width;
          let yPos = 0;
          const pageH = pdf.internal.pageSize.getHeight();
          while (yPos < pdfH) {
            pdf.addImage(imgData, 'JPEG', 0, -yPos, pdfW, pdfH);
            yPos += pageH;
            if (yPos < pdfH) pdf.addPage();
          }
          pdf.save((window._cvName || "Resume") + ".pdf");
          btns.forEach(b => b.classList.remove("hide-on-export"));
          cvNode.style.width = origW;
        });
      }, 300);
    }
    function downloadWord() {
      const cvClone = document.getElementById("cvToExport").cloneNode(true);
      const btns = cvClone.querySelectorAll('.control-btn, li[onclick*="addBullet"], .profile-photo-placeholder, input');
      btns.forEach(b => b.remove());
      const cloneImg = cvClone.querySelector('#profileImg');
      const photoContainer = cvClone.querySelector('.profile-photo-container');
      const cvNode = document.getElementById("cvToExport");
      const styles = cvNode.style;
      const primary = styles.getPropertyValue('--accent').trim() || '#3498db';
      const pAreaBg = styles.getPropertyValue('--primary-area-bg').trim() || '#1e293b';
      const pAreaText = styles.getPropertyValue('--primary-area-text').trim() || '#ffffff';
      const textMain = styles.getPropertyValue('--text-main').trim() || '#333333';
      const mainBg = styles.getPropertyValue('--bg').trim() || '#ffffff';
      const headingFont = (styles.getPropertyValue('--font-heading').trim() || 'Arial').replace(/"/g, "'");
      const bodyFont = (styles.getPropertyValue('--font-body').trim() || 'sans-serif').replace(/"/g, "'");
      const layout = cvNode.getAttribute('data-layout') || 'sidebar-left';
      const docDir = window.getComputedStyle(cvNode).direction || 'ltr';
      const canvas = document.createElement("canvas"); canvas.width = 140; canvas.height = 140;
      const ctx = canvas.getContext("2d");
      let base64Img = "";
      try {
        const radiusStr = styles.getPropertyValue('--photo-radius').trim();
        ctx.beginPath();
        if (radiusStr === '50%') {
          ctx.arc(70, 70, 70, 0, Math.PI * 2);
        } else if (radiusStr === '15px') {
          const r = 15;
          ctx.moveTo(r, 0); ctx.lineTo(140 - r, 0); ctx.quadraticCurveTo(140, 0, 140, r);
          ctx.lineTo(140, 140 - r); ctx.quadraticCurveTo(140, 140, 140 - r, 140);
          ctx.lineTo(r, 140); ctx.quadraticCurveTo(0, 140, 0, 140 - r);
          ctx.lineTo(0, r); ctx.quadraticCurveTo(0, 0, r, 0);
        } else {
          ctx.rect(0, 0, 140, 140);
        }
        ctx.clip();
        ctx.drawImage(document.getElementById("profileImg"), 0, 0, canvas.width, canvas.height);
        base64Img = canvas.toDataURL("image/png");
      } catch (e) { console.error(e); }
      if (cloneImg && base64Img) {
        cloneImg.src = base64Img;
        cloneImg.setAttribute("width", "130");
        cloneImg.setAttribute("height", "130");
        cloneImg.style.display = "block";
        if (photoContainer) photoContainer.style.textAlign = "center";
      } else if (photoContainer) {
        photoContainer.remove();
      }
      cvClone.querySelectorAll('.contact-item').forEach(el => {
        el.style.display = "inline-block";
        el.style.marginRight = "20px";
        el.style.verticalAlign = "top";
      });
      let wordHTMLTable = "";
      if (layout === 'sidebar-left' || layout === 'sidebar-right') {
        const sidebarHTML = cvClone.querySelector('.sidebar').innerHTML;
        const mainContentHTML = cvClone.querySelector('.main-content').innerHTML;
        const colSidebar = `<td width="30%" valign="top" bgcolor="${pAreaBg}" style="background-color: ${pAreaBg}; color: ${pAreaText}; padding: 25px;">${sidebarHTML.replace(/<h2.*?>/g, `<div class="sidebar-title">`).replace(/<\/h2>/g, '</div>')}</td>`;
        const colMain = `<td width="70%" valign="top" bgcolor="${mainBg}" style="background-color: ${mainBg}; color: ${textMain}; padding: 25px;">${mainContentHTML}</td>`;
        wordHTMLTable = `<tr>${layout === 'sidebar-left' ? colSidebar + colMain : colMain + colSidebar}</tr>`;
      }
      else if (layout === 'header-top') {
        const pBlock = cvClone.querySelector('.top-banner #photoBlock');
        const hInfo = cvClone.querySelector('.top-banner .header-info');
        let topBannerHTML = "";
        if (pBlock && hInfo) {
          topBannerHTML = `<table width="100%" cellpadding="0" cellspacing="0"><tr><td width="160" valign="middle">${pBlock.outerHTML}</td><td valign="middle">${hInfo.outerHTML}</td></tr></table>`;
        } else {
          topBannerHTML = cvClone.querySelector('.top-banner').innerHTML;
        }
        const leftColHTML = cvClone.querySelector('.body-left').innerHTML;
        const rightColHTML = cvClone.querySelector('.body-right').innerHTML;
        const topRow = `<tr><td colspan="2" valign="top" bgcolor="${pAreaBg}" style="background-color: ${pAreaBg}; color: ${pAreaText}; padding: 30px;">${topBannerHTML.replace(/<h2.*?>/g, `<div class="sidebar-title">`).replace(/<\/h2>/g, '</div>')}</td></tr>`;
        const bottomRow = `<tr><td width="30%" valign="top" bgcolor="${mainBg}" style="background-color: ${mainBg}; padding: 25px;">${leftColHTML.replace(/<h2.*?>/g, `<div class="sidebar-title" style="color:${primary};">`).replace(/<\/h2>/g, '</div>')}</td><td width="70%" valign="top" bgcolor="${mainBg}" style="background-color: ${mainBg}; color: ${textMain}; padding: 25px;">${rightColHTML}</td></tr>`;
        wordHTMLTable = topRow + bottomRow;
      }
      else if (layout === 'single-column') {
        const topBannerHTML = cvClone.querySelector('.top-banner').innerHTML;
        const mainContentHTML = cvClone.querySelector('.main-content').innerHTML;
        wordHTMLTable = `<tr><td valign="top" bgcolor="${pAreaBg}" style="background-color: ${pAreaBg}; color: ${pAreaText}; padding: 30px; text-align: center;">${topBannerHTML.replace(/<h2.*?>/g, `<div class="sidebar-title">`).replace(/<\/h2>/g, '</div>')}</td></tr><tr><td valign="top" bgcolor="${mainBg}" style="background-color: ${mainBg}; color: ${textMain}; padding: 30px;">${mainContentHTML}</td></tr>`;
      }
      let sectionTitleStyle = `font-size: 18px; font-family: ${headingFont}; text-transform: uppercase; font-weight: bold; margin-top: 25px; margin-bottom: 15px;`;
      if (cvNode.classList.contains("style-solid-box")) {
        sectionTitleStyle += ` background-color: ${primary}; color: #ffffff; padding: 8px 15px;`;
      } else if (cvNode.classList.contains("style-underline")) {
        sectionTitleStyle += ` color: ${textMain}; border-bottom: 2px solid ${primary}; padding-bottom: 5px;`;
      } else {
        sectionTitleStyle += ` color: ${primary};`;
      }
      let h1Color = primary;
      if (layout === 'header-top' || layout === 'single-column') h1Color = pAreaText;
      const wordHTML = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40" dir="${docDir}">
        <head><meta charset='utf-8'><title>CV</title>
          <style>
            @page WordSection1 { size: 8.5in 11.0in; margin: 0.2in; }
            div.WordSection1 { page: WordSection1; font-family: ${bodyFont}; }
            body, table, td, p, span, div, li { font-family: ${bodyFont}; }
            h1, h2, h3, h4, h5, h6 { font-family: ${headingFont}; }
            h1 { font-size: 38px; color: ${h1Color}; text-transform: uppercase; margin: 0; }
            h3 { font-size: 18px; margin-top: 5px; margin-bottom: 15px; font-weight: normal; }
            .section-title { ${sectionTitleStyle} }
            .job-title { font-weight: bold; font-size: 16px; color: ${textMain}; }
            .company-name { font-weight: bold; color: ${primary}; font-size: 15px; margin-bottom: 5px; }
            .date-location { font-style: italic; color: #7f8c8d; font-size: 13px; display: block; margin-bottom: 10px; }
            ul { margin-top: 5px; margin-bottom: 15px; padding-left: 20px; }
            li { margin-bottom: 5px; font-size: 14px; line-height: 1.5; }
            p { font-size: 14px; line-height: 1.6; margin-top: 5px; margin-bottom: 10px; }
            .sidebar-title { font-size: 16px; font-family: ${headingFont}; text-transform: uppercase; border-bottom: 1px solid rgba(128,128,128,0.3); padding-bottom: 5px; margin-bottom: 15px; margin-top: 20px; font-weight: bold; }
            .contact-label { font-weight: bold; opacity: 0.8; font-size: 11px; text-transform: uppercase; display: block; margin-top: 10px; margin-bottom: 2px; }
            .contact-item { font-size: 13px; line-height: 1.4; }
            td[width="30%"] p, td[width="30%"] li, td[width="30%"] span, td[width="30%"] div { color: ${pAreaText}; }
            td[width="30%"] .sidebar-title { color: ${primary}; border-bottom-color: ${pAreaText}; }
            td[width="30%"] .contact-label { color: ${pAreaText}; }
            td[width="70%"] p, td[width="70%"] li, td[width="70%"] span, td[width="70%"] div { color: ${textMain}; }
            td[colspan="2"] p, td[colspan="2"] li, td[colspan="2"] span, td[colspan="2"] div { color: ${pAreaText}; }
          </style>
        </head>
        <body style="margin: 0; padding: 0;">
          <div class="WordSection1">
            <table width="100%" cellpadding="0" cellspacing="0" style="border: none; border-collapse: collapse;">
              ${wordHTMLTable}
            </table>
          </div>
        </body></html>`;
      const blob = new Blob(['\ufeff', wordHTML], { type: 'application/msword' });
      const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = (window._cvName || "Resume") + ".doc";
      document.body.appendChild(link); link.click(); document.body.removeChild(link);
    }
    const DB_NAME = 'SafeerCVDB';
    const DB_VERSION = 1;
    const STORE_NAME = 'saved_cvs';
    function initDB() {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = (e) => reject(e);
        request.onsuccess = (e) => resolve(e.target.result);
        request.onupgradeneeded = (e) => {
          e.target.result.createObjectStore(STORE_NAME, { keyPath: 'id' });
        };
      });
    }
    async function saveToDB(cv) {
      const db = await initDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).put(cv);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject();
      });
    }
    async function getAllFromDB() {
      const db = await initDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const req = tx.objectStore(STORE_NAME).getAll();
        req.onsuccess = () => resolve(req.result.sort((a, b) => b.id - a.id));
        req.onerror = () => reject();
      });
    }
    async function deleteFromDB(id) {
      const db = await initDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).delete(id);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject();
      });
    }
    async function saveCurrentCV() {
      const cvNode = document.getElementById("cvToExport");
      const nameNode = document.querySelector("#headerBlock h1");
      const titleNode = document.querySelector("#headerBlock h3");
      const defaultName = nameNode ? nameNode.textContent.trim() : "Untitled";
      const { value: cvName } = await Swal.fire({
        title: 'Save CV',
        input: 'text',
        inputLabel: 'Give this CV a name for your history',
        inputValue: defaultName,
        showCancelButton: true,
        confirmButtonText: 'Save CV',
        inputValidator: (value) => {
          if (!value) return 'Please provide a name to save the CV'
        }
      });
      if (!cvName) return;
      const title = titleNode ? titleNode.textContent.trim() : "";
      const cvData = {
        id: Date.now(),
        name: cvName,
        title: title,
        date: new Date().toLocaleString(),
        html: cvNode.innerHTML,
        className: cvNode.className,
        cssText: cvNode.style.cssText,
        layout: cvNode.getAttribute("data-layout")
      };
      await saveToDB(cvData);
      Swal.fire({
        icon: 'warning',
        title: 'CV Saved Locally!',
        html: '<div style="text-align:left; font-size:14px;"><p>Your CV has been saved to this browser.</p><p style="color:#e11d48; font-weight:bold;">CRITICAL REMINDER:</p><p>Please make sure to use the <b>Backup All</b> button in the History menu frequently. If you clear your browser cache/data without an external backup, your saved CVs will be <b>permanently lost</b> and we cannot be held responsible.</p></div>',
        confirmButtonText: 'I understand',
        confirmButtonColor: '#3b82f6'
      }).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Saved Successfully!',
          text: 'You can access this CV anytime from the History menu.',
          timer: 2500,
          showConfirmButton: false
        });
      });
    }
    async function loadCV(id) {
      const cvs = await getAllFromDB();
      const cvData = cvs.find(c => c.id === id);
      if (!cvData) return;
      const cvNode = document.getElementById("cvToExport");
      cvNode.innerHTML = cvData.html;
      cvNode.className = cvData.className;
      cvNode.style.cssText = cvData.cssText;
      cvNode.setAttribute("data-layout", cvData.layout || "sidebar-left");
      closeHistoryModal();
      if (window.matchMedia('(max-width: 820px)').matches) showMobileViewAfterAction();
    }
    async function renderHistory() {
      const list = document.getElementById("historyList");
      let cvs = await getAllFromDB();
      const searchQ = (document.getElementById("historySearch")?.value || "").toLowerCase();
      const sortV = document.getElementById("historySort")?.value || "newest";
      if (searchQ) {
        cvs = cvs.filter(cv => (cv.name || "").toLowerCase().includes(searchQ) || (cv.title || "").toLowerCase().includes(searchQ));
      }
      if (sortV === "newest") cvs.sort((a, b) => b.id - a.id);
      else if (sortV === "oldest") cvs.sort((a, b) => a.id - b.id);
      else if (sortV === "a-z") cvs.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
      else if (sortV === "z-a") cvs.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
      if (cvs.length === 0) {
        list.innerHTML = "<p style='text-align:center; color:#94a3b8; padding: 20px;'>No saved CVs found.</p>";
        return;
      }
      list.innerHTML = cvs.map(cv => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:15px; background:#fff; border:1px solid #e2e8f0; border-radius:8px;">
          <div style="cursor:pointer; flex:1;" onclick="loadCV(${cv.id})">
            <h4 style="margin:0 0 5px 0; color:#334155;">${cv.name}</h4>
            <div style="font-size:12px; color:#64748b;">${cv.title} • Saved on ${cv.date}</div>
          </div>
          <button class="btn" style="border-color:#ef4444; color:#dc2626; padding:6px 12px; font-size:12px; flex:none;" onclick="deleteCV(${cv.id})">Delete</button>
        </div>
      `).join('');
    }
    async function deleteCV(id) {
      if (confirm("Are you sure you want to delete this saved CV?")) {
        await deleteFromDB(id);
        renderHistory();
      }
    }
    function openHistoryModal() {
      document.body.style.overflow = "hidden";
      renderHistory();
      document.getElementById("historyModalOverlay").classList.add("active");
    }
    function closeHistoryModal() {
      document.body.style.overflow = "";
      document.getElementById("historyModalOverlay").classList.remove("active");
    }
    async function exportBackup() {
      const cvs = await getAllFromDB();
      const lsData = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        lsData[key] = localStorage.getItem(key);
      }
      const backup = {
        _safeer_backup_version: 2,
        timestamp: new Date().toISOString(),
        indexedDB: cvs,
        localStorage: lsData
      };
      const blob = new Blob([JSON.stringify(backup)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Safeer_CV_Backup_" + new Date().toISOString().split('T')[0] + ".json";
      a.click();
      URL.revokeObjectURL(url);
      Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Full backup exported', showConfirmButton: false, timer: 1500, timerProgressBar: true });
    }
    async function importBackup(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async function (e) {
        try {
          const data = JSON.parse(e.target.result);
          let cvArray = [];
          if (data._safeer_backup_version && data._safeer_backup_version >= 2) {
            cvArray = data.indexedDB || [];
            if (data.localStorage && typeof data.localStorage === 'object') {
              Object.entries(data.localStorage).forEach(([k, v]) => {
                localStorage.setItem(k, v);
              });
            }
          } else if (Array.isArray(data)) {
            cvArray = data;
          }
          for (const cv of cvArray) {
            if (cv.id && cv.html) await saveToDB(cv);
          }
          Swal.fire({ icon: 'success', title: 'Backup Restored!', text: `${cvArray.length} CV(s) and all settings restored. Reloading...`, timer: 2000, showConfirmButton: false });
          setTimeout(() => location.reload(), 2000);
        } catch (err) {
          Swal.fire({ icon: 'error', title: 'Invalid Backup', text: 'The file could not be read as a valid Safeer backup.' });
        }
      };
      reader.readAsText(file);
      event.target.value = '';
    }
    const MOBILE_ROUTE_KEY = 'cv_mobile_route';
    function isMobileViewport() {
      return window.matchMedia('(max-width: 820px)').matches;
    }
    function getMobileRoute() {
      const route = localStorage.getItem(MOBILE_ROUTE_KEY);
      if (route === 'normal' || route === 'mobile-optimized') return route;
      return null;
    }
    function shouldUseMobileOptimizedRoute() {
      return getMobileRoute() === 'mobile-optimized';
    }
    function closeRouteChooser() {
      const chooser = document.getElementById('mobileRouteChooser');
      if (chooser) chooser.classList.remove('active');
    }
    function openRouteChooser(isChangeMode) {
      if (!isMobileViewport()) return;
      const chooser = document.getElementById('mobileRouteChooser');
      if (!chooser) return;
      const subtitle = document.getElementById('routePickerSubtitle');
      if (subtitle) {
        subtitle.textContent = isChangeMode
          ? 'Switch between Normal and Mobile Optimized routes. Your choice is saved.'
          : 'Pick how you want to use the CV builder on mobile. You can change this anytime.';
      }
      chooser.classList.add('active');
    }
    function routeChooserOverlayClick(event) {
      if (event.target !== event.currentTarget) return;
      if (getMobileRoute()) closeRouteChooser();
    }
    function selectMobileRoute(route) {
      if (route !== 'normal' && route !== 'mobile-optimized') return;
      localStorage.setItem(MOBILE_ROUTE_KEY, route);
      applyMobileRoute(route);
      closeRouteChooser();
    }
    function applyMobileRoute(route) {
      document.body.classList.remove('mobile-route-normal', 'mobile-route-optimized', 'mobile-cv-view');
      if (!isMobileViewport()) return;
      if (route === 'mobile-optimized') {
        document.body.classList.add('mobile-route-optimized');
        mobileShowActions();
      } else {
        document.body.classList.add('mobile-route-normal');
        mobileShowCVNormal();
      }
    }
    function initializeMobileRoute() {
      if (!isMobileViewport()) {
        document.body.classList.remove('mobile-route-normal', 'mobile-route-optimized', 'mobile-cv-view');
        closeRouteChooser();
        return;
      }
      const route = getMobileRoute();
      if (!route) {
        openRouteChooser(false);
        return;
      }
      applyMobileRoute(route);
    }
    function showMobileViewAfterAction() {
      if (!isMobileViewport()) return;
      if (shouldUseMobileOptimizedRoute()) {
        mobileShowCV();
      } else {
        mobileShowCVNormal();
      }
    }
    function mobileShowCVNormal() {
      document.body.classList.add('mobile-route-normal');
      document.body.classList.remove('mobile-route-optimized', 'mobile-cv-view');
      document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0');
      _initMobileTouchFix();
    }
    var _mobileScrolling = false;
    var _mobileTouchStartX = 0;
    var _mobileTouchStartY = 0;
    var _mobileTouchTarget = null;
    function _initMobileTouchFix() {
      var cv = document.getElementById('cvToExport');
      if (!cv || cv._touchFixDone) return;
      cv._touchFixDone = true;
      cv.addEventListener('touchstart', function(e) {
        _mobileTouchStartX = e.touches[0].clientX;
        _mobileTouchStartY = e.touches[0].clientY;
        _mobileScrolling = false;
        _mobileTouchTarget = null;
        if (document.activeElement && document.activeElement !== document.body) {
          document.activeElement.blur();
        }
        var t = e.target;
        while (t && t !== cv) {
          if (t.isContentEditable || (t.getAttribute && t.getAttribute('contenteditable') === 'true')) {
            var ce = t;
            while (ce && ce !== cv) {
              if (ce.getAttribute && ce.getAttribute('contenteditable') === 'true') {
                _mobileTouchTarget = ce;
                ce.setAttribute('contenteditable', 'false');
                break;
              }
              ce = ce.parentElement;
            }
            break;
          }
          t = t.parentElement;
        }
      }, { passive: true });
      cv.addEventListener('touchmove', function(e) {
        if (!_mobileScrolling) {
          var dx = Math.abs(e.touches[0].clientX - _mobileTouchStartX);
          var dy = Math.abs(e.touches[0].clientY - _mobileTouchStartY);
          if (dx > 6 || dy > 6) {
            _mobileScrolling = true;
          }
        }
      }, { passive: true });
      cv.addEventListener('touchend', function(e) {
        if (_mobileTouchTarget) {
          _mobileTouchTarget.setAttribute('contenteditable', 'true');
          if (!_mobileScrolling) {
            _mobileTouchTarget.focus();
          }
          _mobileTouchTarget = null;
        }
        _mobileScrolling = false;
      }, { passive: true });
    }
    function mobileShowCV() {
      if (!shouldUseMobileOptimizedRoute()) {
        mobileShowCVNormal();
        return;
      }
      document.body.classList.remove('mobile-route-normal');
      document.body.classList.add('mobile-route-optimized');
      document.body.classList.add('mobile-cv-view');
      document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=810, user-scalable=yes');
      _initMobileTouchFix();
      var saved = localStorage.getItem('floatbar_collapsed');
      var icons = document.getElementById('floatBarIcons');
      var toggle = document.getElementById('floatBarToggle');
      if (saved === 'true') {
        icons.classList.add('collapsed');
        toggle.textContent = '▲';
      } else {
        icons.classList.remove('collapsed');
        toggle.textContent = '▼';
      }
    }
    function mobileShowActions() {
      if (!shouldUseMobileOptimizedRoute()) {
        mobileShowCVNormal();
        return;
      }
      document.body.classList.remove('mobile-route-normal');
      document.body.classList.add('mobile-route-optimized');
      document.body.classList.remove('mobile-cv-view');
      document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=yes');
    }
    function toggleFloatBar() {
      var icons = document.getElementById('floatBarIcons');
      var toggle = document.getElementById('floatBarToggle');
      var isCollapsed = icons.classList.toggle('collapsed');
      toggle.textContent = isCollapsed ? '▲' : '▼';
      localStorage.setItem('floatbar_collapsed', isCollapsed);
    }
