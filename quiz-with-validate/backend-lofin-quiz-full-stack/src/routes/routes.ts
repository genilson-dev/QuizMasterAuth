import { Router } from "express";
const router = Router();
import { CreateUserControllers } from "../controllers/user/CreateUserControllers";

router.get('/teste', (req, res) => {
  res.send('Rota de teste funcionando!');
});

router.post('/users', new CreateUserControllers().handle);

export default router;
