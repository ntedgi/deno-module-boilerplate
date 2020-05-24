# 🦕🦖 deno-module-boilerplate

[Deno](https://deno.land) module starter repository.

## Usage

```typescript
import { getHelloWorld } from "https://raw.githubusercontent.com/ntedgi/deno-module-starter/master/mod.ts";

const helloWorld = getHelloWorld();
console.log(helloWorld); // Prints "Hello World" in bold underline blue
```

## Test

```bash
# unit tests
deno ./test.ts
```

## Format code

```bash
deno fmt **/*.ts
```
