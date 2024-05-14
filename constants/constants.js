"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIN_POOL_SIZE = exports.QUOTE_AMOUNT = exports.QUOTE_MINT = exports.PRIVATE_KEY = exports.AUTO_SELL_DELAY = exports.MAX_SELL_RETRIES = exports.AUTO_SELL = exports.SNIPE_LIST_REFRESH_INTERVAL = exports.USE_SNIPE_LIST = exports.CHECK_IF_MINT_IS_RENOUNCED = exports.LOG_LEVEL = exports.RPC_WEBSOCKET_ENDPOINT = exports.RPC_ENDPOINT = exports.COMMITMENT_LEVEL = exports.NETWORK = void 0;
const utils_1 = require("../utils");
exports.NETWORK = 'mainnet-beta';
exports.COMMITMENT_LEVEL = (0, utils_1.retrieveEnvVariable)('COMMITMENT_LEVEL', utils_1.logger);
exports.RPC_ENDPOINT = (0, utils_1.retrieveEnvVariable)('RPC_ENDPOINT', utils_1.logger);
exports.RPC_WEBSOCKET_ENDPOINT = (0, utils_1.retrieveEnvVariable)('RPC_WEBSOCKET_ENDPOINT', utils_1.logger);
exports.LOG_LEVEL = (0, utils_1.retrieveEnvVariable)('LOG_LEVEL', utils_1.logger);
exports.CHECK_IF_MINT_IS_RENOUNCED = (0, utils_1.retrieveEnvVariable)('CHECK_IF_MINT_IS_RENOUNCED', utils_1.logger) === 'true';
exports.USE_SNIPE_LIST = (0, utils_1.retrieveEnvVariable)('USE_SNIPE_LIST', utils_1.logger) === 'true';
exports.SNIPE_LIST_REFRESH_INTERVAL = Number((0, utils_1.retrieveEnvVariable)('SNIPE_LIST_REFRESH_INTERVAL', utils_1.logger));
exports.AUTO_SELL = (0, utils_1.retrieveEnvVariable)('AUTO_SELL', utils_1.logger) === 'true';
exports.MAX_SELL_RETRIES = Number((0, utils_1.retrieveEnvVariable)('MAX_SELL_RETRIES', utils_1.logger));
exports.AUTO_SELL_DELAY = Number((0, utils_1.retrieveEnvVariable)('AUTO_SELL_DELAY', utils_1.logger));
exports.PRIVATE_KEY = (0, utils_1.retrieveEnvVariable)('PRIVATE_KEY', utils_1.logger);
exports.QUOTE_MINT = (0, utils_1.retrieveEnvVariable)('QUOTE_MINT', utils_1.logger);
exports.QUOTE_AMOUNT = (0, utils_1.retrieveEnvVariable)('QUOTE_AMOUNT', utils_1.logger);
exports.MIN_POOL_SIZE = (0, utils_1.retrieveEnvVariable)('MIN_POOL_SIZE', utils_1.logger);
exports.MAX_STAKE_AMOUNT = (0, utils_1.retrieveEnvVariable)('MAX_STAKE_AMOUNT', utils_1.logger);