# Flat

*This was developed during my time as a student at Code Chrysalis*

*Flat* is a platform which helps Japanese property managment companies collect payment from tenants and pay expenses ralated to rental units.

## Dependencies

- `stripe-mock`: https://github.com/stripe/stripe-mock (for testing)

## Configuration

An `.env` file is needed to connect to a Stripe account. The following are the required environment variables.

Only `STRIPE_KEY` is required for production. The other three are for testing.

```
STRIPE_KEY=sk_test_abcde
STRIPE_HOST=127.0.0.1
STRIPE_PORT=12111
STRIPE_PROTOCOL=http
```

## Stripe API responses

`getAllProducts()`

```json
[
  {
    "id": "prod_IxNsY87n7TRHdE",
    "object": "product",
    "active": true,
    "attributes": [],
    "created": 1613480235,
    "description": "456",
    "images": [],
    "livemode": false,
    "metadata": {
      "owner": "some guy",
      "address": "Setagaya",
      "utilities": ["Tokyo Gas", "Tokyo Electric"]
    },
    "name": "def",
    "statement_descriptor": null,
    "unit_label": null,
    "updated": 1613481348,
  }
]
```

`getSingleProduct()`

```json
{
  "id": "prod_IxNsY87n7TRHdE",
  "object": "product",
  "active": true,
  "attributes": [],
  "created": 1613480235,
  "description": "456",
  "images": [],
  "livemode": false,
  "metadata": {
    "owner": "some guy",
    "address": "Setagaya",
    "utilities": ["Tokyo Gas", "Tokyo Electric"]
  },
  "name": "def",
  "statement_descriptor": null,
  "unit_label": null,
  "updated": 1613481348,
  "prices": [
    {
      "active": true,
      "billing_scheme": "per_unit",
      "created": 1234567890,
      "currency": "usd",
      "id": "price_1HqtnxE5rrbCJ30iplebsXL2",
      "livemode": false,
      "lookup_key": null,
      "metadata": {},
      "nickname": null,
      "object": "price",
      "product": "prod_IRnO1bBtBkzfxg",
      "recurring": [Object],
      "tiers_mode": null,
      "transform_quantity": null,
      "type": "recurring",
      "unit_amount": 2000,
      "unit_amount_decimal": "2000"
    }
  ]
}
```
