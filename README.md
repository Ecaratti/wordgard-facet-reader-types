# `state.facet(facet)` doesn't type-check in Wordgard 0.7.0

```sh
npm install
npm run check
```

type error:

```
repro.ts(8,13): error TS2345: Argument of type 'Facet<boolean, boolean>' is not assignable to parameter of type 'Reader<unknown>'.
  Property 'tag' is missing in type 'Facet<boolean, boolean>' but required in type 'Reader<unknown>'.
repro.ts(12,13): error TS2345: Argument of type 'Facet<number, readonly number[]>' is not assignable to parameter of type 'Reader<unknown>'.
  Property 'tag' is missing in type 'Facet<number, readonly number[]>' but required in type 'Reader<unknown>'.
```
