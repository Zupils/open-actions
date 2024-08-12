// jest.config.cjs
module.exports = {
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'js', 'tsx'],
    transformIgnorePatterns: [
        '/node_modules/'
    ],
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    globals: {
        'ts-jest': {
            useESM: true
        }
    }
};
