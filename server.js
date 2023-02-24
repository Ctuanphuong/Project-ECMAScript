
const jsonServer = import('json-server');
const auth = import('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db;

// Xác thực người dùng
server.use(auth);

server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});
