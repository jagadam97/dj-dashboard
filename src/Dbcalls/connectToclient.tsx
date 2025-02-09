import { createClient } from '@clickhouse/client'

const client = createClient({
    url: `http://beast.jagadam97.uk:8123`,
    username: 'default',
    password: 'qwerty123'
})

export default client
