/* IMPORT */

import crypto from 'node:crypto';
import type { Crypto } from '@simplewebauthn/typescript-types';

/* MAIN */

const WebCrypto = crypto.webcrypto as unknown as Crypto; //TSC

/* EXPORT */

export default WebCrypto;
