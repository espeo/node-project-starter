import Sequelize from 'sequelize';
import getConfig from '../config/config';

export default new Sequelize(getConfig('connectionString'));
