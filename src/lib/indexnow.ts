// IndexNow key for www.thetopweightloss.com. Not a secret in the credential
// sense - the protocol requires it to be publicly served at /<key>.txt so
// engines can verify we own the host; it only authorizes submitting THIS
// host's URLs. Rotate by minting a new hex string, updating here, and
// renaming the public key file to match.
export const INDEXNOW_KEY = "65f54cece627caccc03635ea3f66eeda69918baec650af03a89b36b61ec82c7f";
export const INDEXNOW_HOST = "www.thetopweightloss.com";
