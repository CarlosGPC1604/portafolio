export const GRID_SIZE = 10;

export function createEmptyGrid(size: number): number[][] {
    return Array.from({ length: size }, () => Array(size).fill(0));
}

export function canFit(
    grid: number[][],
    x: number,
    y: number,
    size: number
): boolean {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (grid[y + i] && grid[y + i][x + j] !== 0) {
                return false;
            }
        }
    }
    return true;
}

export function placeCard(
    grid: number[][],
    x: number,
    y: number,
    size: number,
    id: number
) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            grid[y + i][x + j] = id;
        }
    }
}

function tryPlaceCard(grid: number[][], card: { id: number, size: number }): boolean {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (canFit(grid, x, y, card.size)) {
                placeCard(grid, x, y, card.size, card.id);
                return true;
            }
        }
    }
    return false;
}

export function arrangeCards(cards: { id: number, size: number }[]): number[][] {
    let grid = createEmptyGrid(GRID_SIZE);

    for (const card of cards.sort((a, b) => b.size - a.size)) {
        if (!tryPlaceCard(grid, card)) {
            const newSize = grid.length + card.size;
            grid = createEmptyGrid(newSize);
            tryPlaceCard(grid, card); // Intentamos colocar la tarjeta de nuevo en el grid expandido
        }
    }

    return grid;
}
