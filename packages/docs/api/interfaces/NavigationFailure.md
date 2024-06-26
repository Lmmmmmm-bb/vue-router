---
editLink: false
---

[API Documentation](../index.md) / NavigationFailure

# Interface: NavigationFailure

Extended Error that contains extra information regarding a failed navigation.

## Hierarchy

- `Error`

  ↳ **`NavigationFailure`**

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

___

### from

• **from**: [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)

Route location we were navigating from

___

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Inherited from

Error.name

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

___

### to

• **to**: [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)

Route location we were navigating to

___

### type

• **type**: [`NAVIGATION_ABORTED`](../enums/ErrorTypes.md#NAVIGATION_ABORTED) \| [`NAVIGATION_CANCELLED`](../enums/ErrorTypes.md#NAVIGATION_CANCELLED) \| [`NAVIGATION_DUPLICATED`](../enums/ErrorTypes.md#NAVIGATION_DUPLICATED)

Type of the navigation. One of [NavigationFailureType](../enums/NavigationFailureType.md)
