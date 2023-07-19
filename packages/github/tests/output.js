module.exports = {
  stdout: `::debug::starting to run tests
::debug::starting to run is ok
::debug::completed running is ok
::debug::starting to run fails
::error title=fails,file=tests/example.js::\\[Error \\[ERR_TEST_FAILURE\\]: this is an error\\] {%0A  failureType: 'testCodeFailure',%0A  cause: Error: this is an error%0A      at TestContext.<anonymous> (.*/example.js:7:11)%0A      at Test.runInAsyncScope (node:async_hooks:206:9)%0A      at Test.run (node:internal/test_runner/test:569:25)%0A      at Suite.processPendingSubtests (node:internal/test_runner/test:316:27)%0A      at Test.postRun (node:internal/test_runner/test:638:19)%0A      at Test.run (node:internal/test_runner/test:597:10)%0A      at async Promise.all (index 0)%0A      at async Suite.run (node:internal/test_runner/test:806:7)%0A      at async startSubtest (node:internal/test_runner/harness:204:3),%0A  code: 'ERR_TEST_FAILURE'%0A}
::debug::starting to run is a diagnostic
::debug::completed running is a diagnostic
::notice file=tests/example.js::this is a diagnostic
::debug::starting to run should fail
::error title=should fail,file=tests/example.js::\\[Error \\[ERR_TEST_FAILURE\\]: The expression evaluated to a falsy value:%0A%0A  assert(false)%0A\\] {%0A  failureType: 'testCodeFailure',%0A  cause: AssertionError \\[ERR_ASSERTION\\]: The expression evaluated to a falsy value:%0A  %0A    assert(false)%0A  %0A      at TestContext.<anonymous> (.*/example.js:10:31)%0A      at Test.runInAsyncScope (node:async_hooks:206:9)%0A      at Test.run (node:internal/test_runner/test:569:25)%0A      at Suite.processPendingSubtests (node:internal/test_runner/test:316:27)%0A      at Test.postRun (node:internal/test_runner/test:638:19)%0A      at Test.run (node:internal/test_runner/test:597:10)%0A      at async Suite.processPendingSubtests (node:internal/test_runner/test:316:7) {%0A    generatedMessage: true,%0A    code: 'ERR_ASSERTION',%0A    actual: false,%0A    expected: true,%0A    operator: '=='%0A  },%0A  code: 'ERR_TEST_FAILURE'%0A}
::error title=tests,file=tests/example.js::\\[Error \\[ERR_TEST_FAILURE\\]: 2 subtests failed\\] { failureType: 'subtestsFailed', cause: '2 subtests failed', code: 'ERR_TEST_FAILURE' }
::debug::starting to run more tests
::debug::starting to run is ok
::debug::completed running is ok
::debug::completed running more tests
::debug::starting to run is skipped
::debug::completed running is skipped
::debug::starting to run is a todo
::debug::completed running is a todo
::group::Test results (3 passed, 2 failed)
::notice::Total Tests: 7%0ASuites 📂: 2%0APassed ✅: 3%0AFailed ❌: 2%0ACanceled 🚫: 0%0ASkipped ⏭️: 1%0ATodo 📝: 1%0ADuration 🕐: 0.094ms
::endgroup::
`,
  summary: `<h1>Test Results</h1>
<table><tr><td>Total Tests</td><td>6</td></tr><tr><td>Suites 📂</td><td>2</td></tr><tr><td>Passed ✅</td><td>3</td></tr><tr><td>Failed ❌</td><td>1</td></tr><tr><td>Canceled 🚫</td><td>0</td></tr><tr><td>Skipped ⏭️</td><td>1</td></tr><tr><td>Todo 📝</td><td>1</td></tr><tr><td>Duration 🕐</td><td>.*ms</td></tr></table>
`,
};
