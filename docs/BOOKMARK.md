# Web Architecture

## WebDB

## Bookmarks **_( bookmarks )_**

```
- id                    - uuid
- parent_id             - uuid    - nullable
- type                  - string  - folder | url
- info                  - json    - folder => {name}
                                  - url => {title, favicon, url}
- device_info           - json
- created_at            - timestamp
- updated_at            - timestamp
- deleted_at            - timestamp
- synced_at             - timestamp
```

## UnSynced Data

```
- related_to                    - string
- related_id                    - uuid
- mutation                      - c | u | d

-> create

-> update

-> delete

```

## Server Sync DB Batches

```
- id                    - uuid
```

## Server Sync Monitor **_(server_sync_monitors)_**

```
- collection_name       - string
- last_synced_at        - timestamp
```

## Use service workers to sync bookmarks or any data

```

```
