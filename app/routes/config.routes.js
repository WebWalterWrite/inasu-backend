import { Router } from 'express';
const router = Router();

router.use((req, res, next) => {
  console.log(req.headers.origin)
  if (req.headers.origin !== 'https://inasu.netlify.com')
    return res.status(403).json({ error: 'bad request' })

  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With, Origin");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next()
});

export default router;

