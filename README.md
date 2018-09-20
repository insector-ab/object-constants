# object-constants &middot; [![GitHub license](https://img.shields.io/github/license/insector-ab/object-constants.svg)](https://github.com/insector-ab/object-constants/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/object-constants.svg?style=flat)](https://www.npmjs.com/package/object-constants)

Define constants on an object.

## Install

```sh
npm install object-constants
```

## Example usage
```javascript
import { addConstantsToClass } from 'object-constants';

export class Compliance {}
addConstantsToClass(Compliance, {
  NONE: 'None',
  ICAO: 'ICAO',
  FAA: 'FAA',
  TP312: 'TP312',
  CAP168: 'CAP168',
  TRANSPORTSTYRELSEN: 'Transportstyrelsen'
});
```

## Change log

N/A

## License

This software is licensed under the [MIT License](https://github.com/insector-ab/object-constants/blob/master/LICENSE).
