# KoalaWebcam

<img src="koalawebcam.png" alt="KoalaWebcam" width="180" />

Use a câmera frontal ou traseira do seu Android no computador Windows, por USB ou Bluetooth experimental. Controle espelhamento, rotação, brilho, contraste e saturação. Veja o vídeo em tela cheia ou em uma janela pequena e flutuante.

## Downloads

**[Abrir a página de downloads do KoalaWebcam](https://storinoz.github.io/KoalaWebcam-releases/)** — logo, versão atual e botões para Windows e Android, atualizados pelo catálogo público.

Baixe os arquivos em **[Releases](https://github.com/storinoz/KoalaWebcam-releases/releases)**. A versão de teste atual é **0.7.0-beta.5**:

- **Windows 10/11 de 64 bits:** `KoalaWebcam-Setup-0.7.0-beta.5.exe`. O instalador permite escolher atalhos no menu Iniciar e na área de trabalho.
- **Android 8 ou posterior:** `KoalaWebcam.apk`. Abra o APK no celular para instalar ou atualizar.

O aplicativo mostra o vídeo na própria janela do PC. A câmera virtual para aplicativos de conferência permanece em desenvolvimento futuro. Não grava áudio ou vídeo.

## Conectar

**USB:** instale os dois aplicativos, conecte um cabo USB de dados e ative **Settings → Network & internet → Hotspot & tethering → USB tethering** no Android. No KoalaWebcam do celular, escolha USB e inicie a transmissão. Digite os oito números exibidos no aplicativo do PC e inicie a transmissão. Não exige modo de desenvolvedor ou depuração USB.

**Bluetooth:** pareie os aparelhos e ative **Bluetooth tethering** no celular. No Windows, abra **Settings → Bluetooth & devices → Devices**, encontre o celular e escolha **Join Personal Area Network (PAN) → Access Point → Connect**. Aguarde a conexão ser confirmada. Escolha Bluetooth nos dois aplicativos e só então inicie a transmissão no celular para gerar o código de oito dígitos. Esse código é diferente do código de pareamento do sistema.

O perfil **(30 FPS) Máxima fluidez** foi validado a aproximadamente 30 FPS no Moto G84 com captura padrão. A opção **Resolução Bluetooth HD**, no celular, permite experimentar até 1280 × 720 quando suportado; pode reduzir os FPS ou aumentar o atraso e ainda requer avaliação em dispositivo real.

Mantenha o aplicativo aberto no celular. Troque entre Frontal e Traseira durante a transmissão. No PC, use Esc ou o ícone de retorno para sair da tela cheia/miniatura.

## Atualizar

A partir da beta.5, clique em **Atualizar** no PC ou em **engrenagem → Atualizar KoalaWebcam** no celular. A busca consulta o arquivo público `update.json`, sem conta ou token do GitHub. O vídeo permanece na rede local; a busca não envia imagens ou o código de conexão.

No Windows, o download é verificado por tamanho e SHA-256 antes de abrir o instalador. No Android, o botão oferece o APK pelo navegador; abra o arquivo baixado e confirme a atualização. Pare a transmissão antes de atualizar. As versões anteriores à beta.5 precisam receber essa primeira atualização manualmente.

Este repositório público contém apenas instruções, logo, informações de atualização e pacotes de distribuição. O código-fonte do projeto é mantido em um repositório privado. Os arquivos ZIP/TAR de “Source code” gerados automaticamente pelo GitHub contêm somente o conteúdo deste repositório de distribuição.
