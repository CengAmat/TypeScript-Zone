# TypeScript-Zone

TypeScript öğrenme workspace'i: kurs örnekleri ve küçük uygulamalar.

## Gereksinimler

- Node.js 20+
- npm

## Kurulum

Her proje kendi `package.json` dosyasına sahiptir. İlgili klasörde:

```bash
npm install
```

## Projeler

### Kök (webpack playground)

```bash
npm install
npm start
```

`src/app.ts` derlenir ve `index.html` üzerinden servis edilir.

### Understanding-Ts (kurs notları)

`*.dev.ts` / `*.dev.tsx` dosyaları scratchpad örnekleridir; kök `tsconfig` bunları derlemeden hariç tutar.

```bash
cd Understanding-Ts
npm install
npm start   # lite-server
```

### SearchAddress

Google Geocoding + Maps ile adres arama.

```bash
cd Understanding-Ts/SearchAddress
cp .env.example .env
# .env içine GOOGLE_API_KEY değerini yazın
npm install
npm start
```

> Daha önce repoya commit edilmiş bir API anahtarı varsa Google Cloud Console'dan **rotate** edin.

### React Todo

```bash
cd Understanding-Ts/React/my-app
npm install
npm start
```

### Node + Express Todo API

```bash
cd Understanding-Ts/Node-Express-TypeScript
npm install
npm run build
npm start
```

Geliştirme için: `npm run build` sonrası `npm run dev` (tsc watch + nodemon).

API: `http://localhost:3000/todos`

## Notlar

- Secrets (API key vb.) `.env` dosyasında tutulur; `.env` git'e eklenmez.
- TypeScript **5.9.3** kullanılıyor (`ts-loader` henüz TypeScript 7 ile uyumlu değil).
- React örneği Create React App yerine **Vite** kullanır.
- Test suite bilerek eklenmemiştir; odak öğrenme örnekleridir.
