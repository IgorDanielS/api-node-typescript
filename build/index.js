"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
server_1.server.listen(process.env.HTTP_PORT, () => {
    console.log('-------------------------------------------------------------');
    console.log(`🚀 App starting in ${process.env.NODE_ENV} mode on port ${process.env.HTTP_PORT}!! 🚀`);
    console.log('-------------------------------------------------------------');
});
