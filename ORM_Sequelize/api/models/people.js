'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class People extends Model
  {
    static associate(models)
    {
      People.hasMany(models.Classes, {foreignKey: 'teacher_id'})
      People.hasMany(models.Enrollment, {foreignKey: 'student_id', scope: { status: 'confirmed' }, as: 'EnrollmentClasses'})
    }
  }

  People.init({
    name: {
      type: DataTypes.STRING,
      validate:
      {
        validateFucntion: function(data)
        {
          if(data.length < 3) throw new Error('The field Name needs to be greater than 3 characters')
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING, 
      validate: { isEmail: { args: true, msg: 'Invalid e-mail data type' }}
    },
    role: DataTypes.STRING
  },
  {
    sequelize,
    paranoid: true,
    defaultScope: { where: { active: true }},
    scopes: { all: { where: {} }},
    modelName: 'People'
  });

  return People;
};