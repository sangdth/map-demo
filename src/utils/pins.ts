import { v4 as uuidv4 } from 'uuid';
import type { PinData, Coordinates } from '@/types';

// Function to generate a random floating-point number between min and max
function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Generate random names for labels
const randomFruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Fig',
  'Grape',
  'Lemon',
  'Mango',
  'Orange',
  'Peach',
];

// Generate random color names like red, green for labels
const randomColors = [
  'Red',
  'Green',
  'Blue',
  'Yellow',
  'Pink',
  'Purple',
  'White',
  'Black',
  'Brown',
];

function generateRandomNames(array1: string[], array2: string[]): string[] {
  const result: string[] = [];

  for (const item1 of array1) {
    for (const item2 of array2) {
      result.push(`${item2} ${item1}`);
    }
  }

  return result;
}

// Define the bounds for Finland's coordinates
const finlandBounds = {
  minLong: 20.5779,
  maxLong: 31.5869,
  minLat: 59.4544,
  maxLat: 70.092,
};

// Generate 1000 objects with random data
const generatedData: PinData[] = [];
const randomNames = generateRandomNames(randomFruits, randomColors);

for (let i = 0; i < 10000; i++) {
  const id = uuidv4();
  const label = randomNames[Math.floor(Math.random() * randomNames.length)];
  const long = getRandomFloat(finlandBounds.minLong, finlandBounds.maxLong);
  const lat = getRandomFloat(finlandBounds.minLat, finlandBounds.maxLat);
  const coordinates: Coordinates = [long, lat];

  generatedData.push({ id, label, location: { coordinates } });
}

export const pinData: PinData[] = generatedData;
