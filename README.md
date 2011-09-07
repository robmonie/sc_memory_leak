Demonstrates a potential memory leak in the Sproutcore datastore when unloadRecords is used.  A patch to sproutcore-metal/observer.js has been included. This fixes a problem with sproutcore views and call stack overflows (https://github.com/tchak/sproutcore20/commit/b2c622c164dbbc92f5a164622c27b34dde1a3912),


In order to log the behaviour described below, it is necessary to add some logging code to sproutcore-metal/accessors.js. This seemed like something I couldn't dynamically patch.

after function get(obj, keyName) //line 26 of sproutcore-metal/accessors.js add the following

    if(!window.callsToGetMethod) {
      window.callsToGetMethod = {};	 		
    }

    if(window.callsToGetMethod[keyName]) {
      window.callsToGetMethod[keyName] = window.callsToGetMethod[keyName] + 1;
    } else {
      window.callsToGetMethod[keyName] = 1;
    }



Assuming you have bpm installed:

  * bpm rebuild
  * bpm preview

Then hit localhost:4020/index.html

The app will perform a remote query (using local data) 10 times, once per second and for each run, it will log the number of times SC.get is called against each property key within that runloop. A basic collection view will display the results of the query.

The following screenshot http://flic.kr/p/ajYpdF shows the log output with the accumulation of calls the SC.get("length") as more records are loaded, despite the call to store.unloadRecords(recordType) before loading each query results.




