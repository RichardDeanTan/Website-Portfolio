interface ImportMetaEnv {
  /** Web3Forms access key for the contact form. Public by design. */
  readonly PUBLIC_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
