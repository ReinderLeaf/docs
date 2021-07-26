---
title: Overview
---

Leaf's system can be customized to present different behaviours across services. This is done using Configurations.

All Api Owners start with a default configuration set. These configurations can be changed, but they can not be deleted or set to `null`.

Leaf Users do not start with Configuration, but they inherit the configurations from the Api Owner. A custom configuration can be set for a Leaf User. Configurations set for a Leaf User won't be changed if the Api Owner's configuration changes. On the other hand, configurations not set for the Leaf User will reflect changes from the Api Owner's configurations. Leaf User's Configurations can be deleted or have values set to `null`, in which case the values are inherited from the Api Owner.

Currently, available configurations are:

- `operationsImageCreation` - If set to `true`, Leaf will generate images of operations when processing them. If set to `false`, Leaf won't create the images. The default value is `true`.
- `geoimagesResolution` - Resolution of the generated images of operations. The default value is `0.00001`.
- `geoimagesShape` - Shape of points to be used when generating images of operations. It can assume the values `ROUND` and `SQUARE`. The default value is `SQUARE`.
- `geoimagesProjection` - Projection to be used when generating images of operations. It can assume the values `EPSG:3857` and `EPSG:4326`. The default value is `EPSG:3857`.
- `geoimagesColorRamp` - The color ramp to be used when generating images of operations. It's a map from a percentage value to a list containing a color in RGB or RGBA. The last entry in the map must contain a value for the `nv` key, mapping to the color for null values. The default value is
```
{
    "0%"  : [200,   0, 0],
    "35%" : [255,  40, 0],
    "45%" : [255, 150, 0],
    "55%" : [255, 240, 0],
    "65%" : [  0, 230, 0],
    "75%" : [  0, 190, 0],
    "100%": [  0, 130, 0],
    "nv"  : [  0,   0, 0, 0]
}
```
- `fieldsAutoSync` - If set to `true`, Leaf will automatically synchronize provider's fields. If set to `false`, synchronizations must be manually requested via endpoint. The default value is `true`.