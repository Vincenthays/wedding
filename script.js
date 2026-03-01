async function deriveKey(password, salt, iterations) {
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    password,
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );
}

async function decryptData(ciphertext, secret) {
  const encoder = new TextEncoder('utf-8');
  const secretBytes = encoder.encode(secret);
  const secretHash = await crypto.subtle.digest('SHA-256', secretBytes);
  const secretDigest = new Uint8Array(secretHash);
  
  const salt = secretDigest.slice(0, 16);
  const iv = secretDigest.slice(16, 28);
  const iterations = secretDigest.slice(28, 31).reduce((a, b) => (a << 8) | b, 0);
  const password = secretDigest.slice(31);

  const key = await deriveKey(password, salt, iterations);

  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    ciphertext
  );

  return decrypted;
}

document.addEventListener('alpine:init', async () => {
    Alpine.store('params', {});
    
    const resp = await fetch('data.bin');
    const ciphertext = await resp.arrayBuffer();
    const secret = window.location.hash.substring(1);        
    const data = await decryptData(ciphertext, secret);
    const params = JSON.parse(new TextDecoder('utf-8').decode(data));
    console.log(params);

    Alpine.store('params', { ...params, date: new Date(params.t) });
});
