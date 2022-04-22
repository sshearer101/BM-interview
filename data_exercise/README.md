# Data Exercise

The purpose of this exercise is to show compentency with exploring data and manipulating data structures.

Please complete this exercise with either Python or Javascript. A notebook (Jupyter or Observable) are both great options.

Prompt:
One of our clients, Discount Astronaut Store, is selling an Astronaut Suit, and we need to massage their product data to use in our systems so we can make recommendations for their astronaut customers.

Please complete the following and submit your work:

1. Load the data file into memory.
2. Create an empty object with a 'products' key, and assign an empty array as it's value.
3. For each variant in your loaded dataset, generate a flat object that includes the following:

- variant id
- product title + variant title (combined)
- price
- inventory count
- description

Push each of these objects to your new 'products' array.

4. Estimate the potential sales for each variant by multiplying price by inventory. Add a key to each variant object called 'potential_sales'.
5. Calculate the combined potential sales for all variants, and store the value at the top level of your object under the key 'potential_sales_total'.
6. Split variants between variants that have inventory and variants that don't have inventory. Save the variants with inventory in an array under the key 'in_stock_products', and save the variants with no inventory in an array under the key 'out_of_stock_products'.

---

The Astronaut cosplay association (ACA) has contacted the Discount Astronaut Store and requested cosplay suits for their next convention (the Discount Astronaut Store has had to find other customers since it's such a niche market). They have a group of 10 cosplayers with the following sizes:

XS: 0
S: 2
M: 6
L: 2
XL: 0

Massage the data to only display colors and inventory.
1. Can our cosplayers all get the same color with our current inventory? If so, what color can they get?

