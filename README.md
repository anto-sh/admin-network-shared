# @anto-sh/admin-network-shared

Shared TypeScript types and constants for API responses, messages, and validation.
## Repositories

- Shared package: [anto-sh/admin-network-shared](https://github.com/anto-sh/admin-network-shared).
- Frontend: [anto-sh/admin-frontend](https://github.com/anto-sh/admin-frontend), normally at `../admin-frontend` locally.
- Backend: [anto-sh/admin-backend](https://github.com/anto-sh/admin-backend), normally at `../admin-backend` locally.

## Project documentation

- Shared principles: frontend `manifesto.md`, normally at `../admin-frontend/manifesto.md`.
- API integration: frontend `DOCS.md`, section 5, normally at `../admin-frontend/DOCS.md`.

## Installation

```sh
npm install @anto-sh/admin-network-shared
```

The package provides CommonJS, ESM, and TypeScript declarations from `dist`.

## Development

```sh
npm run build
```

Use `npm run dev` to rebuild on changes. Package imports resolve to the generated `dist` files.

## Contracts

### API responses

[`ApiResponse<T>`](src/network-api-response.ts) is a response envelope: `status` is `success` or `error`, `message` holds a network message or `undefined`, and optional `data` and `timestamp` hold the payload and response timestamp.

### Network messages

`NetworkMessage` contains a `code` and optional `params`. [`NETWORK_MESSAGE_CODES`](src/network-message-codes.ts) catalogs common errors, uploads, and entity events. [`NetworkMessageParamsFor<C>`](src/network-message-params.ts) describes parameters for a chosen code. Consumers supply the display text.

### Validation errors

[`ValidationErrorData`](src/validation.ts) contains a `validationErrors` array. Each `ValidationIssue` identifies the field through `path`, the problem through `code`, and any required details through `params`.

Paths contain field names and numeric array indices; `[]` means the whole request. `VALIDATION_CODES` lists the supported problems, and TypeScript checks the parameters required by each code.
