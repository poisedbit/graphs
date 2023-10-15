use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::JsFuture;
use web_sys::Blob;

#[wasm_bindgen]
pub async fn read(blob: Blob) -> Result<JsValue, JsValue> {
    let blob_type: String = blob.type_();
    let l_type: &str = blob_type.split("/").next().unwrap();

    if let "text" = l_type {
        return JsFuture::from(blob.text()).await?.dyn_into::<JsValue>();
    }

    Err(JsValue::UNDEFINED)
}
