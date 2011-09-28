Demonstrates what appears to be a memory leak in sproutcore collection views when underlying bound data is refreshed, causing the view contents to update.

To see the problem:

  * Load index.html
  * Hit the 'Refresh View' button
  * Take a snapshot of the memory profile
  * Repeat several times and then view comparisons of memory snapshots between refreshes of the view data.
  * Each snapshot diff shows many thousand more objects created than deleted, accumulating over time, despite that the same number of views are rendered on each refresh.
  * This test when run in IE, will cause long running script warnings in the browser after several reloads.