import type { IRawAbiTypeRoot } from '../interfaces/IRawAbiType';
import { EnumType } from '../types/EnumType';
import { GenericType } from '../types/GenericType';
import { StructType } from '../types/StructType';

import { extractStructName } from './extractStructName';

describe('extractStructName.ts', () => {
  /*
    Test helpers
  */
  function makeType(typeId: number, type: string): IRawAbiTypeRoot {
    return {
      typeId,
      type,
      components: null,
      typeParameters: null,
    };
  }

  /*
    Tests
  */
  test('should extract names from Enum', () => {
    const enumRawAbiType = makeType(1, 'enum MyEnumName');

    expect(
      extractStructName({
        rawAbiType: enumRawAbiType,
        regex: EnumType.MATCH_REGEX,
      })
    ).toEqual('MyEnumName');
  });

  test('should extract names from Structs', () => {
    const structRawAbiType = makeType(2, 'struct MyStructName');

    expect(
      extractStructName({
        rawAbiType: structRawAbiType,
        regex: StructType.MATCH_REGEX,
      })
    ).toEqual('MyStructName');
  });

  test('should extract names from Generics', () => {
    const genericRawAbiType = makeType(3, 'generic MyGenericName');

    expect(
      extractStructName({
        rawAbiType: genericRawAbiType,
        regex: GenericType.MATCH_REGEX,
      })
    ).toEqual('MyGenericName');
  });

  test('should throw when trying to extract type', () => {
    const rawAbiType = makeType(3, 'struct');

    const regex = /^struct (.+)$/m;
    expect(() => {
      extractStructName({ rawAbiType, regex });
    }).toThrow(/Couldn't extract struct name with:/);
  });
});
