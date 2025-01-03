This repository demonstrates a common error in Node.js servers where the server crashes when handling large requests.  The bug is caused by not properly handling request data streams, leading to a memory leak. The solution shows how to use streams effectively to prevent this issue.

## Bug

The `bug.js` file contains a Node.js HTTP server that is vulnerable to crashing with large requests. The server appends incoming request data to a string without limiting the buffer size, eventually leading to excessive memory consumption and a crash.

## Solution

The `bugSolution.js` file provides a corrected version of the server. This version uses streams to handle incoming data chunks, preventing a memory leak and the associated crashes caused by large requests. It demonstrates the proper use of `req.on('data')` and `req.on('end')` methods to handle the data stream effectively.

## How to reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Send a large POST request to `http://localhost:3000`.
4. Observe that the server crashes (error: "FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory").
5. Run `node bugSolution.js` and repeat steps 3 and 4. Observe that the server handles the large request without crashing.