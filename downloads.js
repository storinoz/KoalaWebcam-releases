(() => {
  'use strict';
  const repository = 'https://github.com/storinoz/KoalaWebcam-releases';
  const manifestUrl = 'https://raw.githubusercontent.com/storinoz/KoalaWebcam-releases/main/update.json';
  const versionPattern = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z]+(?:\.[0-9A-Za-z]+)*)?$/;
  const version = document.getElementById('active-version');
  const status = document.getElementById('download-status');
  const retry = document.getElementById('retry');
  const buttons = ['windows', 'android'].map(platform => document.getElementById(`${platform}-download`));
  let loading = false;

  function validate(item, platform) {
    if (!item || typeof item.version !== 'string' || item.version.length > 80 || !versionPattern.test(item.version)
      || !Number.isSafeInteger(item.size) || item.size <= 0) throw new Error('Catálogo inválido.');
    const filename = platform === 'windows' ? `KoalaWebcam-Setup-${item.version}.exe` : 'KoalaWebcam.apk';
    if (item.url !== `${repository}/releases/download/v${item.version}/${filename}`) throw new Error('Download inválido.');
    return item;
  }

  function size(bytes) {
    return `${(bytes / (1024 * 1024)).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} MB`;
  }

  async function load() {
    if (loading) return;
    loading = true;
    retry.hidden = true;
    version.textContent = 'Consultando versão…';
    status.textContent = 'Consultando os arquivos da versão atual…';
    buttons.forEach(button => { button.setAttribute('aria-disabled', 'true'); button.setAttribute('tabindex', '-1'); });
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch(manifestUrl, { cache: 'no-store', signal: controller.signal });
      if (!response.ok) throw new Error('Catálogo indisponível.');
      const text = await response.text();
      if (text.length > 65536) throw new Error('Catálogo inválido.');
      const catalog = JSON.parse(text);
      if (catalog.schema !== 1) throw new Error('Catálogo inválido.');
      const windows = validate(catalog.windows, 'windows');
      const android = validate(catalog.android, 'android');
      // Validate both entries before making either download available.
      [windows, android].forEach((item, index) => {
        buttons[index].href = item.url;
        buttons[index].removeAttribute('aria-disabled');
        buttons[index].removeAttribute('tabindex');
      });
      version.textContent = windows.version === android.version ? `Versão atual ${windows.version}`
        : `Windows ${windows.version} · Android ${android.version}`;
      document.getElementById('windows-info').textContent = `Windows 10/11 · 64 bits · ${size(windows.size)}`;
      document.getElementById('android-info').textContent = `Android 8 ou superior · APK · ${size(android.size)}`;
      status.textContent = 'Instale no computador e no celular. Downloads pelo GitHub, sem cadastro.';
    } catch {
      version.textContent = 'Catálogo indisponível';
      status.textContent = 'Não foi possível consultar a versão. Tente novamente ou use “Todas as versões”, no rodapé.';
      buttons.forEach(button => { button.href = `${repository}/releases`; });
      retry.hidden = false;
    } finally {
      clearTimeout(timeout);
      loading = false;
    }
  }

  buttons.forEach(button => button.addEventListener('click', event => {
    if (button.getAttribute('aria-disabled') === 'true') event.preventDefault();
  }));
  retry.addEventListener('click', load);
  load();
})();
