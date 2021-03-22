import { Model, INTEGER, STRING, DOUBLE } from 'sequelize'
import { sequelize } from '@/infra/database/sequelize'

class ProductModel extends Model { }
  
ProductModel.init({
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: "O campo nome precisa ser preenchido." }
      }
    },
    quantity: {
      type: INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: "O campo quantidade precisa ser preenchido." }
      }
    },
    price: {
      type: DOUBLE,
      allowNull: false,
      validate:{
        notEmpty: { msg: "O campo preço precisa ser preenchido." }
      }
    }
  }, {
    sequelize,
    tableName: 'products',
    name: {
      singular: 'product',
    }
})
  
export const Product = ProductModel
export default ProductModel  