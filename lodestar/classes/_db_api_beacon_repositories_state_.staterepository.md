[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repositories/state"](../modules/_db_api_beacon_repositories_state_.md) › [StateRepository](_db_api_beacon_repositories_state_.staterepository.md)

# Class: StateRepository

## Hierarchy

* [Repository](_db_api_beacon_repositories_abstract_.repository.md)‹Uint8Array, BeaconState›

  ↳ **StateRepository**

## Index

### Constructors

* [constructor](_db_api_beacon_repositories_state_.staterepository.md#constructor)

### Properties

* [bucket](_db_api_beacon_repositories_state_.staterepository.md#protected-bucket)
* [chain](_db_api_beacon_repositories_state_.staterepository.md#private-chain)
* [config](_db_api_beacon_repositories_state_.staterepository.md#protected-config)
* [db](_db_api_beacon_repositories_state_.staterepository.md#protected-db)
* [type](_db_api_beacon_repositories_state_.staterepository.md#protected-type)

### Methods

* [add](_db_api_beacon_repositories_state_.staterepository.md#add)
* [batchAdd](_db_api_beacon_repositories_state_.staterepository.md#batchadd)
* [batchDelete](_db_api_beacon_repositories_state_.staterepository.md#batchdelete)
* [batchPut](_db_api_beacon_repositories_state_.staterepository.md#batchput)
* [batchRemove](_db_api_beacon_repositories_state_.staterepository.md#batchremove)
* [dbFilterOptions](_db_api_beacon_repositories_state_.staterepository.md#protected-dbfilteroptions)
* [decodeKey](_db_api_beacon_repositories_state_.staterepository.md#decodekey)
* [decodeValue](_db_api_beacon_repositories_state_.staterepository.md#decodevalue)
* [delete](_db_api_beacon_repositories_state_.staterepository.md#delete)
* [encodeKey](_db_api_beacon_repositories_state_.staterepository.md#encodekey)
* [encodeValue](_db_api_beacon_repositories_state_.staterepository.md#encodevalue)
* [entries](_db_api_beacon_repositories_state_.staterepository.md#entries)
* [entriesStream](_db_api_beacon_repositories_state_.staterepository.md#entriesstream)
* [firstEntry](_db_api_beacon_repositories_state_.staterepository.md#firstentry)
* [firstKey](_db_api_beacon_repositories_state_.staterepository.md#firstkey)
* [firstValue](_db_api_beacon_repositories_state_.staterepository.md#firstvalue)
* [get](_db_api_beacon_repositories_state_.staterepository.md#get)
* [getFinalized](_db_api_beacon_repositories_state_.staterepository.md#getfinalized)
* [getId](_db_api_beacon_repositories_state_.staterepository.md#getid)
* [getJustified](_db_api_beacon_repositories_state_.staterepository.md#getjustified)
* [getLatest](_db_api_beacon_repositories_state_.staterepository.md#getlatest)
* [has](_db_api_beacon_repositories_state_.staterepository.md#has)
* [keys](_db_api_beacon_repositories_state_.staterepository.md#keys)
* [keysStream](_db_api_beacon_repositories_state_.staterepository.md#keysstream)
* [lastEntry](_db_api_beacon_repositories_state_.staterepository.md#lastentry)
* [lastKey](_db_api_beacon_repositories_state_.staterepository.md#lastkey)
* [lastValue](_db_api_beacon_repositories_state_.staterepository.md#lastvalue)
* [put](_db_api_beacon_repositories_state_.staterepository.md#put)
* [remove](_db_api_beacon_repositories_state_.staterepository.md#remove)
* [values](_db_api_beacon_repositories_state_.staterepository.md#values)
* [valuesStream](_db_api_beacon_repositories_state_.staterepository.md#valuesstream)

## Constructors

###  constructor

\+ **new StateRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›, `chain`: [ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)): *[StateRepository](_db_api_beacon_repositories_state_.staterepository.md)*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[constructor](_db_api_beacon_repositories_abstract_.repository.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/state.ts:11](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/state.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer› |
`chain` | [ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md) |

**Returns:** *[StateRepository](_db_api_beacon_repositories_state_.staterepository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_api_schema_.bucket.md)*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[bucket](_db_api_beacon_repositories_abstract_.repository.md#protected-bucket)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:22](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L22)*

___

### `Private` chain

• **chain**: *[ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/state.ts:11](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/state.ts#L11)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[config](_db_api_beacon_repositories_abstract_.repository.md#protected-config)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:18](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L18)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[db](_db_api_beacon_repositories_abstract_.repository.md#protected-db)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L20)*

___

### `Protected` type

• **type**: *Type‹BeaconState›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[type](_db_api_beacon_repositories_abstract_.repository.md#protected-type)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:24](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L24)*

## Methods

###  add

▸ **add**(`value`: BeaconState): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[add](_db_api_beacon_repositories_abstract_.repository.md#add)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:80](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | BeaconState |

**Returns:** *Promise‹void›*

___

###  batchAdd

▸ **batchAdd**(`values`: ArrayLike‹BeaconState›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchAdd](_db_api_beacon_repositories_abstract_.repository.md#batchadd)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:99](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹BeaconState› |

**Returns:** *Promise‹void›*

___

###  batchDelete

▸ **batchDelete**(`ids`: ArrayLike‹Uint8Array›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchDelete](_db_api_beacon_repositories_abstract_.repository.md#batchdelete)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:95](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | ArrayLike‹Uint8Array› |

**Returns:** *Promise‹void›*

___

###  batchPut

▸ **batchPut**(`items`: ArrayLike‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Uint8Array, BeaconState››): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchPut](_db_api_beacon_repositories_abstract_.repository.md#batchput)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:88](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | ArrayLike‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Uint8Array, BeaconState›› |

**Returns:** *Promise‹void›*

___

###  batchRemove

▸ **batchRemove**(`values`: ArrayLike‹BeaconState›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchRemove](_db_api_beacon_repositories_abstract_.repository.md#batchremove)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:106](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹BeaconState› |

**Returns:** *Promise‹void›*

___

### `Protected` dbFilterOptions

▸ **dbFilterOptions**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array›): *[IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[dbFilterOptions](_db_api_beacon_repositories_abstract_.repository.md#protected-dbfilteroptions)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:208](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L208)*

Transforms opts from I to Buffer

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array› |

**Returns:** *[IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›*

___

###  decodeKey

▸ **decodeKey**(`key`: Buffer): *Uint8Array*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[decodeKey](_db_api_beacon_repositories_abstract_.repository.md#decodekey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:49](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |

**Returns:** *Uint8Array*

___

###  decodeValue

▸ **decodeValue**(`data`: Buffer): *BeaconState*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[decodeValue](_db_api_beacon_repositories_abstract_.repository.md#decodevalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:41](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer |

**Returns:** *BeaconState*

___

###  delete

▸ **delete**(`id`: Uint8Array): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[delete](_db_api_beacon_repositories_abstract_.repository.md#delete)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:71](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Uint8Array |

**Returns:** *Promise‹void›*

___

###  encodeKey

▸ **encodeKey**(`id`: Uint8Array): *Buffer*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[encodeKey](_db_api_beacon_repositories_abstract_.repository.md#encodekey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:45](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Uint8Array |

**Returns:** *Buffer*

___

###  encodeValue

▸ **encodeValue**(`value`: BeaconState): *Buffer*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[encodeValue](_db_api_beacon_repositories_abstract_.repository.md#encodevalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:37](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | BeaconState |

**Returns:** *Buffer*

___

###  entries

▸ **entries**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array›): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Uint8Array, BeaconState›[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[entries](_db_api_beacon_repositories_abstract_.repository.md#entries)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:136](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array› |

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Uint8Array, BeaconState›[]›*

___

###  entriesStream

▸ **entriesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array›): *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Uint8Array, BeaconState››*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[entriesStream](_db_api_beacon_repositories_abstract_.repository.md#entriesstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:143](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array› |

**Returns:** *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Uint8Array, BeaconState››*

___

###  firstEntry

▸ **firstEntry**(): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Uint8Array, BeaconState› | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[firstEntry](_db_api_beacon_repositories_abstract_.repository.md#firstentry)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:189](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L189)*

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Uint8Array, BeaconState› | null›*

___

###  firstKey

▸ **firstKey**(): *Promise‹Uint8Array | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[firstKey](_db_api_beacon_repositories_abstract_.repository.md#firstkey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:157](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L157)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  firstValue

▸ **firstValue**(): *Promise‹BeaconState | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[firstValue](_db_api_beacon_repositories_abstract_.repository.md#firstvalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:173](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L173)*

**Returns:** *Promise‹BeaconState | null›*

___

###  get

▸ **get**(`id`: Uint8Array): *Promise‹BeaconState | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[get](_db_api_beacon_repositories_abstract_.repository.md#get)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:53](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Uint8Array |

**Returns:** *Promise‹BeaconState | null›*

___

###  getFinalized

▸ **getFinalized**(): *Promise‹BeaconState›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/state.ts:34](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/state.ts#L34)*

**Returns:** *Promise‹BeaconState›*

___

###  getId

▸ **getId**(`value`: BeaconState): *Uint8Array*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[getId](_db_api_beacon_repositories_abstract_.repository.md#getid)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:76](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | BeaconState |

**Returns:** *Uint8Array*

___

###  getJustified

▸ **getJustified**(): *Promise‹BeaconState›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/state.ts:46](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/state.ts#L46)*

**Returns:** *Promise‹BeaconState›*

___

###  getLatest

▸ **getLatest**(): *Promise‹BeaconState›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/state.ts:22](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/state.ts#L22)*

**Returns:** *Promise‹BeaconState›*

___

###  has

▸ **has**(`id`: Uint8Array): *Promise‹boolean›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[has](_db_api_beacon_repositories_abstract_.repository.md#has)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:63](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Uint8Array |

**Returns:** *Promise‹boolean›*

___

###  keys

▸ **keys**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array›): *Promise‹Uint8Array[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[keys](_db_api_beacon_repositories_abstract_.repository.md#keys)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:110](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array› |

**Returns:** *Promise‹Uint8Array[]›*

___

###  keysStream

▸ **keysStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array›): *AsyncIterable‹Uint8Array›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[keysStream](_db_api_beacon_repositories_abstract_.repository.md#keysstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:114](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array› |

**Returns:** *AsyncIterable‹Uint8Array›*

___

###  lastEntry

▸ **lastEntry**(): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Uint8Array, BeaconState› | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[lastEntry](_db_api_beacon_repositories_abstract_.repository.md#lastentry)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:197](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L197)*

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Uint8Array, BeaconState› | null›*

___

###  lastKey

▸ **lastKey**(): *Promise‹Uint8Array | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[lastKey](_db_api_beacon_repositories_abstract_.repository.md#lastkey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:165](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L165)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  lastValue

▸ **lastValue**(): *Promise‹BeaconState | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[lastValue](_db_api_beacon_repositories_abstract_.repository.md#lastvalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:181](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L181)*

**Returns:** *Promise‹BeaconState | null›*

___

###  put

▸ **put**(`id`: Uint8Array, `value`: BeaconState): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[put](_db_api_beacon_repositories_abstract_.repository.md#put)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:67](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Uint8Array |
`value` | BeaconState |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`value`: BeaconState): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[remove](_db_api_beacon_repositories_abstract_.repository.md#remove)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:84](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | BeaconState |

**Returns:** *Promise‹void›*

___

###  values

▸ **values**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array›): *Promise‹BeaconState[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[values](_db_api_beacon_repositories_abstract_.repository.md#values)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:123](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array› |

**Returns:** *Promise‹BeaconState[]›*

___

###  valuesStream

▸ **valuesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array›): *AsyncIterable‹BeaconState›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[valuesStream](_db_api_beacon_repositories_abstract_.repository.md#valuesstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:127](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Uint8Array› |

**Returns:** *AsyncIterable‹BeaconState›*