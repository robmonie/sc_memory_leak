Demonstrates what appears to be a memory leak in sproutcore collection views when underlying bound data is refreshed, causing the view contents to update.

To see the problem:

  * Load index.html
  * Hit the 'Refresh View' button
  * Take a snapshot of the memory profile
  * Repeat several times and then view comparisons of memory dump between refreshes of the view data.