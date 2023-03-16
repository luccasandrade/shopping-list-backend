import Router from 'koa-router'
import * as items from './modules/items/index.js'
export const router = new Router()


router.get('/items', items.list)
router.post('/items', items.create)
router.put('/items/:id', items.update)
router.delete('/items/:id', items.remove)