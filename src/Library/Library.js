export const library = {
    calculateDensity: (pressure, depth) => {
        let g = 9.81;
        let pressureInPascals = pressure * 6894.76;
        let density = pressureInPascals / (g * depth);
        return density;
      }
}