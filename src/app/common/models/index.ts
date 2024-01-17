export interface Skill {
  name: string;
  experience: number;
  proficiency: number;
  showcased: boolean;
  id: number;
}

export interface Endpoints {
  api: any;
}

/** Error entity for consistent error-handling. */
export interface AppError {
  message: string;
  header: string;
  type: string;
}

export interface CryptofontResponse {
  decimals: number;
  logoURI: string;
  chainId: number;
  address: string;
  symbol: string;
  chain: string;
  name: string;
}

export interface CryptofontChain {
  chain: string;
  id: number;
}

export interface CryptoChain {
  active: boolean;
  chain: string;
  id: number;
}
