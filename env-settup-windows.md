# Configuração do Ambiente Windows
> Breve tutorial para ajudar na configuração do ambiente de desenvolvimento no Windows.

[![NVM Version][nvm-image]][nvm-url]
[![NPM Version][npm-image]][npm-url]
[![Node.js Version][node-image]][node-url]
[![Ionic Version][ionic-image]][ionic-url]

## Instalação

### Node Version Manager (nvm):

Para instalar o nvm é necessário baixar o arquivo nvm-setup.zip. Você pode encontrá-lo em: [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).

Após baixá-lo, descompacte-o e execute o arquivo nvm-setup.exe. 

Ao final da instalação, confira a versão instalada com o seguinte comando no Windows PowerShell:

```sh
nvm -v
```

Com o nvm configurado, instale o Node.js e o Node Package Manager:

```sh
nvm install 8.14.0
nvm use 8.14.0
```

Para confirmar as versõs instaladas do Node.js e do npm:

```sh
node -v
npm -v
```

### Ionic CLI:

Instale o Ionic CLI globalmente usando o npm:

```sh
npm install -g ionic
```

### Visual Studio Code

O Visual Studio Code é um editor de código-fonte. Ele inclui suporte para depuração, controle Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.
Para instalá-lo acesse [Visual Studio Code](https://github.com/coreybutler/nvm-windows/releases).

## Clonando o repositório

Clone o repositório do GitHub e use o npm para instalar todas as dependências.
```sh
cd ~; mkdir gdg; cd gdg
git clone https://github.com/franciellenunes/gdg-graodireto.git
cd gdg-graodireto
npm install
```

## Testando seu aplicativo

Para executar o aplicativo gdg-graodireto utilize o seguinte comando dentro da pasta do projeto:

$ ionic serve

## Sobre

Francielle Nunes – [@franciellesnunes](https://www.linkedin.com/in/franciellesnunes/) – franciellesnunes@gmail.com

Ditribuído sobre licença MIT. Veja ``LICENSE`` para mais informações.

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/badge/npm-v6.1.4-red.svg
[npm-url]: https://www.npmjs.com/package/npm/v/6.4.1
[nvm-image]: https://img.shields.io/badge/nvm-v8.14.0-blue.svg
[nvm-url]: https://github.com/creationix/nvm
[node-image]: https://img.shields.io/badge/node-v8.14.0-green.svg
[node-url]: https://nodejs.org/en/
[ionic-image]: https://img.shields.io/badge/ionic-v4.12.0-blue.svg
[ionic-url]: https://www.npmjs.com/package/ionic
