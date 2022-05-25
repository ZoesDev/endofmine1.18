/// <reference path="./globals.d.ts" />
declare function onEvent(name: "recipes", handler: (event: Internal.RecipeEventJS) => void);
declare function onEvent(name: "item.registry", handler: (event: Internal.ItemRegistryEventJS) => void);
declare function onEvent(name: "block.registry", handler: (event: Internal.BlockRegistryEventJS) => void);
declare function onEvent(name: "jei.hide.items", handler: (event: Internal.HideJEIEventJS<any>) => void);
