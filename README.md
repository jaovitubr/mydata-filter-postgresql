# OData Filter - PostgreSql Transformer
Postgre transformer for [odata-filter](https://www.npmjs.com/package/odata-filter) package

[![npm version](https://badge.fury.io/js/odata-filter-postgresql.svg)](https://badge.fury.io/js/odata-filter-postgresql)
[![GitHub issues](https://img.shields.io/github/issues/joaovitmac/odata-filter-postgresql.svg)](https://github.com/joaovitmac/odata-filter-postgresql/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/joaovitmac/odata-filter-postgresql/main/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/joaovitmac/odata-filter-postgresql.svg?style=social&label=Stars)](https://github.com/joaovitmac/odata-filter-postgresql)
[![GitHub forks](https://img.shields.io/github/forks/joaovitmac/odata-filter-postgresql.svg?style=social&label=Forks)](https://github.com/joaovitmac/odata-filter-postgresql)

## Installation

```shell
npm install odata-filter-postgresql
```

## Usage

Transform a filter string to a PostgreSql query

```javascript
import { ParseSync } from "odata-filter";
import PostgreSqlTransformer from "odata-filter-postgresql";

const filter = `(user.username == "Ana") or (username == "Mari")`;

try {
    const query = ParseSync(filter, {
        transformer: new PostgreSqlTransformer()
    });

    console.log(query); // ("user"."username" = 'Ana') OR ("username" = 'Ana')
} catch (error) {
    console.error(error);
}
```

Transform a filter string to a PostgreSql query asynchronously

```javascript
import { ParseSync } from "odata-filter";
import PostgreSqlTransformer from "odata-filter-postgresql";

const filter = `(user.username == "Ana") or (username == "Mari")`;

Parse(filter, {
    transformer: new PostgreSqlTransformer()
}).then(query => {
    console.log(query); // ("user"."username" = 'Ana') OR ("username" = 'Ana')
}).catch(error => {
    console.error(error);
});
```

## Constructor optional options

Name | Type | Description
------------ | ------------- | -------------
max_inline_functions | number | Define max inline call functions
scope | string[][] | Define scope with available identifiers