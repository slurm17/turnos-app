export default {
    // Especifica el entorno de prueba (jsdom para pruebas de frontend)
    testEnvironment: 'jsdom',
  
    // Transforma archivos TypeScript y JavaScript usando ts-jest
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.jsx?$': 'babel-jest',
    },
  
    // Define dónde Jest debe buscar los archivos de prueba
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  
    // Ignora ciertas carpetas o archivos
    testPathIgnorePatterns: ['/node_modules/'],
  
    // Configura jest-dom para mejorar las aserciones en pruebas de React
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
  
    // Soporte para módulos de Vite (opcional, dependiendo de tu configuración)
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Mapea alias de Vite (si los usas)
    },
  }