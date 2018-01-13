module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define("jobs", {
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false
      },

      jobLocation: {
        type: DataTypes.STRING,
        allowNull: false
      },

      jobDescription: {
        type: DataTypes.TEXT,
        allowNull: true
      },

      jobCompany: {
          type: DataTypes.STRING,
          allowNull: true
      },
      
      jobPay: {
          type: DataTypes.INTEGER,
          allowNull: true
      },

      jobPhone: {
          type: DataTypes.INTEGER,
          allowNull: true
      },

      jobContact: {
          type: DataTypes.STRING,
          allowNull: true
      },

      jobURL: {
          type: DataTypes.STRING,
          allowNull: true
      },

      jobHours: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true
      }

    });
    return Job;
  };