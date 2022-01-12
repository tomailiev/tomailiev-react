import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { storage } from "./firebaseInit";

function getStorageUrl(location) {
    return listAll(ref(storage, location))
        .then(res => {
            return Promise.all(res.items.map(x => getDownloadURL(x)))
        })
    // return getDownloadURL(ref(storage, location));
}

function getLink(fbRef) {
    return getDownloadURL(ref(storage, fbRef))
}

export { getStorageUrl, getLink };