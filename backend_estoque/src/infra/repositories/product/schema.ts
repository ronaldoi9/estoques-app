import Joi from 'joi'

export const schema = Joi.object({
    name: Joi.string().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required()
})
