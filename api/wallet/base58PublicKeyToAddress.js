import publicKeyToAddress from './publicKeyToAddress'
import Base58 from '../deps/Base58.js'


const base58PublicKeyToAddress = (base58pubkey, qora = false) => {
    const decodePubKey = Base58.decode(base58pubkey)

    const address = publicKeyToAddress(decodePubKey, qora)

    return address
}

export default base58PublicKeyToAddress