Demonstrates a potential memory leak in the Sproutcore datastore when unloadRecords is used.  Patches to sproutcore-metal/observer.js and sproutcore-metal/accessors.js have been included. One fixes a problem with sproutcore views and call stack overflows (https://github.com/tchak/sproutcore20/commit/b2c622c164dbbc92f5a164622c27b34dde1a3912), the other contains logging code inserted in sproutcore-metal/accessors.js to show the calls to SC.get over time.

Assuming you have bpm installed:

bpm rebuild
bpm preview

Then hit localhost:4020/index.html

The app will perform a remote query (using local data) 10 times, once per second and for each run, it will log the number of times SC.get is called against each property key within that runloop. A basic collection view will display the results of the query.

The following screenshot http://flic.kr/p/ajYpdF shows the log output with the accumulation of calls the SC.get("length") as more records are loaded, despite the call to store.unloadRecords(recordType) before loading each query results.




