import { server } from "./server/server";

server.listen(process.env.HTTP_PORT, () => {
 console.log('-------------------------------------------------------------')
  console.log(`🚀 App starting in ${process.env.NODE_ENV} mode on port ${process.env.HTTP_PORT}!! 🚀`)
  console.log('-------------------------------------------------------------')
})
