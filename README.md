## Background

In our main application, we're experiencing significant performance issues with IE 7/8 after a small amount of usage. The performance degrades very quickly, to the point where long running script warnings are presented by IE to the user. We've attempted to reproduce this issue in a very basic application (this), to help in debugging and hopefully fixing what appears to be a memory leak in Sproutcore collection views when underlying bound data is refreshed, causing the view contents to update.

## Steps to reproduce:

  * Load index.html
  * Hit the 'Refresh View' button
  * Take a snapshot of the memory profile
  * Repeat several times and then view comparisons of memory snapshots between refreshes of the view data.
  * Each snapshot diff shows many thousand more objects created than deleted, accumulating over time, despite that the same number of views are rendered on each refresh.


While it isn't the main point of this particular test, there's another interesting thing that happens with the store. If you try to unload all records of a type from the store before performing the remote query, the time of each view refresh will grow significantly each time.  I suspect this is a datastore issue though.

To reproduce, uncomment the line in main.js App.Datasource.refresh()

  /* store.unloadRecords(query.recordType) */