# Support API (TP: Git — au-delà du versioning)

## Objectif
Projet de démonstration d'un workflow Git/GitHub professionnel avec CI/CD.

## Structure du projet
support-api/
├── src/
│   ├── models/
│   │   └── RequestType.js
│   ├── routes/
│   │   └── requestTypes.js
│   ├── config/
│   │   └── database.js
│   └── server.js
├── tests/
│   └── requestTypes.test.js
├── scripts/
│   └── seed.js
├── .github/
│   └── workflows/ci.yml
├── .eslintrc.js
├── .prettierrc
├── package.json
└── README.md

## Branch protection (à configurer dans GitHub Settings → Branches)
- Bloquer les pushs directs sur `main` (Restrict who can push)
- Require pull request before merging
- Require approvals: 0 (évaluation solo)
- Dismiss stale pull request approvals when new commits are pushed
- Require status checks to pass before merging: `code-quality`, `tests`
- Require branches to be up to date before merging

*(Ajouter captures d'écran des paramètres GitHub ici)*

## CI/CD
- Job `code-quality`: ESLint + Prettier checks
- Job `tests`: Jest tests with MongoDB service + seed, coverage check >= 70%

## Installation
```bash
npm ci
cp .env.example .env
npm run seed
npm start
```

## Endpoints
- GET /health → { status: 'ok' }
- GET /api/request-types
- GET /api/request-types/:id
- POST /api/request-types

## PR Template
See `.github/pull_request_template.md`

