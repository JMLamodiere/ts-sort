import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("daBiXu");
const charactersSorter = new Sorter(charactersCollection);
charactersSorter.sort();

console.log(charactersCollection.data);
