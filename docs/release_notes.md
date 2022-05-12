---
title: Release notes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: satellite_endpoints#create-a-satellite-field
[2]: files_sample_output#valid-points
[3]: configurations_overview

### 2.84.0
*2022-05-11*

**Machine operations**
- New config available: `splitOperationsByField`    
If set to true, Leaf will split your Field Operations based on the intersection of each Leaf Field Boundary. The default value is false. 
Check all the configurations available [here][3].

### 2.83.0
*2022-05-03*

**Beta**
- Machine information   
New machine properties available: `vin`, `model`, `make`, `category` and `modelYear`.
The `vin` property can be used to query.


### 2.82.0
*2022-04-26*

**Machine operations**
- Sugar cane  
Leaf API now also support sugar cane files. Be aware that volume measurements will not be available for this crop type.

- New config available: `operationsAutoSync`    
If set to `true` (default), Leaf will automatically synchronize provider's operations.  
Check all the configurations available [here][3].


### 2.81.0
*2022-04-20*

**Machine operations**
- New config available: `cleanupStandardGeojson`   
If set to `true` (default), Leaf will automatically remove [invalid points][2] from the standardGeoJSON file for operations.  
Check all the configurations available [here][3].



- `(0,0)` point removed  
All `(0,0)` points are now automatically removed in our converters.
  
**Imagery**  
- Planet: new asset type available    
Leaf API now also supports PlanetScope's `analytics_5b` asset type which has 5 bands: Red, Green, Blue, Red-Edge and Near infrared.  
You can check our [documentation][1]  for how to filter images by different asset types.

