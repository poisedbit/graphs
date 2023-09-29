use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::JsFuture;
use web_sys::Blob;

#[wasm_bindgen]
pub async fn read_blob(blob: Blob) -> Result<JsValue, JsValue> {
    let blob_type: String = blob.type_();
    let l_type: &str = blob_type.split("/").next().unwrap();

    if let "text" = l_type {
        return JsFuture::from(blob.text()).await?.dyn_into::<JsValue>();
    }

    Err(JsValue::UNDEFINED)
}

/*
   pending:
       - finishi lib.rs
           - try with returning the promise, and catching beforehand
           - check typings with wasm-bindgen
       - coverage doesn't works, deletes src/test/coverage every time ``bun test:unit`` is executed

*/
