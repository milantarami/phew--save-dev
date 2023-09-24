# Web Architecture

## Bookmarks **_( bookmarks )_**

```
- id                    - uuid
- parent_id             - uuid
- type                  - string  - folder | url
- info                  - json    - folder => {name}
                                  - url => {title, favicon, url}
- device_info           - json
- created_at            - timestamp
- updated_at            - timestamp
- deleted_at            - timestamp
- synced_at             - timestamp
```

## UnSynced Bookmarks

```
- id                    - uuid
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
