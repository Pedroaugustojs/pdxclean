# PDX Clean – Link na bio

Site estático (HTML, CSS e JavaScript puro). Não precisa de build.

## Estrutura

```
index.html          página principal
css/style.css       estilos (modo claro e escuro automáticos)
js/main.js          slider de antes e depois
assets/img/         logo, fotos do sofá e ícones
favicon.ico         ícone da aba
robots.txt
vercel.json         configurações da Vercel (cache e segurança)
```

## Publicar na Vercel

**Pelo site (mais fácil)**
1. Envie esta pasta para um repositório no GitHub.
2. Em vercel.com, clique em **Add New → Project** e escolha o repositório.
3. Em **Framework Preset** deixe **Other**. Deixe Build Command e Output Directory em branco.
4. Clique em **Deploy**.

**Pelo terminal**
```
npm i -g vercel
vercel --prod
```
Quando perguntar, aceite os padrões (sem build, pasta raiz `./`).

> O `index.html` precisa ficar na **raiz** do repositório (não dentro de outra pasta).

## Editar

- **Links:** procure por `href=` no `index.html` (WhatsApp, Instagram e mapa).
- **Fotos do slider:** troque `assets/img/sofa-antes.jpg` e `sofa-depois.jpg` mantendo os nomes (proporção 720×393 funciona melhor).
- **Cores:** variáveis no início do `css/style.css` (`--accent`, `--bg` etc.).

## Depois de publicar

No `index.html`, a imagem de compartilhamento usa caminho relativo (`/assets/img/sofa-depois.jpg`). Para aparecer na prévia ao compartilhar o link em redes sociais, troque para o endereço completo, por exemplo `https://seu-dominio.com/assets/img/sofa-depois.jpg`.
