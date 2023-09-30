# Blog

Blog section. Plans, ideas, thoughts, whatever that should be dumped here will be dumped here.

## 2023.09.29

### Rust and Wasm!

At first, I was thinking of writing the charting api with D3.js, yet as september went on I wasn't much convinced. And this is not about D3.js per se, but rather about JavaScript —or TypeScript, for that matter—. You see, I hate JavaScript, it's clunky, slow, and overall just bad. In contrat, what I personally love is speed, reliability, and above all: performance. Can you guess what popular programming language fulfills all of this? Well, the title already spoiled you.

Rust is great, marvelous, the GOAT. With wasm-pack + wasm-bindgen I make use of Wasm in the browser, which lets me achieve much desired performance. My first addition is a simple blob reader where the mime type is verified, and a buffer is returned. This function and all subsequent utilities are consumed by wrappers that handle JavaScript errors in a .ts file.

The next steps to follow are simple: I'll be building the API in rust with wasm-bindgen. The API will consume another crate, hosted in a different repo, handling all plotting operations. This way, there's separation of concerns and it's possible to avoid unneeded dependencies.

## 2023.09.05

### Graphs or Charts?

I suppose no one cares but this' still an interesting topic to look at. This starts with the fact that my first language isn't english, but spanish, so when the idea for this project came up to me what I was always thinking was the spanish word "gráficas", which translated literally means "graphs". The interesting part comes with the difference between graphs and charts which both refer to different groups of diagrams, the former being a subkind of the latter. But in spanish, there's no literal translation for "charts", so both graphs and charts are known by the same word and are indistinguishable from each other —besides the context in a given conversation, or a more specific aspect like the mathematical relationships intrinsic of graphs—.
