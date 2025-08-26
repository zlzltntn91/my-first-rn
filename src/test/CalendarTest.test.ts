import { DateTime } from 'luxon';
import {describe} from "@jest/globals";
// npm install --save-dev ts-node
// npm i --save-dev @types/jest
// npm install --save-dev jest ts-jest
// npm install --save-dev @jest/globals
// npm init jest@latest
//     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
//      • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
// npx expo install jest-expo jest @types/jest --dev
describe('should return the current date', () => {
    test('should return the current date', () => {
        let now: DateTime = DateTime.now();

        let weekday = now.weekday % 7;
        let startOfMonth = now.startOf('month').day;
        let daysInMonth = now.daysInMonth;


        console.log(startOfMonth);
        console.log(daysInMonth);
        console.log(weekday);
    })
});