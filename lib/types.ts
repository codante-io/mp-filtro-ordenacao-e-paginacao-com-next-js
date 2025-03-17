export type Order = {
    id: number
    customer_name: string
    customer_email: string
    order_date: string
    amount_in_cents: number
    status: string,
    created_at: string,
    updated_at: string

}

// {
//     id: 66,
//     customer_name: 'Tiago Rico',
//     customer_email: 'tiago.rico@example.com',
//     order_date: '2015-05-05',
//     amount_in_cents: 277986,
//     status: 'pending',
//     created_at: '2025-03-16T22:00:03.000000Z',
//     updated_at: '2025-03-16T22:00:03.000000Z'
//   },