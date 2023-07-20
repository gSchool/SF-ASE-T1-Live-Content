# Vehicle History Report Workshop

Your task is to use the vehicle incident data provided to print out a report of incidents given a VIN.

Your solution should follow these requirements:
* declare and invoke at least one function
* incidents should be sorted reverse-chronological (newest at the top)
* Reports should look like the example below

```
--------------------------------------------------
|                VEHICLE HISTORY                 |
--------------------------------------------------
             -  WBSWD9C98CP692101  -

Incidents:
--------------------------------------------------
1/19/2019 - This is the description of the latest incident
--------------------------------------------------
7/9/2017 - This is the description of the 2017 incident
--------------------------------------------------
2/14/2011 - This is the description of the 2011 incident
```

## Bonus Additions

Here are some extras you can try to add once you get the base code working.

* Avoid repeating the common elements in the report output, such as the horizontal lines or the header
* See where you can contain common logic in more functions
* print out reports for ALL vehicles but do not print out two reports for the same vehicle (no repeated reports)