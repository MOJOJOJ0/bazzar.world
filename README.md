# bazzar.world


![2022-03-02 12 59 45](https://user-images.githubusercontent.com/15316862/156429989-ca334ca4-d750-4dc0-8ac4-619b6373b443.gif)

# bazzar.world marketplace-API

java springboot backend

## About
This repo contains the frontend of a full stack app. The idea is just a simple marketplace.

## User Stories

- [ ] As a user, I have login options

- [ ] As a user, add to cart option is visible and interactive

- [x] ~As a user, I can see unique products and their prices~

- [ ] As a user, I can interact with payment methods (including crypto)

- [ ] As a user, I can see the checkout option

- [ ] As a user, I can see the order and delivery info at the last phase


## ERD diagram
<img width="951" alt="Screen Shot 2022-02-23 at 4 09 00 PM" src="https://user-images.githubusercontent.com/15316862/156426538-d28eb60a-f8a4-4be9-85c3-04b2c70e652d.png">

## Tech Used

- angular 2+
- kanban board
- font awesome
- bootstrap
- typescript
- favicon.cc


## Endpoints

Request Type | URL | Request Body | Description
------------ | --- |--------------|-----------------
GET | /api/products | product name, product price | shows the inventory
GET | /api/category{id} | product details| shows detailed product preview
