import { getDocs, collection, query, where, limit, orderBy } from 'firebase/firestore';
import db from './firebaseInit';

function getItems(collectionName, queryOptions, limitNum, order) {
    const queryParams = [
        collection(db, collectionName),
        queryOptions && where(...queryOptions),
        limitNum && limit(limitNum),
        order && orderBy(...order)
    ].filter(x => !!x);

    const q = query(...queryParams);

    return getDocs(q)
        .then(qSnapshot => {
            const itemsArray = [];
            qSnapshot.forEach(doc => {
                itemsArray.push(Object.assign({ id: doc.id }, doc.data()))
            });

            return itemsArray;
        });
}

export { getItems };