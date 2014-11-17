chai-pretty-expect
==================

Will JSON.stringify and pretty-print objects passed as 2nd, 3rd, ... parameter to expect, for nice test output.

Usage
=====

```
require('chai-pretty-expect')(chai)

expect(resp.statusCode, {stack: resp.body}).to.eql(200); //Will output {stack: resp.body} in case of statusCode is not equal 200
```

