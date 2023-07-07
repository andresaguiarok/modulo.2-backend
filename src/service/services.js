const { UserDao, ProductDao, CartDao, TicketDao } = require("../dao/factory.js");
const { ContactRepository } = require("../repositories/contactRepository.js");
const { ProductsRespository } = require("../repositories/productRepository.js")

const userService = UserDao
const productService = new ProductsRespository(ProductDao)
const cartService = CartDao
const ticketService = TicketDao
const contactService = new ContactRepository(UserDao)

module.exports = {
    userService,
    productService,
    cartService,
    ticketService,
    contactService
}