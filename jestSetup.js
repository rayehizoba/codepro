import { renderWithRedux } from './src/renderer/lib/testHelpers';

// jest.mock(
//     'redux-persist',
//     () => {
//         const real = jest.requireActual('redux-persist');
//         return {
//             ...real,
//             persistReducer: jest
//                 .fn()
//                 .mockImplementation((config, reducers) => reducers),
//         };
//     },
// );

global.renderWithRedux = renderWithRedux;
