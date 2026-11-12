import { GardState } from "wordgard/state"
import { Wordgard } from "wordgard/editor"

let state = GardState.create({})

// error TS2345: Argument of type 'Facet<boolean, boolean>' is not assignable
// to parameter of type 'Reader<unknown>'. Property 'tag' is missing.
state.facet(Wordgard.editable)

// Same for a newly defined facet.
let myFacet = GardState.Facet.define<number>()
state.facet(myFacet)

// Compiles.
state.facet(Wordgard.editable.reader)
